// Revisa páginas compiladas de La Ficha en un celular simulado (390 × 844).
// Uso: (cd site && python3 -m http.server 8765 &) ; node revisar_movil.js ruta/pagina [otra/pagina ...]
// Las rutas van sin ".html" (por ejemplo: cardiologia/insuficiencia-cardiaca).
// Informa el estado HTTP, el desborde horizontal, los errores de JavaScript y cuántos diagramas Mermaid hay, y guarda
// una captura de la parte superior de cada página en /tmp/revision-<nombre>.png.
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) {
  // Playwright suele estar instalado de forma global (npm root -g), fuera del proyecto.
  const raiz = require('child_process').execSync('npm root -g').toString().trim();
  ({ chromium } = require(require('path').join(raiz, 'playwright')));
}

(async () => {
  const paginas = process.argv.slice(2);
  if (!paginas.length) { console.log('Indica al menos una ruta, por ejemplo: cardiologia/insuficiencia-cardiaca'); process.exit(1); }
  const b = await chromium.launch();
  let problemas = 0;
  for (const p of paginas) {
    const pg = await b.newPage({ viewport: { width: 390, height: 844 } });
    const errs = [];
    pg.on('pageerror', e => errs.push(e.message));
    const r = await pg.goto('http://localhost:8765/' + p + '.html');
    await pg.waitForTimeout(1500);
    const desborde = await pg.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    const mermaid = await pg.$$eval('.mermaid', els => els.length);
    const nombre = p.replace(/\//g, '_');
    await pg.screenshot({ path: `/tmp/revision-${nombre}.png` });
    const ok = r && r.ok() && desborde <= 0 && errs.length === 0;
    if (!ok) problemas++;
    console.log(`${ok ? 'OK ' : 'MAL'} ${p} · estado ${r ? r.status() : '?'} · desborde ${desborde}px · diagramas ${mermaid} · errores ${errs.length}${errs.length ? ': ' + errs.join(' | ') : ''}`);
    await pg.close();
  }
  await b.close();
  process.exit(problemas ? 1 : 0);
})();
