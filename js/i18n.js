/* =========================================================
   Kayıcan Bal – dil sistemi (TR / EN)
   - Dil, üstteki "TR / EN" düğmesiyle değişir ve tarayıcıda hatırlanır.
   - Adresin sonuna ?lang=en eklenirse de İngilizce açılır.
   - Ürün / yazı / S.S.S. metinleri js/data.en.js dosyasından gelir.
   - Sayfadaki sabit yazılar aşağıdaki sözlükle (EN_UI) çevrilir.
     Sözlükte olmayan bir yazı Türkçe kalır; yeni bir yazı eklerseniz
     sözlüğe "Türkçe metin": "English text" şeklinde ekleyin.
   Bu dosya js/data.js ve js/data.en.js'den SONRA, js/site.js'den ÖNCE yüklenmelidir.
   ========================================================= */

const LANG = (function () {
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "tr") { localStorage.setItem("kc-lang", q); return q; }
    return localStorage.getItem("kc-lang") === "en" ? "en" : "tr";
  } catch (e) { return "tr"; }
})();
document.documentElement.lang = LANG;

function setLang(l) {
  try { localStorage.setItem("kc-lang", l); } catch (e) { /* yok say */ }
  const u = new URL(location.href);
  u.searchParams.set("lang", l);
  location.href = u.toString();
}

