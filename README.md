<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Green Map - Bản đồ cây xanh THCS Võ Trường Toản</title>
<style>
  :root{
    --green-900:#14532d;
    --green-700:#1f7a3d;
    --green-500:#2e9e4f;
    --ink:#123021;
    --paper:#f4faf5;
    --line:#dde9de;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family:system-ui,"Segoe UI",Roboto,Arial,sans-serif;
    color:var(--ink);
    background:#fff;
    line-height:1.6;
  }
  a{color:inherit;text-decoration:none}
  .wrap{max-width:1200px;margin:0 auto;padding:0 20px}

  /* HEADER */
  header{
    position:sticky;top:0;z-index:50;
    background:#fff;border-bottom:1px solid var(--line);
  }
  .nav{
    display:flex;align-items:center;justify-content:space-between;
    gap:16px;height:72px;
  }
  .logo{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.5px;color:var(--green-700);font-size:20px}
  .logo svg{width:28px;height:28px;flex:none}
  .menu{display:flex;gap:34px;font-weight:700;font-size:16px}
  .menu a{padding:6px 0;border-bottom:2px solid transparent}
  .menu a:hover{color:var(--green-700)}
  .menu a.active{color:var(--green-700);border-color:var(--green-700)}
  .burger{display:none;background:none;border:0;font-size:26px;cursor:pointer;color:var(--green-700)}

  /* HERO */
  .hero{
    position:relative;
    min-height:520px;
    display:flex;align-items:center;
    background:linear-gradient(180deg,#eef8ef,#dff0e2);
    overflow:hidden;
  }
  .hero img.bg{
    position:absolute;inset:0;width:100%;height:100%;
    object-fit:cover;opacity:.9;
  }
  .hero::after{
    content:"";position:absolute;inset:0;
    background:linear-gradient(90deg,#eef8efF2 0%,#eef8efE6 45%,#eef8ef00 80%);
  }
  .hero .wrap{position:relative;z-index:2;width:100%}
  .hero h1{
    font-size:clamp(38px,7vw,84px);
    line-height:1.05;font-weight:900;color:var(--green-900);
    letter-spacing:-1px;
  }
  .hero h2{
    font-size:clamp(18px,3vw,34px);
    font-weight:800;color:var(--green-700);margin-top:8px;
  }
  .badge{
    display:inline-block;margin-top:18px;
    background:var(--green-700);color:#fff;
    padding:10px 26px;border-radius:12px;
    font-size:clamp(16px,2.4vw,26px);font-weight:800;
  }
  .hero p{max-width:460px;margin-top:18px;font-size:17px;color:#2c4a37}
  .btn{
    display:inline-block;margin-top:24px;
    background:var(--green-500);color:#fff;
    padding:14px 34px;border-radius:999px;
    font-weight:800;font-size:17px;
    box-shadow:0 6px 18px rgba(46,158,79,.35);
  }
  .btn:hover{background:var(--green-700)}

  /* SECTION trống để tự thêm nội dung sau */
  section.block{padding:56px 0;border-top:1px solid var(--line)}
  section.block h3{font-size:26px;color:var(--green-900);margin-bottom:12px}
  .box{
    background:var(--paper);border:1px dashed var(--line);
    border-radius:14px;padding:24px;min-height:120px;
  }

  footer{
    background:var(--green-900);color:#d9efdd;
    padding:28px 0;font-size:14px;text-align:center;margin-top:40px;
  }

  @media(max-width:820px){
    .menu{
      display:none;position:absolute;top:72px;left:0;right:0;
      background:#fff;flex-direction:column;gap:0;
      padding:8px 20px 16px;border-bottom:1px solid var(--line);
    }
    .menu.open{display:flex}
    .menu a{padding:12px 0;border-bottom:1px solid var(--line)}
    .burger{display:block}
    .hero::after{background:linear-gradient(180deg,#eef8efF2 0%,#eef8efD9 60%,#eef8ef99 100%)}
    .hero{min-height:460px;padding:40px 0}
  }
</style>
</head>
<body>

<header>
  <div class="wrap nav">
    <a href="#" class="logo">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21c0-6 3-10 8-12-1 7-4 10-8 12z"/><path d="M12 21C9 16 5 14 2 14c2 5 6 7 10 7z"/></svg>
      GREEN MAP
    </a>
    <nav class="menu" id="menu">
      <a href="#" class="active">Trang chủ</a>
      <a href="#huong-dan">Hướng dẫn</a>
      <a href="#danh-sach">Danh sách cây</a>
      <a href="#du-an">Về dự án</a>
    </nav>
    <button class="burger" id="burger" aria-label="Mở menu">&#9776;</button>
  </div>
</header>

<div class="hero">
  <!-- Thay src bằng ảnh trường của bạn -->
  <img class="bg" id="hero-image" src="" alt="">
  <div class="wrap">
    <h1>GREEN MAP</h1>
    <h2>BẢN ĐỒ CÂY XANH TRONG TRƯỜNG</h2>
    <div class="badge">THCS VÕ TRƯỜNG TOẢN</div>
    <p>Khám phá và tìm hiểu các loài cây trong khuôn viên trường qua bản đồ trực quan và mã QR.</p>
    <a href="#danh-sach" class="btn">🌳 KHÁM PHÁ CÂY XANH</a>
  </div>
</div>

<main class="wrap">
  <section class="block" id="huong-dan">
    <h3>Hướng dẫn</h3>
    <div class="box" id="huong-dan-content">asdjasdjakdu.</div>
  </section>

  <section class="block" id="danh-sach">
    <h3>Danh sách cây</h3>
    <div class="box" id="danh-sach-content">Nội dung thêm sau.</div>
  </section>

  <section class="block" id="du-an">
    <h3>Về dự án</h3>
    <div class="box" id="du-an-content">Nội dung thêm sau.</div>
  </section>
</main>

<footer>© 2026 Green Map — THCS Võ Trường Toản</footer>

<script>
  document.getElementById('burger').onclick = function(){
    document.getElementById('menu').classList.toggle('open');
  };
</script>

</body>
</html>
