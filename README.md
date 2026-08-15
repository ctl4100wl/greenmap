<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Green Map — Bản đồ cây xanh THCS Võ Trường Toản</title>

<!-- =====================================================================
     GREEN MAP — MONOLITH (1 file duy nhất)
     Sửa nội dung: chỉ cần sửa khối CONFIG ở cuối file (thẻ <script>).
     Upload GitHub: đặt file này tên index.html ở gốc repo,
     ảnh để trong thư mục assets/  -> Settings > Pages > Deploy from branch.
     ===================================================================== -->

<style>
/* ========== 1. TOKEN — đổi màu / font ở đây ========== */
:root{
  --g900:#14532d; --g700:#1f7a3d; --g500:#2e9e4f;
  --ink:#123021; --paper:#f4faf5; --line:#dde9de;
  --radius:14px;
  --font: system-ui,"Segoe UI",Roboto,Arial,sans-serif;
  --wrap: 1200px;
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:var(--font);color:var(--ink);background:#fff;line-height:1.6}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 20px}

/* ========== 2. HEADER ========== */
header{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid var(--line)}
.nav{display:flex;align-items:center;justify-content:space-between;height:72px;gap:16px}
.logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:20px;color:var(--g700);letter-spacing:.5px}
.logo svg{width:28px;height:28px;flex:none}
.menu{display:flex;gap:34px;font-weight:700}
.menu a{padding:6px 0;border-bottom:2px solid transparent}
.menu a:hover,.menu a.active{color:var(--g700);border-color:var(--g700)}
.burger{display:none;background:none;border:0;font-size:26px;color:var(--g700);cursor:pointer}

/* ========== 3. "CANVA LAYER" — trái tim của file này ==========
   .stage  = khung tỉ lệ cố định (giống canvas Canva), ảnh nền phủ kín.
   .layer  = phần tử con đặt theo % toạ độ -> co giãn y hệt Canva
             nhưng vẫn là HTML thật (chọn được chữ, gắn JS, SEO).
   Cỡ chữ dùng cqw (1cqw = 1% chiều rộng stage) -> scale mượt.        */
.stage{
  position:relative; width:100%;
  aspect-ratio: var(--ar, 16/7);
  overflow:hidden; background:#eef8ef;
  container-type: inline-size;   /* bật đơn vị cqw */
}
.stage > .bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.stage > .veil{position:absolute;inset:0}           /* lớp phủ gradient */
.layer{position:absolute;transform-origin:left top}  /* dùng left/top/width % */
.t{font-size:calc(var(--fs,4) * 1cqw);line-height:1.1;font-weight:900}

