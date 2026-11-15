/* =========================================================
   Kayıcan Bal – içerik verisi (ürünler, yazılar, S.S.S.)
   Yeni ürün / yazı / soru eklemek için ilgili diziye bir nesne ekleyin.
   Tüm sayfalar (menü, arama, kartlar) bu dosyadan beslenir.
   ========================================================= */

/* ---------- ÜRÜNLER ----------
   image : ürün fotoğrafının yolu veya adresi (ör. "images/bal-850.jpg").
           Boşsa emoji gösterilir. GERÇEK FOTOĞRAF ADRESİ ≠ ürün sayfası adresi.
   url   : kayicanbal.com üzerindeki ürün sayfası (mağazada aç bağlantısı)       */
const PRODUCTS = [
  {
    id: "organik-suzme-bal-850",
    name: "Organik Bal Sertifikalı Süzme Bal 850 g",
    cat: "bal",
    emoji: "🍯",
    image: "images/organikbal.jpg",
    url: "https://www.kayicanbal.com/products/organik-bal-sertifikali-suzme-bal-850-g",
    variants: [{ label: "850 gram", price: 1950 }],
    short: "850 g cam kavanozda organik çiçek balı. Kahvaltının ve tatlıların vazgeçilmezi.",
    desc: [
      "850 gram net miktarlı, cam kavanozda sunulan organik çiçek balıdır. Kavanozun etiketinde Refahiye yöresi ve organik çiçek balı bilgisi yer alır.",
      "Süzme bal; petekten süzülerek ayrılan, akışkan kıvamlı bir baldır. Kahvaltıda, tatlılarda, yoğurtta ve sıcak içeceklerde kullanılabilir."
    ],
    usage: ["Kahvaltıda ekmek, tereyağı ve peynirle", "Yoğurt, yulaf ve granola kaselerinde", "Krep, fırın elma ve kek gibi tatlılarda", "Ilık (sıcak değil) süt veya bitki çayında"],
    storage: "Serin, kuru ve ışıktan uzak bir yerde, kapağı kapalı saklayın. Buzdolabına koymanız gerekmez. Zamanla kristalleşmesi doğaldır."
  },
  {
    id: "suzme-bal",
    name: "Süzme Bal",
    cat: "bal",
    emoji: "🍯",
    image: "images/suzmebal.jpg",
    url: "https://www.kayicanbal.com/products/suzme-bal",
    variants: [{ label: "850 gram", price: 1150 }],
    short: "850 g cam kavanozda süzme bal. Günlük kullanım için.",
    desc: [
      "850 gram net miktarlı süzme bal. Cam kavanozda gönderilir.",
      "Süzme bal, petek parçası içermeyen, kaşıkla rahatça alınabilen bir baldır. Sofranın her anına eşlik eder."
    ],
    usage: ["Kahvaltı sofrasında", "Peynir ve meyve tabaklarında", "Tatlı ve hamur işlerinde", "Yoğurt veya süt ürünlerinin üzerinde"],
    storage: "Serin, kuru ve ışıktan uzak bir yerde, kapağı kapalı saklayın. Kristalleşirse kapalı kavanozu ılık su banyosunda (yaklaşık 40 °C'yi geçmeden) bekletebilirsiniz."
  },
  {
    id: "polen-240",
    name: "Polen 240 g",
    cat: "ari",
    emoji: "🐝",
    image: "images/polentaneleri.jpg",
    url: "https://www.kayicanbal.com/products/polen-240-g",
    variants: [{ label: "240 gram", price: 500 }],
    short: "240 g arı poleni. Yoğurt, müsli ve smoothie kaselerine.",
    desc: [
      "240 gram net miktarlı arı poleni. Arıların çiçeklerden topladığı polen tanelerinden oluşur; bileşimi çiçek kaynağına göre değişir.",
      "Rengarenk taneleri sayesinde kahvaltı kaselerine hem görünüm hem doku katar."
    ],
    usage: ["Yoğurdun veya müslinin üzerine serpilerek", "Smoothie'ye karıştırılarak", "Bal ile karıştırılıp ekmeğe sürülerek", "Küçük miktarlarla başlayarak"],
    storage: "Serin, kuru ve ışıktan uzakta, kapağı kapalı saklayın. Nem almasına izin vermeyin."
  },
  {
    id: "perga-200",
    name: "Perga 200 g",
    cat: "ari",
    emoji: "🐝",
    image: "images/pergagozleri.jpg",
    url: "https://www.kayicanbal.com/products/perga-200-g",
    variants: [{ label: "200 gram", price: 1200 }],
    short: "200 g perga (arı ekmeği). Bal ve yoğurtla birlikte.",
    desc: [
      "200 gram net miktarlı perga. Perga, arıların polenle bal ve salgılarını karıştırıp petek gözlerinde olgunlaştırdığı arı ürünüdür; halk arasında \"arı ekmeği\" olarak da bilinir.",
      "Kendine özgü, hafif ekşimsi tadıyla bal veya yoğurtla birlikte tüketilmeye uygundur."
    ],
    usage: ["Bal ile karıştırılıp kaşıkla", "Yoğurt ve kahvaltılık kaselerde", "Küçük miktarlarla başlayarak"],
    storage: "Serin, kuru ve ışıktan uzakta, kapağı kapalı saklayın."
  }
];

