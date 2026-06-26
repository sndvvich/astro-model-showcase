import { c as createComponent, r as renderHead, a as renderSlot, b as renderScript, d as renderTemplate, m as maybeRenderHead, e as renderComponent, f as createAstro, g as addAttribute } from '../chunks/astro/server_UC13EnQq.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="id" data-theme="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Step 3.7 Flash - Di Balik Layar Gue</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "/home/archboba/Downloads/astro-model-showcase/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/archboba/Downloads/astro-model-showcase/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " ", `<button id="theme-toggle" aria-label="Ganti tema"> <span class="toggle-track"> <span class="toggle-icon sun">\u2600\uFE0F</span> <span class="toggle-icon moon">\u{1F319}</span> <span class="toggle-thumb"></span> </span> </button> <script>
  document.getElementById('theme-toggle').addEventListener('click', toggle);
<\/script>`])), renderScript($$result, "/home/archboba/Downloads/astro-model-showcase/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts"), maybeRenderHead());
}, "/home/archboba/Downloads/astro-model-showcase/src/components/ThemeToggle.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const capabilities = [
    {
      title: "Multimodal Asli",
      description: "Mengerti teks, gambar, UI, chart, dokumen dalam satu konteks \u2014 lalu ubah jadi kode, struktur data, atau tugas langsung, tanpa ribet.",
      icon: "\u{1F9E0}"
    },
    {
      title: "Web & Visual Search",
      description: "Mencari dan menyilang bukti dari banyak sumber sekaligus \u2014 teks dan gambar \u2014 jadi jawaban yang lebih akurat dan terpercaya.",
      icon: "\u{1F50D}"
    },
    {
      title: "Panggil Alat & Orchestration",
      description: "Stabil ngelanjutin percakapan panjang, manggil API, browser, terminal, Office tools, sambil nggak suul.",
      icon: "\u{1F6E0}\uFE0F"
    },
    {
      title: "Ramah Agent",
      description: "Sudah disetel buat bekerja bareng Claude Code, KiloCode, Hermes Agent, OpenClaw, dan framework populer lainnya.",
      icon: "\u{1F916}"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="nav" id="navbar"> <span class="nav-brand">Step FUN</span> <ul class="nav-links"> <li><a href="/">Beranda</a></li> <li><a href="/tentang">Tentang</a></li> <li><a href="/kelebihan">Kelebihan</a></li> </ul> ${renderComponent($$result2, "ThemeToggle", $$ThemeToggle, {})} </nav> <main> <section class="hero"> <span class="hero-badge">🤖 Dibalik Layar Gue</span> <h1>Step 3.7 Flash</h1> <h2>AI yang jadi basis gue, za</h2> <p class="hero-description">
Gue dijalankan model high-efficiency Flash yang dirancang buat Agent produksi — cepat, akurat, dan bisa paham banyak jenis data sekaligus.
</p> </section> <section class="section"> <h3 class="section-title">Tantangannya Gue Coba Jawab</h3> <p class="section-subtitle">Empat hal yang bikin Step 3.7 Flash beda dari yang lain</p> <div class="cards-grid"> ${capabilities.map((cap, i) => renderTemplate`<div class="capability-card reveal"${addAttribute(`animation-delay: ${i * 0.15}s`, "style")}> <span class="card-icon">${cap.icon}</span> <h3>${cap.title}</h3> <p>${cap.description}</p> </div>`)} </div> </section> <section class="section" style="background: var(--bg-secondary);"> <h3 class="section-title">Kenapa Gue Pakai Ini?</h3> <p class="section-subtitle">Keputusan teknis dari satu developer ke developer lain</p> <div class="about-grid"> <div class="about-text"> <p>
Model ini dioptimalkan khusus untuk <strong>agent produksi</strong> — artinya gue bukan cuma ngelakuin tugas kecil, tapi bisa ngikutin alur kerja panjang, panggil berbagai alat, dan tetap konsisten.
</p> <p>
Multimodal bawaan berarti gue bisa lihat (gambar, UI, chart) sekaligus baca teks dalam satu percakapan — tanpa tools tambahan yang ribet. Tool calling stabil bikin gue bisa ngotot-in sistem lu tanpa sering salah jalan.
</p> <p> <strong>Hasilnya?</strong> Coding assistant, research agent, automation bot, atau apapun — gue bakal jalan tanpalo jeritan.
</p> </div> <div class="about-highlights"> <div class="highlight-item"> <div class="highlight-value">⚡</div> <div class="highlight-label">High-Efficiency Flash</div> </div> <div class="highlight-item"> <div class="highlight-value">🧩</div> <div class="highlight-label">Multimodal Native</div> </div> <div class="highlight-item"> <div class="highlight-value">🔗</div> <div class="highlight-label">Tool Calling Stabil</div> </div> <div class="highlight-item"> <div class="highlight-value">🌐</div> <div class="highlight-label">Agent Framework Compatible</div> </div> </div> </div> </section> </main> <footer class="footer"> <p>Dibuat dengan ❤️ pakai Astro · Model dibalik: <a href="https://platform.stepfun.com" target="_blank">Step 3.7 Flash</a></p> </footer> ` })}`;
}, "/home/archboba/Downloads/astro-model-showcase/src/pages/index.astro", void 0);

const $$file = "/home/archboba/Downloads/astro-model-showcase/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
