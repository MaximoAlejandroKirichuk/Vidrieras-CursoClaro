// Vuelve relativas las rutas de dist para poder abrir index.html con doble clic.
// En Netlify funciona igual.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';

const dist = 'dist';
const archivos = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? archivos(p) : [p];
});

for (const f of archivos(dist)) {
  if (f.endsWith('.html')) {
    const prof = dirname(relative(dist, f)).split(sep).filter((x) => x && x !== '.').length;
    const up = '../'.repeat(prof) || './';
    let t = readFileSync(f, 'utf8');
    t = t.replace(/(href|src)="\/_astro\//g, `$1="${up}_astro/`)
      .replace(/href="\/favicon\.svg"/g, `href="${up}favicon.svg"`)
      .replace(/href="\/(idiomas|oficios|holistico)([^"?#]*)([?#][^"]*)?"/g, (_, institute, route, query = '') => `href="${up}${institute}${route.replace(/\/$/, '')}/index.html${query}"`)
      .replace(/href="\/"/g, `href="${up}index.html"`);
    writeFileSync(f, t);
  }
  if (f.endsWith('.css')) {
    const t = readFileSync(f, 'utf8').replace(/url\(\/_astro\//g, 'url(./');
    writeFileSync(f, t);
  }
}
console.log('dist listo: rutas relativas aplicadas.');
