const HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio - Aditya</title>
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config={darkMode:'class'}</script>
</head>
<body class="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
<nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
<div class="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
<a href="#home" class="font-bold text-lg">Aditya</a>
<div class="hidden md:flex gap-6 text-sm">
<a href="#home" class="hover:text-indigo-500">Beranda</a>
<a href="#about" class="hover:text-indigo-500">Tentang Saya</a>
<a href="#portfolio" class="hover:text-indigo-500">Portfolio</a>
<a href="#pendidikan" class="hover:text-indigo-500">Pendidikan</a>
<a href="#pengalaman" class="hover:text-indigo-500">Pengalaman</a>
<a href="#blog" class="hover:text-indigo-500">Blog</a>
<a href="#contact" class="hover:text-indigo-500">Kontak</a>
</div>
<button id="themeToggle" class="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center">
<span id="themeIcon">🌙</span>
</button>
</div>
</nav>

<section id="home" class="pt-32 pb-20 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
<div class="flex-1">
<p class="text-indigo-500 mb-2">Halo Semua 👋</p>
<h1 class="text-4xl md:text-5xl font-bold mb-3">Saya Aditya</h1>
<h2 class="text-xl text-gray-500 dark:text-gray-400 mb-4">IT Programmer <a href="#" class="text-indigo-500 underline">PT Lorem Ipsum Dolor</a></h2>
<p class="mb-6 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Portofolio ini menampilkan proyek dan kontribusi Lorem Ipsum di bidang teknologi.</p>
<a href="#footer" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">Hubungi Saya</a>
</div>
<img src="https://picsum.photos/seed/aditya-hero/400/400" alt="Aditya" class="w-64 h-64 rounded-full object-cover shadow-lg">
</section>

<section id="about" class="py-20 max-w-5xl mx-auto px-6">
<p class="text-indigo-500 text-sm font-semibold mb-1">Tentang Saya</p>
<h2 class="text-2xl font-bold mb-4">IT Programmer & Lulusan Sistem Informasi</h2>
<p class="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<h3 class="text-xl font-bold mb-3">Spesialisasi & Tech Stack Inti</h3>
<p class="text-gray-600 dark:text-gray-400 mb-4 max-w-3xl">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
<ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-8">
<li><strong>Backend:</strong> Lorem Ipsum, Dolor Sit Amet, RESTful API.</li>
<li><strong>Database:</strong> Lorem MySQL/MariaDB.</li>
<li><strong>Frontend:</strong> HTML, CSS, JavaScript, Tailwind CSS.</li>
<li><strong>Metodologi:</strong> Clean Code & SDLC.</li>
</ul>
<h3 class="text-xl font-bold mb-3">Kontribusi Profesional</h3>
<p class="text-gray-600 dark:text-gray-400 max-w-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
</section>

<section id="portfolio" class="py-20 max-w-5xl mx-auto px-6">
<p class="text-indigo-500 text-sm font-semibold mb-1">Portfolio</p>
<h2 class="text-2xl font-bold mb-8">Project</h2>
<div class="grid md:grid-cols-2 gap-6">
${[1,2,3,4,5,6].map(i => `<div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
<img src="https://picsum.photos/seed/project${i}/600/350" class="w-full h-44 object-cover">
<div class="p-5">
<h3 class="font-bold mb-2">Lorem Ipsum Project ${i}</h3>
<p class="text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
</div>
</div>`).join('')}
</div>
</section>

<section id="pendidikan" class="py-20 max-w-5xl mx-auto px-6">
<p class="text-indigo-500 text-sm font-semibold mb-1">Pendidikan & Bootcamp</p>
<h2 class="text-2xl font-bold mb-8">Riwayat Pendidikan & Bootcamp</h2>
<div class="flex flex-wrap gap-6">
${[1,2,3,4,5].map(i => `<img src="https://picsum.photos/seed/edu${i}/100/100" class="w-16 h-16 rounded object-cover grayscale hover:grayscale-0 transition">`).join('')}
</div>
</section>