let PRODUCT_NOTE = "Bal ve arı ürünleri 1 yaşından küçük bebeklere verilmemelidir. Arı ürünlerine alerjisi olanlar, hamileler, emzirenler ve düzenli ilaç kullananlar tüketmeden önce doktoruna danışmalıdır.";

/* ---------- YAZILAR ----------
   type    : "tarif" | "blog"
   content : blok listesi → "paragraf" | {h:"Ara başlık"} | {ul:[...]} | {ol:[...]}
   tarifler için: sure, porsiyon, malzemeler, yapilis
   product : yazıyla ilgili ürünün id'si (isteğe bağlı)
   links   : harici bağlantılar [{t:"Başlık", u:"https://..."}]               */
const POSTS = [
  {
    id: "balli-muzlu-krep-rulosu",
    type: "tarif", emoji: "🥞", image: "", date: "2026-10-10",
    title: "Ballı Muzlu Krep Rulosu",
    excerpt: "Süzme bal, muz, ince krep, tahin veya labne ve cevizle hazırlanan pratik ballı muzlu krep rulosu tarifi.",
    product: "suzme-bal",
    sure: "Hazırlık 10 dk · Pişirme 15 dk", porsiyon: "2 kişilik",
    content: [
      "Kahvaltıya da tatlı saatine de yakışan bu rulo, birkaç malzemeyle hazırlanır. Tahinin hafif acımsı tadı, muzun yumuşaklığı ve balın tatlılığı bir arada çok iyi dengelenir.",
      "Krepleri evde hazırlayabilir ya da hazır krep kullanabilirsiniz. Önemli olan krepin ince ve esnek olması; böylece sarılırken yırtılmaz."
    ],
    malzemeler: [
      "4 adet ince krep (hazır ya da evde)", "2 adet olgun muz", "2 yemek kaşığı süzme bal + üzeri için biraz daha",
      "2 yemek kaşığı tahin veya labne", "1 avuç iri dövülmüş ceviz", "1 tutam tarçın (isteğe bağlı)",
      "Krep için: 1 su bardağı un, 1 yumurta, 1,5 su bardağı süt, 1 tutam tuz"
    ],
    yapilis: [
      "Krep için un, yumurta, süt ve tuzu pürüzsüz bir sıvı kıvamına gelene dek çırpın; 10 dakika dinlendirin.",
      "Hafif yağlanmış, ısınmış tavada ince ince krepleri iki yüzünü de pişirin.",
      "Krepin üzerine tahin veya labneyi ince bir tabaka halinde sürün.",
      "Muzu boyuna kesip krepin kenarına dizin; üzerine ceviz ve tarçın serpin.",
      "Balı gezdirin, krepi sıkıca rulo yapın ve ikiye bölün. Servis ederken üzerine bir kaşık bal daha ekleyin."
    ]
  },
  {
    id: "bali-peynir-ve-meyveyle-eslestirme-rehberi",
    type: "blog", emoji: "🧀", image: "", date: "2026-10-10",
    title: "Balı Peynir ve Meyveyle Eşleştirme Rehberi",
    excerpt: "Balı kahvaltı ve davet sofralarında peynir, meyve, ekmek ve kuruyemişlerle dengeli şekilde eşleştirmenin sade rehberi.",
    product: "organik-suzme-bal-850",
    content: [
      "Bal yalnızca ekmeğe sürülen bir lezzet değil; doğru eşleştiğinde tuzlu, ekşi ve acı tatları yumuşatan bir denge unsurudur. İşte sofranızda kolayca uygulayabileceğiniz eşleştirmeler.",
      { h: "Peynirlerle" },
      "Beyaz peynir, labne, lor ve keçi peyniri gibi taze ve tuzlu peynirler baldan çok keyif alır. Eski kaşar ve sert peynirlerde ise birkaç damla bal yeterlidir; fazlası peynirin aromasını bastırabilir.",
      { h: "Meyvelerle" },
      "İncir, armut, elma, üzüm ve nar bal ile klasik bir uyum yakalar. Meyveyi dilimleyip peynirin yanına koymak, bal kavanozunu da ortaya almak tabağı hem şık hem pratik yapar.",
      { h: "Ekmek ve kuruyemişle" },
      "Kızarmış ekmek, tereyağı ve bal üçlüsü kahvaltının değişmezidir. Ceviz, fındık ve badem ise tabağa çıtırlık ve derinlik katar.",
      { h: "Davet sofrası için ipuçları" },
      { ul: ["Peynirleri servisten yarım saat önce buzdolabından çıkarın.", "Balı küçük bir kavanoz veya kâsede, yanında bir bal kaşığıyla sunun.", "Tatlı, tuzlu ve çıtır öğeleri tabakta yan yana koyun.", "Bir tabağa iki üç çeşit peynir ve iki üç çeşit meyve yeterlidir."] }
    ]
  },
  {
    id: "balli-yulafli-firin-elma",
    type: "tarif", emoji: "🍎", image: "", date: "2026-10-10",
    title: "Ballı Yulaflı Fırın Elma",
    excerpt: "Süzme bal, yulaf, ceviz ve tarçınla hazırlanan pratik fırın elma tarifi; kahvaltı, ara öğün ve tatlı sunumu için sade bir tarif.",
    product: "suzme-bal",
    sure: "Hazırlık 10 dk · Pişirme 30 dk", porsiyon: "4 kişilik",
    content: [
      "Fırında yumuşayan elmanın içine doldurulan yulaflı karışım, evi tarçın kokusuyla doldurur. Şekersiz bir tatlı arıyorsanız balın doğal tatlılığı burada işe yarar."
    ],
    malzemeler: [
      "4 adet orta boy elma (sert ve tatlı-ekşi olanlar iyi sonuç verir)", "3 yemek kaşığı yulaf ezmesi", "2 yemek kaşığı iri doğranmış ceviz",
      "3 yemek kaşığı süzme bal", "1 çay kaşığı tarçın", "1 yemek kaşığı tereyağı (isteğe bağlı)", "Servis için süzme yoğurt"
    ],
    yapilis: [
      "Fırını 180 °C'ye ısıtın. Elmaların üst kısmını kapak gibi kesin, çekirdek bölümünü kaşıkla oyun; tabanı delmeyin.",
      "Yulaf, ceviz, tarçın ve balın yarısını karıştırın; elmaların içine doldurun.",
      "Kalan balı ve isterseniz küçük tereyağı parçalarını üzerine ekleyin; kapakları yerlerine koyun.",
      "Elmaları bir fırın kabına dizin, dibine yarım su bardağı su ekleyip 25–30 dakika pişirin.",
      "Ilık olarak, yanında bir kaşık süzme yoğurtla servis edin."
    ]
  },
  {
    id: "suzme-bal-nedir-petek-bal-farki",
    type: "blog", emoji: "🍯", image: "", date: "2026-11-05",
    title: "Süzme Bal Nedir? Petek Bal ile Farkı",
    excerpt: "Süzme bal ile petek balın farkı nedir, hangisi hangi sofra için uygundur? Kısa ve anlaşılır bir rehber.",
    product: "suzme-bal",
    content: [
      "Marketlerde ve mağazalarda iki ifade sık karşımıza çıkar: süzme bal ve petek bal. İkisi de bal arısının ürünüdür; farkları sunuluş biçimindedir.",
      { h: "Süzme bal" },
      "Süzme bal, bal peteğinden süzülerek ayrılan baldır. İçinde petek parçası bulunmaz, akışkan kıvamdadır ve kavanozdan kolayca alınır. Ekmeğe sürmek, yoğurda eklemek ve tatlılarda kullanmak için pratiktir.",
      { h: "Petek bal" },
      "Petek bal ise arının ördüğü ve mühürlediği petek içinde, bal ve mumuyla birlikte sunulur. Petek mumu yenilebilir; çiğnendiğinde kalan mum parçası tükürülebilir. Peynir tabaklarında ve özel sunumlarda tercih edilir.",
      { h: "Hangisini seçmeli?" },
      { ul: ["Günlük kahvaltı ve mutfak kullanımı için: süzme bal.", "Sunum ve hediye için: petek bal.", "Çocuklu evlerde kolay kullanım için: süzme bal."] },
      "Hangisini seçerseniz seçin, etiket bilgisine bakmak ve üreticisini bilmek en güvenilir yoldur. Etikette nelere bakacağınızı \"Bal Alırken Etikette Nelere Bakılır?\" yazımızda anlattık."
    ],
    links: [{ t: "Bal – Vikipedi", u: "https://tr.wikipedia.org/wiki/Bal" }]
  },
  {
    id: "bal-nasil-saklanir-kristallesme",
    type: "blog", emoji: "🫙", image: "", date: "2026-11-05",
    title: "Bal Nasıl Saklanır? Kristalleşen Bal Bozulmuş mu?",
    excerpt: "Balın doğru saklanması ve kristalleşmenin ne anlama geldiği; kristalleşen balı eski kıvamına getirmenin güvenli yolu.",
    product: "organik-suzme-bal-850",
    content: [
      "Kavanozdaki balın zamanla katılaşması ya da tane tane olması sık karşılaşılan bir durumdur. Çoğu kişi bunun balın bozulduğu anlamına geldiğini düşünür; oysa kristalleşme çoğunlukla doğal bir süreçtir.",
      { h: "Bal neden kristalleşir?" },
      "Bal, başta glikoz ve fruktoz olmak üzere şekerlerden oluşan yoğun bir çözeltidir. Glikozun oranı yüksek olan ballar zamanla kristalize olur. Soğuk ortamlar bu süreci hızlandırır. Bu, balın niteliğini değil yalnızca kıvamını değiştirir.",
      { h: "Doğru saklama" },
      { ul: ["Serin, kuru ve ışıktan uzak bir yerde saklayın.", "Kapağını sıkıca kapatın; bal ortamdan nem çekebilir.", "Buzdolabına koymanıza gerek yoktur; soğukta daha hızlı kristalleşir.", "Kaşığı kavanoza kuru olarak sokun."] },
      { h: "Kristalleşen balı yeniden akıcı yapmak" },
      "Kapağı kapalı kavanozu, ılık su dolu bir kaba koyup bekletin. Suyun sıcaklığı yaklaşık 40 °C'yi geçmesin. Kaynar su veya mikrodalga balın aromasını ve içeriğini olumsuz etkileyebilir. Bal yumuşadıkça ara sıra karıştırın.",
      "Balda küf kokusu, köpürme veya ekşimsi bir koku fark ederseniz tüketmeyin."
    ],
    links: [{ t: "T.C. Tarım ve Orman Bakanlığı", u: "https://www.tarimorman.gov.tr" }]
  },
  {
    id: "polen-nedir-nasil-tuketilir",
    type: "blog", emoji: "🌼", image: "", date: "2026-11-05",
    title: "Polen Nedir, Nasıl Tüketilir?",
    excerpt: "Arı poleni nasıl elde edilir, mutfakta nasıl kullanılır ve tüketirken nelere dikkat etmek gerekir?",
    product: "polen-240",
    content: [
      "Arılar çiçeklerden topladıkları polen tanelerini arka bacaklarındaki sepetçiklerde kovana taşır. Arıcılar, kovan girişine yerleştirilen polen tuzaklarıyla bu taneciklerin bir kısmını toplar.",
      { h: "Polenin yapısı" },
      "Polen; karbonhidrat, protein ve çeşitli bileşenler içeren bir arı ürünüdür. Rengi ve bileşimi, arıların hangi çiçeklerden topladığına göre değişir. Bu yüzden her partinin görünümü biraz farklı olabilir.",
      { h: "Mutfakta kullanım" },
      { ul: ["Yoğurt veya müslinin üzerine serpin.", "Smoothie ve meyve kaselerine ekleyin.", "Balla karıştırıp ekmeğe sürün.", "Tatlıların süslenmesinde kullanın."] },
      { h: "Dikkat edilmesi gerekenler" },
      "Polen bazı kişilerde alerjik reaksiyona neden olabilir. İlk kez tüketecekseniz çok küçük bir miktarla başlayın. Polen veya arı ürünlerine alerjiniz varsa, hamileyseniz, emziriyorsanız ya da düzenli ilaç kullanıyorsanız mutlaka doktorunuza danışın. 1 yaşından küçük çocuklara verilmemelidir.",
      "Poleni serin, kuru ve ışıktan uzak yerde, kapalı kapta saklayın."
    ]
  },
  {
    id: "perga-nedir-ari-ekmegi",
    type: "blog", emoji: "🐝", image: "", date: "2026-11-05",
    title: "Perga (Arı Ekmeği) Nedir?",
    excerpt: "Pergayı polenden ayıran nedir? Arıların petek gözlerinde olgunlaştırdığı bu ürün hakkında bilmeniz gerekenler.",
    product: "perga-200",
    content: [
      "Perga, arıların topladıkları poleni petek gözlerine sıkıştırıp bal ve salgılarıyla karıştırarak kapatmasıyla oluşur. Bu kapalı ortamda polen zamanla olgunlaşır ve kendine özgü bir yapı kazanır. Bu nedenle halk arasında \"arı ekmeği\" denir.",
      { h: "Polenden farkı" },
      "Polen, arıların çiçeklerden topladığı hâliyle kovandan alınan taneciklerdir. Perga ise kovanın içinde, arılar tarafından işlenmiş ve depolanmış olan üründür. Görünüm, doku ve tat bakımından farklılık gösterir.",
      { h: "Nasıl tüketilir?" },
      { ul: ["Bir miktar balla karıştırıp kaşıkla.", "Yoğurt ve kahvaltılık kaselerde.", "Küçük miktarlarla başlayarak."] },
      "Polen gibi perga da arı ürünlerine alerjisi olanlar için uygun değildir. Hamilelik, emzirme veya düzenli ilaç kullanımı gibi durumlarda tüketmeden önce doktorunuza danışın. Serin ve kuru yerde, kapağı kapalı saklayın."
    ]
  },
  {
    id: "bal-alirken-etikette-nelere-bakilir",
    type: "blog", emoji: "🏷️", image: "", date: "2026-11-05",
    title: "Bal Alırken Etikette Nelere Bakılır?",
    excerpt: "Kavanozdaki etiket size çok şey söyler: üretici, parti numarası, tarih ve bal türü. Alışverişte dikkat edilecekler.",
    content: [
      "Bal alırken görünüm ya da kıvam tek başına karar vermek için yeterli değildir. Güvenilir bir ürünün en önemli göstergesi okunaklı ve eksiksiz etiket bilgisidir.",
      { h: "Etikette aranacaklar" },
      { ul: ["Ürünün adı ve türü (çiçek balı, salgı balı vb.).", "Üretici veya paketleyicinin adı ve adresi.", "Net miktar.", "Parti veya lot numarası; izlenebilirliği sağlar.", "Üretim ve son tüketim tarihi veya tavsiye edilen tüketim tarihi.", "Menşei veya yöre bilgisi.", "Organik ibaresi varsa sertifika kodu ve kontrol kuruluşu bilgisi."] },
      { h: "İzlenebilirlik neden önemli?" },
      "Parti numarası sayesinde bir ürünün hangi dönemde ve nasıl üretildiği takip edilebilir. Üreticisini tanımak ve soru sorabilmek de güveni artırır.",
      { h: "Ambalaj" },
      "Cam kavanoz, bal ile tepkimeye girmez ve ürünü dışarıdan görmenize imkân verir. Kapağın sağlam ve emniyet bandının bozulmamış olmasına dikkat edin.",
      "Satın aldığınız üreticiye ulaşabileceğiniz bir iletişim kanalı bulunması da önemli bir ölçüttür."
    ],
    links: [{ t: "T.C. Tarım ve Orman Bakanlığı – Arıcılık Araştırma", u: "https://arastirma.tarimorman.gov.tr/aricilik/Menu/155/Urunler" }]
  },
  {
    id: "balli-yogurt-kasesi",
    type: "tarif", emoji: "🥣", image: "", date: "2026-11-05",
    title: "Ballı Polenli Yoğurt Kasesi",
    excerpt: "Süzme yoğurt, bal, mevsim meyvesi ve polenle 5 dakikada hazırlanan renkli bir kahvaltı kasesi.",
    product: "polen-240",
    sure: "Hazırlık 5 dk", porsiyon: "1 kişilik",
    content: ["Sabahları vakit bulmakta zorlananlar için en hızlı kahvaltılardan biri. Kaseyi mevsim meyvesine göre değiştirerek her gün farklı bir tat elde edebilirsiniz."],
    malzemeler: ["1 büyük kase süzme yoğurt", "1 yemek kaşığı süzme bal", "1 çay kaşığı polen", "1 muz veya yarım su bardağı mevsim meyvesi", "2 yemek kaşığı granola veya ceviz"],
    yapilis: [
      "Yoğurdu geniş bir kaseye alın.",
      "Meyveyi dilimleyip yoğurdun üzerine yerleştirin.",
      "Balı gezdirin, granola veya cevizi ekleyin.",
      "En son polen serpin ve hemen servis edin."
    ]
  },
  {
    id: "balli-granola",
    type: "tarif", emoji: "🥜", image: "", date: "2026-11-05",
    title: "Evde Ballı Granola",
    excerpt: "Yulaf, kuruyemiş ve balla fırında hazırlanan çıtır granola; kavanozda haftalarca durur.",
    product: "suzme-bal",
    sure: "Hazırlık 10 dk · Pişirme 25 dk", porsiyon: "Yaklaşık 6 porsiyon",
    content: ["Hazır granolalardaki fazla şekere alternatif arıyorsanız, balla hazırlanan bu granola kolay ve tatmin edicidir. Kuruyemişleri damak zevkinize göre değiştirebilirsiniz."],
    malzemeler: ["2 su bardağı yulaf ezmesi", "1 su bardağı karışık kuruyemiş (ceviz, fındık, badem), iri doğranmış", "3 yemek kaşığı zeytinyağı", "1/3 su bardağı süzme bal", "1 çay kaşığı tarçın", "1 tutam tuz", "Fırından çıktıktan sonra eklemek için kuru üzüm veya kuru kayısı"],
    yapilis: [
      "Fırını 150 °C'ye ısıtın.",
      "Yulaf, kuruyemiş, tarçın ve tuzu geniş bir kapta karıştırın.",
      "Zeytinyağı ve balı ayrı bir kapta ılıtıp karıştırın; kuru karışıma ekleyin ve iyice birleştirin.",
      "Yağlı kâğıt serili tepsiye ince bir tabaka halinde yayın.",
      "25 dakika pişirin; 10. dakikada bir kez karıştırın.",
      "Tamamen soğumasını bekleyin (soğudukça çıtırlaşır), kuru meyveleri ekleyin ve kapalı bir kavanozda saklayın."
    ]
  }
];

