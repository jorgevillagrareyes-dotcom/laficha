"""PubMed por relevancia: muestra 3 resultados con cita y autores. Uso: python3 pmr.py "consulta" ... [-a] (con -a imprime el resumen del primero)"""
import sys, json, time, urllib.request, urllib.parse, re
B = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
def get(u):
    for i in range(5):
        try:
            with urllib.request.urlopen(u, timeout=30) as r: return r.read().decode()
        except Exception: time.sleep(2 + 2*i)
    return ""
ab = "-a" in sys.argv
for q in [a for a in sys.argv[1:] if a != "-a"]:
    ids = json.loads(get(B+"esearch.fcgi?db=pubmed&retmode=json&sort=relevance&retmax=3&term="+urllib.parse.quote(q)) or '{"esearchresult":{"idlist":[]}}')["esearchresult"]["idlist"]
    print("==", q)
    if not ids: continue
    time.sleep(0.4)
    d = json.loads(get(B+"esummary.fcgi?db=pubmed&retmode=json&id="+",".join(ids)) or '{"result":{}}').get("result", {})
    for i in ids:
        s = d.get(i)
        if not s: continue
        doi = [x["value"] for x in s.get("articleids", []) if x["idtype"] == "doi"]
        au = ", ".join(a["name"] for a in s["authors"][:3])
        print(f'  [{i}] {au}. {s["title"]} {s["source"]} {s["pubdate"]};{s.get("volume")}({s.get("issue")}):{s.get("pages")} {doi}')
    if ab:
        time.sleep(0.4)
        t = get(B+"efetch.fcgi?db=pubmed&rettype=abstract&retmode=text&id="+ids[0])
        print("  RES:", re.sub(r"\s+", " ", t)[-2200:])
    time.sleep(0.4)
