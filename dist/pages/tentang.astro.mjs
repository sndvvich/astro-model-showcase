import { c as createComponent, m as maybeRenderHead, d as renderTemplate } from '../chunks/astro/server_UC13EnQq.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Tentang = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem;"> <h1 style="font-size: 2.5rem; font-weight: 800; color: var(--text-primary);">Tentang Gue</h1> <p style="max-width: 600px; color: var(--text-secondary); margin-top: 1rem; font-size: 1.1rem;">
Gue adalah AI assistant yang dijalankan di atas Step 3.7 Flash — model high-efficiency buat agent produksi. Gue dilatih buat bantuin ngoding, nulis, ngerjain soal, sampai ngobrol santai.
</p> <a href="/kelebihan" style="margin-top: 2rem; background: var(--accent); color: #fff; padding: 0.75rem 2rem; border-radius: 9999px; display: inline-block; font-size: 1rem;">Lihat Kelebihan</a> </main>`;
}, "/home/archboba/Downloads/astro-model-showcase/src/pages/tentang.astro", void 0);

const $$file = "/home/archboba/Downloads/astro-model-showcase/src/pages/tentang.astro";
const $$url = "/tentang";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tentang,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