/* ========== 4. SECTION thường ========== */
section.block{padding:56px 0;border-top:1px solid var(--line)}
section.block h3{font-size:26px;color:var(--g900);margin-bottom:14px}
.grid{display:grid;gap:18px;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}
.card{background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden}
.card img{aspect-ratio:4/3;object-fit:cover;width:100%}
.card .p{padding:14px}
.card h4{font-size:17px;color:var(--g900)}
.card small{color:#5b7a66}

.btn{display:inline-block;background:var(--g500);color:#fff;padding:14px 32px;border-radius:999px;
     font-weight:800;box-shadow:0 6px 18px rgba(46,158,79,.35)}
.btn:hover{background:var(--g700)}
.badge{display:inline-block;background:var(--g700);color:#fff;padding:.35em .9em;border-radius:12px;font-weight:800}

footer{background:var(--g900);color:#d9efdd;padding:28px 0;text-align:center;font-size:14px;margin-top:40px}

/* ========== 5. MOBILE ========== */
@media(max-width:820px){
  .menu{display:none;position:absolute;top:72px;left:0;right:0;background:#fff;
        flex-direction:column;gap:0;padding:8px 20px 16px;border-bottom:1px solid var(--line)}
  .menu.open{display:flex}
  .menu a{padding:12px 0;border-bottom:1px solid var(--line)}
  .burger{display:block}
  .stage{--ar:4/5}                       /* dọc lại như Canva bản mobile */
  .stage .layer{--fs:calc(var(--fsm, 7))}/* chữ to hơn trên mobile */
}
</style>
</head>
<body>

<header>
  <div class="wrap nav">
    <a href="#top" class="logo">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21c0-6 3-10 8-12-1 7-4 10-8 12z"/><path d="M12 21C9 16 5 14 2 14c2 5 6 7 10 7z"/></svg>
      <span id="brand">GREEN MAP</span>
    </a>
    <nav class="menu" id="menu"></nav>
    <button class="burger" id="burger" aria-label="Menu">&#9776;</button>
  </div>
</header>

<!-- HERO: stage kiểu Canva, mọi chữ là .layer đặt theo % -->
<div class="stage" id="top" style="--ar:16/7">
  <img class="bg" id="heroBg" alt="">
  <div class="veil" style="background:linear-gradient(90deg,#eef8effa 0%,#eef8efe6 45%,#eef8ef00 78%)"></div>

  <div class="layer" style="left:6%;top:22%;width:56%">
    <div class="t" style="--fs:7.5;--fsm:11;color:var(--g900);letter-spacing:-.02em" id="h1"></div>
    <div class="t" style="--fs:3.1;--fsm:4.6;color:var(--g700);margin-top:.4em" id="h2"></div>
    <div class="badge t" style="--fs:2.6;--fsm:3.8;margin-top:.7em" id="school"></div>
    <p style="font-size:calc(1.35cqw + 6px);margin-top:1em;color:#2c4a37" id="lead"></p>
    <a class="btn" href="#danh-sach" style="margin-top:1.2em;font-size:calc(1.2cqw + 6px)" id="cta"></a>
  </div>
</div>

<main class="wrap">
  <section class="block" id="huong-dan">
    <h3>Hướng dẫn</h3>
    <div id="huongDan"></div>
  </section>

  <section class="block" id="danh-sach">
    <h3>Danh sách cây</h3>
    <div class="grid" id="treeGrid"></div>
  </section>

  <section class="block" id="du-an">
    <h3>Về dự án</h3>
    <p id="about"></p>
  </section>
</main>

<footer id="foot"></footer>

<!-- =====================================================================
     CONFIG — SỬA MỌI THỨ Ở ĐÂY, không cần đụng HTML/CSS phía trên
     ===================================================================== -->
<script>
const CONFIG = {
  brand: "GREEN MAP",
  menu: [
    { text:"Trang chủ",     href:"#top",       active:true },
    { text:"Hướng dẫn",     href:"#huong-dan" },
    { text:"Danh sách cây", href:"#danh-sach" },
    { text:"Về dự án",      href:"#du-an" }
  ],
  hero: {
    image: "assets/hero.jpg",              // <-- ảnh nền (không chứa chữ)
    h1:    "GREEN MAP",
    h2:    "BẢN ĐỒ CÂY XANH TRONG TRƯỜNG",
    school:"THCS VÕ TRƯỜNG TOẢN",
    lead:  "Khám phá và tìm hiểu các loài cây trong khuôn viên trường qua bản đồ trực quan và mã QR.",
    cta:   "🌳 KHÁM PHÁ CÂY XANH"
  },
  huongDan: "Quét mã QR gắn trên thân cây, hoặc bấm vào cây trong danh sách để xem thông tin.",
  about:    "Dự án do học sinh thực hiện nhằm số hoá cây xanh trong khuôn viên trường.",
  trees: [
    { name:"Bàng",     sci:"Terminalia catappa", img:"assets/cay-bang.jpg" },
    { name:"Phượng vĩ", sci:"Delonix regia",      img:"assets/cay-phuong.jpg" },
    { name:"Bằng lăng", sci:"Lagerstroemia speciosa", img:"assets/cay-bang-lang.jpg" }
  ],
  footer: "© 2026 Green Map — THCS Võ Trường Toản"
};

/* ---------- render ---------- */
const $ = s => document.querySelector(s);
const H = h => h;

$("#brand").textContent = CONFIG.brand;
$("#menu").innerHTML = CONFIG.menu
  .map(m => `<a href="${m.href}"${m.active?' class="active"':''}>${m.text}</a>`).join("");

const hero = CONFIG.hero;
$("#heroBg").src = hero.image;
$("#h1").textContent = hero.h1;
$("#h2").textContent = hero.h2;
$("#school").textContent = hero.school;
$("#lead").textContent = hero.lead;
$("#cta").textContent = hero.cta;

$("#huongDan").textContent = CONFIG.huongDan;
$("#about").textContent = CONFIG.about;
$("#foot").textContent = CONFIG.footer;

$("#treeGrid").innerHTML = CONFIG.trees.map(t => `
  <article class="card">
    <img src="${t.img}" alt="${t.name}" loading="lazy"
         onerror="this.style.background='#dfeee3';this.removeAttribute('src')">
    <div class="p"><h4>${t.name}</h4><small><i>${t.sci}</i></small></div>
  </article>`).join("");

$("#burger").onclick = () => $("#menu").classList.toggle("open");
</script>
</body>
</html>