/* ---------- sözlük: Türkçe → İngilizce ---------- */
const EN_UI = {
  /* sayfa başlıkları ve açıklamalar */
  "Kayıcan Bal – Süzme Bal, Polen ve Perga": "Kayıcan Bal – Strained Honey, Pollen and Perga",
  "Ürünlerimiz – Kayıcan Bal": "Our Products – Kayıcan Bal",
  "Yazılar – Kayıcan Bal": "Articles – Kayıcan Bal",
  "Sıkça Sorulan Sorular – Kayıcan Bal": "Frequently Asked Questions – Kayıcan Bal",
  "İletişim – Kayıcan Bal": "Contact – Kayıcan Bal",
  "Süzme bal, polen ve perga ürünleri arılıktan sofraya izlenebilir üretim anlayışıyla, cam kavanozda ve içerik bilgisiyle.": "Strained honey, pollen and perga products from apiary to table with a traceable production approach, in glass jars with clear product information.",
  "Kayıcan Bal ürünleri: organik süzme bal, süzme bal, polen ve perga.": "Kayıcan Bal products: organic strained honey, strained honey, pollen and perga.",
  "Bal tarifleri, arı ürünleri rehberi ve saklama ipuçları.": "Honey recipes, a guide to bee products and storage tips.",
  "Bal, polen ve perga hakkında sıkça sorulan sorular; saklama, kullanım, sipariş ve teslimat.": "Frequently asked questions about honey, pollen and perga: storage, use, ordering and delivery.",
  "Kayıcan Bal ile iletişime geçin: sipariş, ürün bilgisi ve toplu sipariş için.": "Get in touch with Kayıcan Bal for orders, product information and bulk orders.",

  /* menü / ortak */
  "Yükleniyor": "Loading",
  "Kayıcan Bal ana sayfa": "Kayıcan Bal home",
  "Menüyü aç": "Open menu",
  "Ana menü": "Main menu",
  "Ürünlerimiz": "Products",
  "Yazılar": "Articles",
  "S.S.S.": "FAQ",
  "İletişim": "Contact",
  "Alışverişe Başla": "Start Shopping",
  "Sipariş desteği": "Order support",
  "Ara": "Search",
  "Sepet": "Cart",
  "Sepetim": "My Cart",
  "Kapat": "Close",
  "Site içi arama": "Site search",
  "Ürün, yazı veya soru ara…": "Search products, articles or questions…",
  "Ürün, yazı veya soru arayın…": "Search for a product, article or question…",
  "Yukarı çık": "Back to top",
  "” için sonuç bulunamadı.": "” returned no results.",
  "Ürünler": "Products",

  /* alt bilgi */
  "Süzme bal, polen ve perga ürünlerini arılıktan sofraya izlenebilir üretim anlayışıyla hazırlıyoruz. Cam kavanozda, içerik bilgisiyle.": "We prepare strained honey, pollen and perga from apiary to table with a traceable production approach. In glass jars, with product information.",
  "Sayfalar": "Pages",
  "Ana Sayfa": "Home",
  "Faydalı Bağlantılar": "Useful Links",
  "Çevrim İçi Mağaza": "Online Store",
  "T.C. Tarım ve Orman Bakanlığı": "Ministry of Agriculture and Forestry (Türkiye)",
  "Haritada Yöremiz": "Our Region on the Map",
  "WhatsApp'tan Yazın": "Message Us on WhatsApp",
  "İletişim Formu →": "Contact Form →",
  "Bal ve arı ürünleri 1 yaşından küçük bebeklere verilmemelidir.": "Honey and bee products should not be given to infants under 1 year old.",

  /* sepet / kartlar / paylaşım */
  "Sepetiniz boş.": "Your cart is empty.",
  "Ürünlere Göz At": "Browse Products",
  "Azalt": "Decrease",
  "Artır": "Increase",
  "Mağazada aç": "Open in store",
  "Kaldır": "Remove",
  "Toplam": "Total",
  "WhatsApp ile Sipariş Ver": "Order via WhatsApp",
  "E-posta ile Gönder": "Send by E-mail",
  "Mağazada Tamamla": "Complete in Store",
  "Sepeti Temizle": "Clear Cart",
  "Kargo ve ödeme bilgileri sipariş sırasında paylaşılır.": "Shipping and payment details are shared during ordering.",
  "(Geliştirici notu: WhatsApp/e-posta ile sipariş için js/site.js içindeki SITE.phone / SITE.email alanlarını doldurun; bu not yalnızca yerel önizlemede görünür.)": "(Developer note: fill in SITE.phone / SITE.email in js/site.js to order by WhatsApp/e-mail; this note only appears in local preview.)",
  "Sepete Ekle": "Add to Cart",
  "Sepete Ekle +": "Add to Cart +",
  "Cam kavanozda gönderilir": "Shipped in a glass jar",
  "Seçenek": "Option",
  "Devamını Oku ›": "Read More ›",
  "Tarif": "Recipe",
  "Bağlantı kopyalandı": "Link copied",
  "Kopyalanamadı": "Could not copy",
  "Paylaş:": "Share:",
  "E-posta": "E-mail",
  "Bağlantıyı kopyala": "Copy link",
  "Mağazada Aç": "Open in Store",
  "Sipariş talebi": "Order request",
  "Merhaba, bilgi almak istiyorum.": "Hello, I would like some information.",
  "Merhaba, bir sorum var.": "Hello, I have a question.",
  "Merhaba, aşağıdaki ürünleri sipariş etmek istiyorum:": "Hello, I would like to order the following items:",
  "Web sitesi:": "Website:",
  "Konu": "Subject",
  "Ad": "Name",

  /* ana sayfa */
  "Tanıtım": "Introduction",
  "Güvence": "Our promises",
  "Hikâyemiz": "Our Story",
  "Süzme bal, polen ve perga ürünlerini arılıktan sofraya izlenebilir üretim anlayışıyla hazırlıyoruz. Cam kavanozda, güven veren içerik bilgisiyle siparişe hazır.": "We prepare strained honey, pollen and perga from apiary to table with a traceable production approach. In glass jars, with reassuring product information, ready to order.",
  "Cam kavanoz": "Glass jar",
  "Ürünler cam kavanozda gönderilir": "Products ship in a glass jar",
  "Arılıktan sofraya": "From apiary to table",
  "İzlenebilir üretim anlayışı": "Traceable production approach",
  "İçerik bilgisi": "Product information",
  "Net miktar ve ürün bilgisi etikette": "Net weight and product details on the label",
  "Refahiye yöresi": "Refahiye region",
  "Organik çiçek balımızın yöresi": "Home of our organic flower honey",
  "Hakkımızda": "About Us",
  "Doğaya ve emeğe adanmış yıllar": "Years devoted to nature and hard work",
  "Arıcılık sabır ve emek işidir. Kayıcan Bal olarak süzme bal, polen ve perga ürünlerini; arılığın başından kavanozun kapanışına kadar izlenebilir bir anlayışla hazırlıyor, ürünlerimizi cam kavanozda ve ürün bilgisiyle sizlere ulaştırıyoruz.": "Beekeeping is a craft of patience and hard work. At Kayıcan Bal we prepare strained honey, pollen and perga with a traceable approach, from the apiary to the closing of the jar, and deliver our products to you in glass jars with clear product information.",
  "Sofranıza özel seçimler": "Selections for your table",
  "Tüm ürünlerimizi sepete ekleyin; siparişinizi WhatsApp, e-posta veya çevrim içi mağazamız üzerinden tamamlayın.": "Add any of our products to your cart and complete your order via WhatsApp, e-mail or our online store.",
  "Tüm Ürünleri Gör": "See All Products",
  "Üretim Anlayışımız": "Our Approach",
  "Arıdan sofraya dört adım": "From bee to table in four steps",
  "Arılık": "Apiary",
  "Arılar yöremizin çiçeklerinden nektar ve polen toplar.": "Bees collect nectar and pollen from the flowers of our region.",
  "Hasat": "Harvest",
  "Petekler olgunlaştığında kovandan alınır.": "Combs are taken from the hive once they have matured.",
  "Süzme": "Straining",
  "Bal petekten süzülerek ayrılır ve kavanoza hazırlanır.": "The honey is strained from the comb and prepared for the jar.",
  "Sofranıza": "To Your Table",
  "Cam kavanozda, etiket bilgisiyle size ulaştırılır.": "Delivered to you in a glass jar, with label information.",
  "Kararsız mısınız?": "Can't decide?",
  "Size hangisi uygun?": "Which one suits you?",
  "Ne arıyorsunuz?": "What are you looking for?",
  "Kahvaltı sofrası için": "For the breakfast table",
  "Organik ürün arıyorum": "I'm looking for an organic product",
  "Yoğurt ve kaselere eklemek için": "To add to yogurt and bowls",
  "Yeni bir arı ürünü denemek istiyorum": "I want to try a new bee product",
  "Günlük kahvaltı için pratik, akışkan süzme bal.": "Practical, fluid strained honey for everyday breakfast.",
  "Etiketinde organik çiçek balı ve Refahiye yöresi yazan 850 g kavanoz.": "An 850 g jar whose label says organic flower honey and Refahiye region.",
  "Yoğurt, müsli ve smoothie kaselerinin üzerine serpmek için.": "To sprinkle over yogurt, muesli and smoothie bowls.",
  "Bal veya yoğurtla birlikte tüketilen, kendine özgü tatlı perga.": "Distinctively flavored perga, eaten with honey or yogurt.",
  "Ayrıntılar": "Details",
  "Değerlerimiz": "Our Values",
  "Bizi biz yapanlar": "What makes us who we are",
  "Kalite ve İzlenebilirlik": "Quality and Traceability",
  "Ürünlerimizde ürün adı, net miktar ve içerik bilgisini açıkça paylaşırız. Sorularınıza doğrudan üreticiden yanıt alabilirsiniz.": "We clearly share the product name, net weight and product information on our products. You can get answers to your questions directly from the producer.",
  "Cam kavanozda ambalaj": "Glass jar packaging",
  "Etiketle ürün bilgisi": "Product details on the label",
  "Doğrudan iletişim": "Direct contact",
  "Doğaya Saygı": "Respect for Nature",
  "Arılar doğanın dengesinin en önemli parçalarından biridir. Arılığı ve çevresini korumak, üretimimizin ayrılmaz bir parçasıdır.": "Bees are one of the most important parts of nature's balance. Protecting the apiary and its surroundings is an inseparable part of our production.",
  "Cam ambalajın yeniden kullanılabilmesi": "Reusable glass packaging",
  "Arılara saygılı üretim": "Bee-friendly production",
  "Yöremiz: Refahiye": "Our Region: Refahiye",
  "Organik çiçek balımızın etiketinde Refahiye yöresi yazar. Bu yörenin çiçekli yaylalarını haritada inceleyebilirsiniz.": "The label of our organic flower honey names the Refahiye region. You can explore the region on the map.",
  "Haritada Gör": "View on Map",
  "Tarifler ve bal rehberi": "Recipes and honey guide",
  "Tüm Yazılar": "All Articles",
  "Merak edilenler": "Frequently asked",
  "Sıkça sorulan sorular": "Frequently asked questions",
  "Tüm Sorular": "All Questions",
  "Bize ulaşın": "Get in touch",
  "Sorularınız, toplu siparişleriniz veya önerileriniz için buradayız.": "We're here for your questions, bulk orders or suggestions.",
  "E-posta Gönderin": "Send an E-mail",
  "İletişim Formu": "Contact Form",

  /* ürünler sayfası */
  "/ Ürünlerimiz": "/ Products",
  "Süzme bal, polen ve perga. Cam kavanozda, net miktar ve ürün bilgisiyle.": "Strained honey, pollen and perga. In glass jars, with net weight and product information.",
  "Ürün ara…": "Search products…",
  "Ürün ara": "Search products",
  "Tüm Ürünler": "All Products",
  "🍯 Bal": "🍯 Honey",
  "🐝 Arı Ürünleri": "🐝 Bee Products",
  "Sırala": "Sort",
  "Önerilen sıralama": "Recommended order",
  "Fiyat: düşükten yükseğe": "Price: low to high",
  "Fiyat: yüksekten düşüğe": "Price: high to low",
  "İsme göre (A–Z)": "By name (A–Z)",
  "Aramanızla eşleşen ürün bulunamadı.": "No products match your search.",
  "← Ürünlere dön": "← Back to products",
  "WhatsApp'tan Sor": "Ask on WhatsApp",
  "Açıklama": "Description",
  "Kullanım": "Usage",
  "Saklama": "Storage",
  "Bu ürünle ilgili yazılar": "Articles about this product",
  "Diğer ürünler": "Other products",

  /* yazılar sayfası */
  "/ Yazılar": "/ Articles",
  "Yazı ara…": "Search articles…",
  "Yazı ara": "Search articles",
  "Tümü": "All",
  "Aramanızla eşleşen yazı bulunamadı.": "No articles match your search.",
  "← Yazılara dön": "← Back to articles",
  "Bu yazıyla ilgili ürün": "Product related to this article",
  "Daha fazla bilgi:": "More information:",
  "Diğer tarifler": "More recipes",
  "Diğer yazılar": "More articles",
  "Malzemeler": "Ingredients",
  "Yapılışı": "Instructions",

  /* S.S.S. sayfası */
  "/ S.S.S.": "/ FAQ",
  "Sıkça Sorulan Sorular": "Frequently Asked Questions",
  "Bal, polen ve perga hakkında merak edilenler.": "What people wonder about honey, pollen and perga.",
  "Soru ara…": "Search questions…",
  "Soru ara": "Search questions",
  "Saklama ve Kullanım": "Storage and Use",
  "Sipariş ve Teslimat": "Orders and Delivery",
  "Aramanızla eşleşen soru bulunamadı.": "No questions match your search.",
  "Cevabı bulamadınız mı?": "Couldn't find the answer?",
  "Sorunuzu bize iletin, en kısa sürede dönüş yapalım.": "Send us your question and we'll get back to you as soon as possible.",
  "WhatsApp'tan Sorun": "Ask on WhatsApp",

  /* iletişim sayfası */
  "/ İletişim": "/ Contact",
  "Sipariş, ürün bilgisi veya toplu sipariş için bize yazın.": "Write to us for orders, product information or bulk orders.",
  "Telefon": "Phone",
  "Adres": "Address",
  "Çalışma saatleri": "Opening hours",
  "Hemen mesaj gönderin ↗": "Send a message now ↗",
  "Bizi takip edin ↗": "Follow us ↗",
  "Çevrim içi mağaza": "Online store",
  "Cevabı hemen bulun": "Find the answer quickly",
  "Geliştirici notu:": "Developer note:",
  "Telefon, e-posta, adres ve sosyal medya bağlantıları henüz girilmedi. js/site.js dosyasının başındaki SITE bölümünü doldurunca burada kartlar olarak görünür. (Bu not yalnızca yerel önizlemede görünür.)": "Phone, e-mail, address and social media links have not been entered yet. Fill in the SITE section at the top of js/site.js and they will appear here as cards. (This note only appears in local preview.)",
  "Bize yazın": "Write to us",
  "Adınız *": "Your name *",
  "Telefon veya e-posta": "Phone or e-mail",
  "Sipariş / teslimat": "Order / delivery",
  "Ürün bilgisi": "Product information",
  "Toplu sipariş": "Bulk order",
  "Diğer": "Other",
  "Mesajınız *": "Your message *",
  "WhatsApp ile Gönder": "Send via WhatsApp",
  "Mesajı Kopyala": "Copy Message",
  "Lütfen adınızı ve mesajınızı yazın.": "Please enter your name and your message.",
  "WhatsApp açıldı; mesajı oradan gönderebilirsiniz.": "WhatsApp has opened; you can send your message from there.",
  "E-posta uygulamanız açılıyor…": "Opening your e-mail app…",
  "Mesaj kopyalandı. WhatsApp veya e-posta ile bize iletebilirsiniz.": "Message copied. You can send it to us via WhatsApp or e-mail.",
  "Harita": "Map",
  "Google Haritalar'da aç": "Open in Google Maps"
};

