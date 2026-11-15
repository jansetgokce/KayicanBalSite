/* =========================================================
   Kayıcan Bal – ortak betik
   Üst menü, alt bilgi, arama, sepet, arı yükleme ekranı, yardımcılar.
   ========================================================= */

/* ===================== SİTE AYARLARI =====================
   BURAYI KENDİ BİLGİLERİNİZLE DOLDURUN. Boş bırakılan alanlar sitede gizlenir.
   - phone      : ülke koduyla, + ve boşluk olmadan  → "905551234567"
   - social     : tam adres                          → "https://www.instagram.com/kullaniciadi"
   ======================================================== */
const SITE = {
  name: "Kayıcan Bal",
  shopUrl: "https://www.kayicanbal.com",   // çevrim içi mağaza (ürün sayfalarının bulunduğu site)
  phone: "",            // WhatsApp / telefon (ülke koduyla)
  phoneDisplay: "",     // ekranda görünecek biçim, ör. "0555 123 45 67"
  email: "",            // ör. "info@kayicanbal.com"
  address: "",          // açık adres (isteğe bağlı)
  hours: "",            // çalışma saatleri (isteğe bağlı), ör. "Hafta içi 09:00–18:00"
  mapQuery: "Refahiye, Erzincan",          // harita konumu (yörenizi/adresinizi yazın)
  social: { instagram: "", facebook: "", youtube: "", tiktok: "" },
  deliveryText: "Cam kavanozda gönderilir"
};