/* ---------- SIKÇA SORULAN SORULAR ---------- */
const FAQ_CATS = { urun: "Ürünler", kullanim: "Saklama ve Kullanım", siparis: "Sipariş ve Teslimat" };

const FAQ = [
  { cat: "urun", q: "Süzme bal nedir?", a: ["Süzme bal, bal peteğinden süzülerek ayrılan, içinde petek parçası bulunmayan baldır. Akışkan kıvamıdır ve kolayca kullanılır."], more: { t: "Süzme balı ve petek balı karşılaştıran yazımız", u: "yazilar.html#yazi/suzme-bal-nedir-petek-bal-farki" } },
  { cat: "urun", q: "Polen ve perga arasındaki fark nedir?", a: ["Polen, arıların çiçeklerden topladığı tanecikleridir. Perga ise arıların poleni petek gözlerine sıkıştırıp bal ve salgılarıyla karıştırarak olgunlaştırdığı üründür. Tat, doku ve görünüm bakımından farklıdırlar."], more: { t: "Perga yazımızı okuyun", u: "yazilar.html#yazi/perga-nedir-ari-ekmegi" } },
  { cat: "urun", q: "Ürünleriniz hangi ambalajda geliyor?", a: ["Balımız cam kavanozda gönderilir. Her ürünün net miktarı ürün adında ve ürün sayfasında belirtilmiştir."] },
  { cat: "urun", q: "Bal ürünlerinde içerik bilgisini nerede görebilirim?", a: ["Kavanoz etiketinde ürün türü, net miktar ve üretici bilgileri yer alır. Daha fazla bilgi için bizimle iletişime geçebilirsiniz."], more: { t: "İletişim sayfası", u: "iletisim.html" } },
  { cat: "kullanim", q: "Bal kristalleşti, bozulmuş mu?", a: ["Hayır. Kristalleşme balın doğal bir özelliğidir ve çoğunlukla bozulma anlamına gelmez. Soğuk ortamlarda daha hızlı olur. Kıvamını yeniden akıcı yapmak için kapalı kavanozu yaklaşık 40 °C'yi geçmeyen ılık su banyosunda bekletebilirsiniz."], more: { t: "Detaylı saklama rehberi", u: "yazilar.html#yazi/bal-nasil-saklanir-kristallesme" } },
  { cat: "kullanim", q: "Bal nasıl saklanmalı?", a: ["Serin, kuru ve ışıktan uzak bir yerde, kapağı sıkıca kapalı olarak saklayın. Buzdolabına koymanıza gerek yoktur."] },
  { cat: "kullanim", q: "Bebeklere bal verilebilir mi?", a: ["Bal ve arı ürünleri 1 yaşından küçük bebeklere verilmemelidir. Daha büyük çocuklar için çocuğunuzun doktoruna danışabilirsiniz."] },
  { cat: "kullanim", q: "Arı ürünlerine alerjim olabilir, polen veya pergayı kullanabilir miyim?", a: ["Polen ve perga bazı kişilerde alerjik reaksiyona neden olabilir. Alerjiniz varsa, hamileyseniz, emziriyorsanız veya düzenli ilaç kullanıyorsanız tüketmeden önce doktorunuza danışın. İlk kez tüketecekseniz çok küçük miktarla başlayın."] },
  { cat: "kullanim", q: "Balı sıcak içeceklere ekleyebilir miyim?", a: ["Evet; ancak çok sıcak içeceklerde balın aroması azalabilir. Bal için içeceğin biraz ılımasını beklemeniz önerilir."] },
  { cat: "siparis", q: "Nasıl sipariş verebilirim?", a: ["Ürünleri sepete ekleyip sepet penceresinden siparişinizi WhatsApp veya e-posta ile iletebilir ya da ürün sayfasındaki \"Mağazada Aç\" bağlantısıyla kayicanbal.com üzerinden sipariş verebilirsiniz."], more: { t: "Ürünlerimiz", u: "ikinci.html" } },
  { cat: "siparis", q: "Teslimat ve ödeme bilgilerini nereden öğrenebilirim?", a: ["Kargo, teslimat ve ödeme seçenekleri sipariş sırasında ve mağaza sayfamızda belirtilir. Sorularınız için bizimle iletişime geçebilirsiniz."], more: { t: "Bize yazın", u: "iletisim.html" } },
  { cat: "siparis", q: "Siparişim hakkında nereden bilgi alabilirim?", a: ["Sipariş verdiğiniz kanal üzerinden (WhatsApp, e-posta veya mağaza) bize ulaşabilirsiniz. İletişim sayfamızdaki formu da kullanabilirsiniz."], more: { t: "İletişim", u: "iletisim.html#siparis" } }
];