/* kalıplar: sayı / isim içeren cümleler */
const EN_PAT = [
  [/^(\d+) ürün bulundu$/, n => `${n} ${n === "1" ? "product" : "products"} found`],
  [/^(\d+) yazı bulundu$/, n => `${n} ${n === "1" ? "article" : "articles"} found`],
  [/^(\d+) soru bulundu$/, n => `${n} ${n === "1" ? "question" : "questions"} found`],
  [/^(\d+) dk okuma$/, n => `${n} min read`],
  [/^(.+) sepete eklendi$/, n => `${n} added to cart`],
  [/^© (\d+) Kayıcan Bal\. Tüm hakları saklıdır\.$/, y => `© ${y} Kayıcan Bal. All rights reserved.`],
  [/^Merhaba, "(.+)" ürünü hakkında bilgi almak istiyorum\.$/, n => `Hello, I would like information about "${n}".`]
];

function translateText(core) {
  if (Object.prototype.hasOwnProperty.call(EN_UI, core)) return EN_UI[core];
  for (const [re, fn] of EN_PAT) {
    const m = core.match(re);
    if (m) return fn(...m.slice(1));
  }
  return core;
}
/* kod içinden kullanım (bağlantı metinleri, mesajlar): t("Toplam") */
function t(s) { return LANG === "en" ? translateText(String(s)) : String(s); }

