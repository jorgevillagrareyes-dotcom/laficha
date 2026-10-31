// Dibuja los diagramas Mermaid del sitio como SVG, igual que lo haría el navegador.
//
// Uso (después de `mkdocs build`): node scripts/mermaid-svg.js
// Necesita Playwright con Chromium. Guarda cada diagrama en datos/mermaid/<hash>.svg
// (el hash es del código del diagrama); hooks/optimizar.py los incrusta en las
// páginas, así el teléfono no tiene que descargar ni ejecutar Mermaid (3,6 MB).
// Un diagrama sin SVG guardado se sigue dibujando en el navegador como antes.
// Usa el mismo Mermaid local, la misma configuración del tema (themeCSS de
// Material) y las mismas fuentes del sitio, para que el resultado sea idéntico.
const { chromium } = require('playwright');
const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const SITIO = path.join(RAIZ, 'site');
const DESTINO = path.join(RAIZ, 'datos', 'mermaid');
const TIPOS = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.json': 'application/json' };

function htmlDe(dir, salida = []) {
  for (const n of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, n.name);
    if (n.isDirectory()) htmlDe(p, salida); else if (n.name.endsWith('.html')) salida.push(p);
  }
  return salida;
}

(async () => {
  if (!fs.existsSync(SITIO)) { console.error('Primero corre mkdocs build.'); process.exit(1); }
  fs.mkdirSync(DESTINO, { recursive: true });
  // themeCSS que Material le pasa a Mermaid (se toma del bundle del tema)
  const bundle = fs.readdirSync(path.join(SITIO, 'assets/javascripts')).find(f => /^bundle\..*\.min\.js$/.test(f));
  const fuente = fs.readFileSync(path.join(SITIO, 'assets/javascripts', bundle), 'utf8');
  const m = fuente.match(/="(\.node circle(?:[^"\\]|\\.)*)"/);
  if (!m) { console.error('No encontré el themeCSS de Mermaid en el bundle de Material.'); process.exit(1); }
  const themeCSS = JSON.parse('"' + m[1] + '"');

  const paginas = htmlDe(SITIO).filter(p => fs.readFileSync(p, 'utf8').includes('<pre class="mermaid">')).slice(0, Number(process.env.MAX) || undefined);
  const servidor = http.createServer((req, res) => {
    const archivo = path.join(SITIO, decodeURIComponent(req.url.split('?')[0]));
    if (!archivo.startsWith(SITIO) || !fs.existsSync(archivo) || fs.statSync(archivo).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(archivo)] || 'application/octet-stream' });
    fs.createReadStream(archivo).pipe(res);
  }).listen(0);
  const puerto = servidor.address().port;
  const navegador = await chromium.launch();
  // Sin service worker: si no, las navegaciones no pasan por page.route
  const contexto = await navegador.newContext({ viewport: { width: 1300, height: 900 }, serviceWorkers: 'block' });
  const pagina = await contexto.newPage();
  let nuevos = 0, existentes = 0, errores = 0;
  // Se bloquea el bundle del tema para que no dibuje los diagramas por su cuenta
  await pagina.route('**/assets/javascripts/bundle.*.min.js', r => r.fulfill({ status: 200, contentType: 'text/javascript', body: '' }));
  // y se cambia la clase de los diagramas para que Mermaid no los dibuje solo al cargar
  await pagina.route('**/*.html', async r => {
    const resp = await r.fetch();
    r.fulfill({ response: resp, body: (await resp.text()).split('<pre class="mermaid">').join('<pre class="lf-diagrama">') });
  });
  for (const p of paginas) {
    const rel = path.relative(SITIO, p).split(path.sep).join('/');
    await pagina.goto(`http://localhost:${puerto}/${rel}`, { waitUntil: 'load' });
    const res = await pagina.evaluate(async (themeCSS) => {
      await document.fonts.load('16px "Source Sans 3"');
      await document.fonts.ready;
      mermaid.initialize({ startOnLoad: false, themeCSS, sequence: { actorFontSize: '16px', messageFontSize: '16px', noteFontSize: '16px' } });
      const salida = [];
      let i = 0;
      for (const pre of document.querySelectorAll('pre.lf-diagrama')) {
        const codigo = pre.textContent;
        try {
          // Mismo contenedor que usa Material: el SVG se mide dentro de un div.mermaid de la página
          const div = document.createElement('div'); div.className = 'mermaid';
          pre.replaceWith(div);
          const { svg } = await mermaid.render(`__mermaid_${i++}`, codigo);
          salida.push({ codigo, svg });
        } catch (e) { salida.push({ codigo, error: String(e) }); }
      }
      return salida;
    }, themeCSS);
    if (process.env.DEPURAR) console.log(rel, res.length);
    for (const { codigo, svg, error } of res) {
      const hash = crypto.createHash('sha1').update(codigo, 'utf8').digest('hex').slice(0, 16);
      const archivo = path.join(DESTINO, hash + '.svg');
      if (error) { errores++; console.error(rel, error); continue; }
      if (fs.existsSync(archivo)) { existentes++; continue; }
      fs.writeFileSync(archivo, svg); nuevos++;
    }
  }
  await navegador.close(); servidor.close();
  console.log(`mermaid-svg.js: ${nuevos} SVG nuevos, ${existentes} ya estaban, ${errores} con error (${paginas.length} páginas).`);
})();