<section id="pengalaman" class="py-20 max-w-5xl mx-auto px-6">
<p class="text-indigo-500 text-sm font-semibold mb-1">Pengalaman</p>
<h2 class="text-2xl font-bold mb-8">Pengalaman Kerja, Freelance, & Magang</h2>
<div class="flex flex-wrap gap-6">
${[1,2,3,4].map(i => `<img src="https://picsum.photos/seed/exp${i}/100/100" class="w-16 h-16 rounded object-cover grayscale hover:grayscale-0 transition">`).join('')}
</div>
</section>

<section id="blog" class="py-20 max-w-5xl mx-auto px-6">
<p class="text-indigo-500 text-sm font-semibold mb-1">Blog</p>
<h2 class="text-2xl font-bold mb-8">Tulisan Blog</h2>
<div class="grid md:grid-cols-2 gap-6">
${[1,2,3,4].map(i => `<div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
<img src="https://picsum.photos/seed/blog${i}/600/300" class="w-full h-40 object-cover">
<div class="p-5">
<h3 class="font-bold mb-2">Lorem Ipsum Dolor Sit Amet ${i}</h3>
<p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<a href="#" class="text-indigo-500 text-sm font-semibold">Baca Selengkapnya →</a>
</div>
</div>`).join('')}
</div>
</section>

<section id="contact" class="py-20 max-w-5xl mx-auto px-6 text-center">
<p class="text-indigo-500 text-sm font-semibold mb-1">Kontak</p>
<h2 class="text-2xl font-bold mb-6">Hubungi Saya</h2>
<div class="flex flex-wrap justify-center gap-4 text-sm">
<a href="tel:+6280000000" class="hover:text-indigo-500">Telepon</a>
<a href="mailto:aditya@example.com" class="hover:text-indigo-500">Email</a>
<a href="#" class="hover:text-indigo-500">LinkedIn</a>
<a href="#" class="hover:text-indigo-500">GitHub</a>
<a href="#" class="hover:text-indigo-500">Instagram</a>
<a href="#" class="hover:text-indigo-500">YouTube</a>
<a href="#" class="hover:text-indigo-500">Twitter</a>
</div>
</section>

<footer id="footer" class="bg-gray-100 dark:bg-gray-900 pt-16 pb-6 px-6">
<div class="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 mb-10">
<div>
<h3 class="font-bold text-lg mb-2">Aditya</h3>
<p class="text-sm text-gray-500">aditya@example.com</p>
<p class="text-sm text-gray-500">Lorem Ipsum City</p>
</div>
<div>
<h4 class="font-semibold mb-2">Kategori Tulisan</h4>
<ul class="text-sm text-gray-500 space-y-1">
<li><a href="#" class="hover:text-indigo-500">Programming</a></li>
<li><a href="#" class="hover:text-indigo-500">Teknologi</a></li>
<li><a href="#" class="hover:text-indigo-500">Gaya Hidup</a></li>
</ul>
</div>
<div>
<h4 class="font-semibold mb-2">Tautan</h4>
<ul class="text-sm text-gray-500 space-y-1">
<li><a href="#home" class="hover:text-indigo-500">Beranda</a></li>
<li><a href="#about" class="hover:text-indigo-500">Tentang Saya</a></li>
<li><a href="#portfolio" class="hover:text-indigo-500">Portfolio</a></li>
<li><a href="#contact" class="hover:text-indigo-500">Kontak</a></li>
</ul>
</div>
<div>
<h4 class="font-semibold mb-2">Sosial</h4>
<ul class="text-sm text-gray-500 space-y-1">
<li><a href="#" class="hover:text-indigo-500">LinkedIn</a></li>
<li><a href="#" class="hover:text-indigo-500">GitHub</a></li>
<li><a href="#" class="hover:text-indigo-500">Instagram</a></li>
</ul>
</div>
</div>
<p class="text-center text-xs text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-6">Dibuat oleh Aditya, menggunakan Tailwind CSS.</p>
</footer>

<script>
const html=document.documentElement,icon=document.getElementById('themeIcon');
function apply(mode){mode==='dark'?html.classList.add('dark'):html.classList.remove('dark');icon.textContent=mode==='dark'?'☀️':'🌙';localStorage.setItem('theme',mode)}
apply(localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
document.getElementById('themeToggle').onclick=()=>apply(html.classList.contains('dark')?'light':'dark');
</script>
</body>
</html>`;

export default {
  async fetch() {
    return new Response(HTML, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
};