(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const EN = typeof LANG !== "undefined" && LANG === "en";
  const tt = typeof t === "function" ? t : s => s;
  const DEV = location.protocol === "file:" || ["localhost", "127.0.0.1"].includes(location.hostname);
  const fmt = n => EN ? "₺" + n.toLocaleString("en-US") : n.toLocaleString("tr-TR") + " TL";
  const lower = s => String(s).toLocaleLowerCase(EN ? "en" : "tr");
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const TYPE_LABEL = { tarif: "Tarif", blog: "Blog" };

  /* ---------- bağlantı yardımcıları ---------- */
  const waLink = text => SITE.phone ? `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text || "")}` : "";
  const mailLink = (subject, body) => SITE.email ? `mailto:${SITE.email}?subject=${encodeURIComponent(subject || "")}&body=${encodeURIComponent(body || "")}` : "";
  const mapLink = () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;
  const mapEmbed = () => `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=10&output=embed`;
  const EXT = 'target="_blank" rel="noopener noreferrer"';

  const SOCIAL_META = {
    instagram: ["Instagram", "📸"], facebook: ["Facebook", "👍"], youtube: ["YouTube", "▶️"], tiktok: ["TikTok", "🎵"]
  };
  const socialLinks = () => Object.keys(SITE.social).filter(k => SITE.social[k])
    .map(k => `<a href="${SITE.social[k]}" ${EXT}>${SOCIAL_META[k][1]} ${SOCIAL_META[k][0]}</a>`).join("");

  /* ---------- içerik yardımcıları ---------- */
  const formatDate = iso => new Date(iso + "T12:00:00").toLocaleDateString(EN ? "en-GB" : "tr-TR", { day: "numeric", month: "long", year: "numeric" });
  const stripTags = s => String(s).replace(/<[^>]+>/g, " ");
  function readMin(p) {
    const parts = [].concat(p.content || [], p.malzemeler || [], p.yapilis || []);
    const text = parts.map(b => typeof b === "string" ? b : [b.h, ...(b.ul || []), ...(b.ol || [])].join(" ")).join(" ");
    return Math.max(1, Math.round(stripTags(text).split(/\s+/).length / 180));
  }
  const iconCal = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';
  const iconClock = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const metaHTML = p => `<span>${iconCal} ${formatDate(p.date)}</span><span>${iconClock} ${readMin(p)} dk okuma</span>`;

  const media = p => {
    const alt = esc(p.name || p.title);
    return `<span class="emoji" aria-hidden="true">${p.emoji}</span>${p.image ? `<img src="${esc(p.image)}" alt="${alt}" loading="lazy" onerror="this.remove()">` : ""}`;
  };

  function productCard(p) {
    const v = p.variants[0];
    const variantUI = p.variants.length > 1
      ? `<select class="vsel" aria-label="Seçenek">${p.variants.map((x, i) => `<option value="${i}">${x.label}</option>`).join("")}</select>`
      : `<div class="pcard-weight">${v.label}</div>`;
    return `
      <article class="pcard" data-id="${p.id}" data-card>
        <a class="ph pcard-img" href="ikinci.html#urun/${p.id}" aria-label="${esc(p.name)}">${media(p)}</a>
        <div class="pcard-body">
          <h3 class="pcard-title"><a href="ikinci.html#urun/${p.id}">${p.name}</a></h3>
          ${variantUI}
          <div class="price">${fmt(v.price)}</div>
          <div class="pcard-meta">${SITE.deliveryText}</div>
          <button class="add" type="button" data-add="${p.id}">Sepete Ekle <span>+</span></button>
        </div>
      </article>`;
  }

  function postCard(p) {
    return `
      <a class="post" href="yazilar.html#yazi/${p.id}">
        <div class="ph thumb">${media(p)}<span class="badge ${p.type}">${TYPE_LABEL[p.type]}</span></div>
        <div class="post-body">
          <div class="meta">${metaHTML(p)}</div>
          <h3 class="post-title">${p.title}</h3>
          <p class="excerpt">${p.excerpt}</p>
          <span class="more">Devamını Oku &rsaquo;</span>
        </div>
      </a>`;
  }

  const faqItem = (f, i) => `
    <details class="qa" id="q-${i}">
      <summary>${f.q}</summary>
      <div class="qa-a">${f.a.map(t => `<p>${t}</p>`).join("")}${f.more ? `<p><a href="${f.more.u}">${f.more.t} →</a></p>` : ""}</div>
    </details>`;

  function renderBlocks(blocks) {
    return blocks.map(b => {
      if (typeof b === "string") return `<p>${b}</p>`;
      if (b.h) return `<h2>${b.h}</h2>`;
      if (b.ul) return `<ul>${b.ul.map(i => `<li>${i}</li>`).join("")}</ul>`;
      if (b.ol) return `<ol>${b.ol.map(i => `<li>${i}</li>`).join("")}</ol>`;
      return "";
    }).join("");
  }

  /* ---------- uyarı (toast) ---------- */
  let toastEl, toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), 2400);
  }

  function copy(text) {
    const done = () => toast("Bağlantı kopyalandı");
    const fallback = () => {
      const t = document.createElement("textarea");
      t.value = text; t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Kopyalanamadı"); }
      t.remove();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  }

  const shareLinks = (title, url) => {
    url = url || location.href;
    return [
      ["WhatsApp", `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`],
      ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`],
      ["X", `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`],
      ["E-posta", `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`]
    ];
  };

  /* ===================== SEPET ===================== */
  const CART_KEY = "kayican_cart_v1";
  let cart = [];
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY));
    if (Array.isArray(raw)) cart = raw.filter(i => PRODUCTS.some(p => p.id === i.id) && i.qty > 0);
  } catch (e) { cart = []; }
  const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* yok say */ } };

  const cartLines = () => cart.map(i => {
    const p = PRODUCTS.find(x => x.id === i.id);
    const v = p.variants[i.vi] || p.variants[0];
    return { p, v, qty: i.qty, vi: i.vi, sum: v.price * i.qty };
  });
  const cartTotal = () => cartLines().reduce((s, l) => s + l.sum, 0);
  const cartCount = () => cart.reduce((s, i) => s + i.qty, 0);

  function addToCart(id, vi) {
    vi = vi || 0;
    const row = cart.find(i => i.id === id && i.vi === vi);
    if (row) row.qty++; else cart.push({ id, vi, qty: 1 });
    saveCart(); renderCart();
    const p = PRODUCTS.find(x => x.id === id);
    toast(`${p.name} sepete eklendi`);
  }
  function changeQty(id, vi, d) {
    const row = cart.find(i => i.id === id && i.vi === vi);
    if (!row) return;
    row.qty += d;
    if (row.qty <= 0) cart = cart.filter(i => i !== row);
    saveCart(); renderCart();
  }
  function removeRow(id, vi) { cart = cart.filter(i => !(i.id === id && i.vi === vi)); saveCart(); renderCart(); }
  function clearCart() { cart = []; saveCart(); renderCart(); }

  function orderText() {
    const L = cartLines();
    return tt("Merhaba, aşağıdaki ürünleri sipariş etmek istiyorum:") + "\n\n" +
      L.map(l => `• ${l.qty} x ${l.p.name} (${l.v.label}) – ${fmt(l.sum)}`).join("\n") +
      `\n\n${tt("Toplam")}: ${fmt(cartTotal())}`;
  }

  function renderCart() {
    const L = cartLines();
    const badge = $("#cartBadge");
    badge.textContent = cartCount();
    badge.dataset.n = cartCount();

    const body = $("#cartBody"), foot = $("#cartFoot");
    if (!L.length) {
      body.innerHTML = `<div class="empty">Sepetiniz boş.<br><br><a class="btn btn-gold btn-sm" href="ikinci.html">Ürünlere Göz At</a></div>`;
      foot.hidden = true;
      return;
    }
    body.innerHTML = L.map(l => `
      <div class="ci">
        <a class="ph" href="ikinci.html#urun/${l.p.id}">${media(l.p)}</a>
        <div>
          <b>${l.p.name}</b>
          <small>${l.v.label} · ${fmt(l.v.price)}</small>
          <div class="qty">
            <button type="button" data-qty="-1" data-id="${l.p.id}" data-vi="${l.vi}" aria-label="Azalt">−</button>
            <span>${l.qty}</span>
            <button type="button" data-qty="1" data-id="${l.p.id}" data-vi="${l.vi}" aria-label="Artır">+</button>
          </div>
          <a class="shop ext" href="${l.p.url}" ${EXT}>Mağazada aç</a>
        </div>
        <div class="line">${fmt(l.sum)}<button class="rm" type="button" data-rm="${l.p.id}" data-vi="${l.vi}">Kaldır</button></div>
      </div>`).join("");

    const text = orderText();
    const distinct = [...new Set(L.map(l => l.p.id))];
    const shopHref = distinct.length === 1 ? L[0].p.url : SITE.shopUrl;
    const wa = waLink(text), mail = mailLink(tt("Sipariş talebi"), text);
    foot.hidden = false;
    foot.innerHTML = `
      <div class="total"><span>Toplam</span><span>${fmt(cartTotal())}</span></div>
      ${wa ? `<a class="btn btn-wa" href="${wa}" ${EXT}>WhatsApp ile Sipariş Ver</a>` : ""}
      ${mail ? `<a class="btn btn-outline" href="${mail}">E-posta ile Gönder</a>` : ""}
      <a class="btn ${wa || mail ? "btn-outline" : "btn-gold"} ext" href="${shopHref}" ${EXT}>Mağazada Tamamla</a>
      <button class="btn btn-sm" type="button" data-clear style="color:var(--muted)">Sepeti Temizle</button>
      <small>Kargo ve ödeme bilgileri sipariş sırasında paylaşılır.${DEV && !wa && !mail ? "<br><span>(Geliştirici notu: WhatsApp/e-posta ile sipariş için js/site.js içindeki SITE.phone / SITE.email alanlarını doldurun; bu not yalnızca yerel önizlemede görünür.)</span>" : ""}</small>`;
  }

  /* ===================== ARAMA ===================== */
  let searchIndex;
  function buildIndex() {
    searchIndex = [].concat(
      PRODUCTS.map(p => ({ g: "Ürünler", i: p.emoji, t: p.name, s: fmt(p.variants[0].price), u: `ikinci.html#urun/${p.id}`, k: lower([p.name, p.short, ...p.desc].join(" ")) })),
      POSTS.map(p => ({ g: "Yazılar", i: p.emoji, t: p.title, s: TYPE_LABEL[p.type], u: `yazilar.html#yazi/${p.id}`, k: lower([p.title, p.excerpt].join(" ")) })),
      FAQ.map((f, n) => ({ g: "S.S.S.", i: "❓", t: f.q, s: FAQ_CATS[f.cat], u: `sss.html#q-${n}`, k: lower([f.q, ...f.a].join(" ")) }))
    );
  }
  function runSearch(q) {
    const out = $("#searchRes");
    q = lower(q).trim();
    if (!q) { out.innerHTML = `<div class="sr-empty">Ürün, yazı veya soru arayın…</div>`; return; }
    if (!searchIndex) buildIndex();
    const words = q.split(/\s+/);
    const hits = searchIndex.filter(x => words.every(w => x.k.includes(w)));
    if (!hits.length) { out.innerHTML = `<div class="sr-empty">“<span id="srq"></span>” için sonuç bulunamadı.</div>`; $("#srq").textContent = q; return; }
    let html = "", last = "", n = 0;
    hits.forEach(h => {
      if (n >= 12) return;
      if (h.g !== last) { html += `<div class="sr-group">${h.g}</div>`; last = h.g; }
      html += `<a class="sr-item" href="${h.u}"><i>${h.i}</i><div><b>${h.t}</b><span>${h.s}</span></div></a>`;
      n++;
    });
    out.innerHTML = html;
  }

  function openOverlay(el, focusSel) {
    el.classList.add("is-open");
    document.body.classList.add("lock");
    if (focusSel) setTimeout(() => $(focusSel).focus(), 50);
  }
  function closeAll() {
    $$(".overlay.is-open, .drawer.is-open, .drawer-back.is-open").forEach(e => e.classList.remove("is-open"));
    document.body.classList.remove("lock");
  }

  /* ===================== SAYFA İSKELETİ ===================== */
  const NAV = [
    ["ikinci.html", "Ürünlerimiz", "urunler"],
    ["yazilar.html", "Yazılar", "yazilar"],
    ["sss.html", "S.S.S.", "sss"],
    ["iletisim.html", "İletişim", "iletisim"]
  ];
  const page = document.body.dataset.page || "";

  const headerHTML = `
  <header class="site-header">
    <a class="brand" href="index.html" aria-label="${SITE.name} ana sayfa">
      <img src="images/logo.png" alt="${SITE.name}" onload="this.parentNode.classList.add('has-logo')" onerror="this.remove()">
      <span class="brand-text">LOGO</span>
    </a>
    <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mainNav" aria-label="Menüyü aç"><span></span><span></span><span></span></button>
    <nav class="main-nav" id="mainNav" aria-label="Ana menü">
      ${NAV.map(n => `<a href="${n[0]}"${page === n[2] ? ' class="is-active" aria-current="page"' : ""}>${n[1]}</a>`).join("")}
      <a class="shop-link" href="ikinci.html#alisveris">Alışverişe Başla</a>
    </nav>
    <div class="tools">
      <button type="button" class="lang" data-lang="${EN ? "tr" : "en"}" aria-label="${EN ? "Türkçe'ye geç" : "Switch to English"}" title="${EN ? "Türkçe'ye geç" : "Switch to English"}">${EN ? '<svg class="flag-svg" viewBox="0 0 60 30" width="26" height="18" aria-hidden="true"><clipPath id="ukc"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="ukt"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#ukc)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#ukt)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>' : '<i class="flag" aria-hidden="true"></i>'} <span>${EN ? "EN" : "TR"}</span></button>
      <a class="t-mail" href="iletisim.html" aria-label="İletişim"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></a>
      <a class="t-user" href="iletisim.html#siparis" aria-label="Sipariş desteği"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18c1.5-2.5 3.2-3.5 5.5-3.5s4 1 5.5 3.5"/></svg></a>
      <button type="button" data-open-search aria-label="Ara"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg></button>
      <button type="button" data-open-cart aria-label="Sepet"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2.5l2 11h10l2-8H7"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/></svg><span class="cart-badge" id="cartBadge" data-n="0">0</span></button>
    </div>
  </header>`;

  const footerHTML = `
  <footer class="site-footer">
    <div class="f-grid">
      <div>
        <div class="f-brand">${SITE.name}</div>
        <p>Süzme bal, polen ve perga ürünlerini arılıktan sofraya izlenebilir üretim anlayışıyla hazırlıyoruz. Cam kavanozda, içerik bilgisiyle.</p>
        <div class="socials">${socialLinks()}</div>
      </div>
      <div>
        <h3>Sayfalar</h3>
        <ul>
          <li><a href="index.html">Ana Sayfa</a></li>
          <li><a href="ikinci.html">Ürünlerimiz</a></li>
          <li><a href="yazilar.html">Yazılar</a></li>
          <li><a href="sss.html">S.S.S.</a></li>
          <li><a href="iletisim.html">İletişim</a></li>
        </ul>
      </div>
      <div>
        <h3>Faydalı Bağlantılar</h3>
        <ul>
          <li><a class="ext" href="${SITE.shopUrl}" ${EXT}>Çevrim İçi Mağaza</a></li>
          <li><a class="ext" href="https://www.tarimorman.gov.tr" ${EXT}>T.C. Tarım ve Orman Bakanlığı</a></li>
          <li><a class="ext" href="${mapLink()}" ${EXT}>Haritada Yöremiz</a></li>
        </ul>
      </div>
      <div>
        <h3>İletişim</h3>
        <ul>
          ${SITE.phone ? `<li><a href="tel:+${SITE.phone}">${SITE.phoneDisplay || "+" + SITE.phone}</a></li><li><a class="ext" href="${waLink(tt("Merhaba, bilgi almak istiyorum."))}" ${EXT}>WhatsApp'tan Yazın</a></li>` : ""}
          ${SITE.email ? `<li><a href="mailto:${SITE.email}">${SITE.email}</a></li>` : ""}
          ${SITE.address ? `<li>${SITE.address}</li>` : ""}
          <li><a href="iletisim.html">İletişim Formu →</a></li>
        </ul>
      </div>
    </div>
    <div class="f-bottom">
      <p>© ${new Date().getFullYear()} ${SITE.name}. Tüm hakları saklıdır.</p>
      <p>Bal ve arı ürünleri 1 yaşından küçük bebeklere verilmemelidir.</p>
    </div>
  </footer>
  <button class="to-top" id="toTop" aria-label="Yukarı çık"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>

  <div class="overlay" id="searchOv" role="dialog" aria-modal="true" aria-label="Site içi arama">
    <div class="search-box">
      <div class="search-top">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
        <input id="searchIn" type="search" placeholder="Ürün, yazı veya soru ara…" autocomplete="off">
        <button type="button" data-close>Kapat</button>
      </div>
      <div class="search-res" id="searchRes"><div class="sr-empty">Ürün, yazı veya soru arayın…</div></div>
    </div>
  </div>

  <div class="drawer-back" id="drawerBack" data-close></div>
  <aside class="drawer" id="cartDrawer" role="dialog" aria-modal="true" aria-label="Sepet">
    <div class="drawer-head"><h2>Sepetim</h2><button class="drawer-close" type="button" data-close aria-label="Kapat">×</button></div>
    <div class="drawer-body" id="cartBody"></div>
    <div class="drawer-foot" id="cartFoot" hidden></div>
  </aside>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);
  toastEl = $("#toast");

  /* ---------- etkileşimler ---------- */
  const nav = $("#mainNav"), toggle = $("#menuToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });

  document.addEventListener("click", e => {
    const t = e.target;
    const add = t.closest("[data-add]");
    if (add) {
      const card = add.closest("[data-card]");
      const sel = card && $(".vsel", card);
      addToCart(add.dataset.add, sel ? +sel.value : 0);
      add.classList.add("done");
      setTimeout(() => add.classList.remove("done"), 700);
      return;
    }
    if (t.closest("[data-open-cart]")) { renderCart(); $("#drawerBack").classList.add("is-open"); openOverlay($("#cartDrawer")); return; }
    if (t.closest("[data-open-search]")) { openOverlay($("#searchOv"), "#searchIn"); return; }
    if (t.closest("[data-close]") || t.id === "searchOv") { closeAll(); return; }
    const lg = t.closest("[data-lang]");
    if (lg) { setLang(lg.dataset.lang); return; }
    const q = t.closest("[data-qty]");
    if (q) { changeQty(q.dataset.id, +q.dataset.vi, +q.dataset.qty); return; }
    const rm = t.closest("[data-rm]");
    if (rm) { removeRow(rm.dataset.rm, +rm.dataset.vi); return; }
    if (t.closest("[data-clear]")) { clearCart(); return; }
    if (t.closest(".sr-item")) closeAll();
    if (t.closest("[data-copy]")) copy(location.href);
  });

  document.addEventListener("change", e => {
    if (!e.target.matches(".vsel")) return;
    const card = e.target.closest("[data-card]");
    const p = PRODUCTS.find(x => x.id === card.dataset.id);
    $(".price", card).textContent = fmt(p.variants[+e.target.value].price);
  });

  $("#searchIn").addEventListener("input", e => runSearch(e.target.value));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAll();
    if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); openOverlay($("#searchOv"), "#searchIn"); }
  });

  const toTop = $("#toTop");
  window.addEventListener("scroll", () => toTop.classList.toggle("is-visible", window.scrollY > 400), { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- arı yükleme ekranı ---------- */
  const pre = $("#preloader");
  if (pre) {
    const start = performance.now(), MIN = 900;
    let hidden = false;
    const hide = () => {
      if (hidden) return; hidden = true;
      setTimeout(() => {
        pre.classList.add("is-hidden");
        try { sessionStorage.setItem("kc-bee", "1"); } catch (e) { /* yok say */ }
        pre.addEventListener("transitionend", () => pre.remove(), { once: true });
        setTimeout(() => pre.remove(), 900);
      }, Math.max(0, MIN - (performance.now() - start)));
    };
    if (document.readyState === "complete") hide(); else window.addEventListener("load", hide);
    setTimeout(hide, 6000);
  }

  renderCart();

  /* ---------- sayfaların kullanacağı yardımcılar ---------- */
  window.KC = { SITE, fmt, esc, lower, TYPE_LABEL, media, metaHTML, formatDate, readMin, productCard, postCard, faqItem, renderBlocks, toast, copy, shareLinks, waLink, mailLink, mapLink, mapEmbed, socialLinks, EXT, DEV, addToCart, closeAll };
})();