/* ---------- İngilizce modda veriyi değiştir ---------- */
if (LANG === "en") {
  PRODUCTS.forEach(p => {
    Object.assign(p, PRODUCTS_EN[p.id] || {});
    p.variants = p.variants.map(v => ({ ...v, label: v.label.replace(/ gram$/, " g") }));
  });
  POSTS.forEach(p => Object.assign(p, POSTS_EN[p.id] || {}));
  FAQ.forEach((f, i) => {
    const e = FAQ_EN[i];
    if (!e) return;
    f.q = e.q; f.a = e.a;
    if (f.more && e.more) f.more = { ...f.more, t: e.more.t };
  });
  PRODUCT_NOTE = PRODUCT_NOTE_EN;

  /* ---------- sayfadaki yazıları çevir (ve sonradan eklenenleri de) ---------- */
  (function () {
    const ATTRS = ["placeholder", "aria-label", "title", "alt", "content"];
    const SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
    function tr(s) {
      const core = s.trim().replace(/\s+/g, " ");
      if (!core) return s;
      const r = translateText(core);
      if (r === core) return s;
      return s.match(/^\s*/)[0] + r + s.match(/\s*$/)[0];
    }
    function walk(n) {
      if (n.nodeType === 3) { const v = tr(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; return; }
      if (n.nodeType !== 1 || SKIP[n.tagName]) return;
      for (const a of ATTRS) {
        if (n.hasAttribute(a)) { const o = n.getAttribute(a), v = tr(o); if (v !== o) n.setAttribute(a, v); }
      }
      n.childNodes.forEach(walk);
    }
    walk(document.documentElement);
    new MutationObserver(ms => {
      for (const m of ms) {
        if (m.type === "characterData") walk(m.target);
        else m.addedNodes.forEach(walk);
      }
    }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  })();
}
