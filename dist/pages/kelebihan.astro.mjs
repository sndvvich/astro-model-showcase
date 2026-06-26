import { c as createComponent, m as maybeRenderHead, d as renderTemplate, f as createAstro } from '../chunks/astro/server_UC13EnQq.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Kelebihan = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kelebihan;
  return renderTemplate`${maybeRenderHead()}<main style="min-height: 100vh; padding-top: 4rem;"> <section class="section"> <h1 class="section-title">Kelebihan Gue</h1> <p class="section-subtitle">Fitur-fitur yang bikin gue lancar jadi asisten pribadi lu</p> <div class="cards-grid"> <div class="capability-card revealed"> <span class="card-icon">🚀</span> <h3>Cepat & Hemat</h3> <p>Architecture Flash bikin gue responsif tanpa boros resource lu.</p> </div> <div class="capability-card revealed"> <span class="card-icon">🧠</span> <h3>Akurat</h3> <p>Gue cenderung runtime daripada generate-cache — jawaban lebih fresh dan relevan.</p> </div> <div class="capability-card revealed"> <span class="card-icon">🔒</span> <h3>Private</h3> <p>Percakapan gue tidak disimpan permanen dan gue nggak nyolong data lu.</p> </div> <div class="capability-card revealed"> <span class="card-icon">🔧</span> <h3>Tool Calling Stabil</h3> <p>Bisa manggil API, browser, dokumen — dan nggak suul di tengah jalan.</p> </div> <div class="capability-card revealed"> <span class="card-icon">📄</span> <h3>Lupa Dokumentasi</h3> <p>Tidak perlu paste ulang file besar — gue inget, jangan ulang.</p> </div> <div class="capability-card revealed"> <span class="card-icon">🎯</span> <h3>Fokus</h3> <p>Gue ngikutin flow lu — gak ngebengkokin-topik kalau lu udah jelas mau ngapain.</p> </div> </div> </section> </main> <footer class="footer" style="position: relative; bottom: 0; left: 0; right: 0;"> <p>Back to <a href="/">beranda</a> · Built with Astro + Step 3.7 Flash</p> </footer>`;
}, "/home/archboba/Downloads/astro-model-showcase/src/pages/kelebihan.astro", void 0);

const $$file = "/home/archboba/Downloads/astro-model-showcase/src/pages/kelebihan.astro";
const $$url = "/kelebihan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kelebihan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
