/* =========================================================
   Kayıcan Bal – İngilizce içerik (English content)
   js/data.js içindeki ürün / yazı / S.S.S. kayıtlarının İngilizce karşılıkları.
   Eşleşme, kayıtların "id" değerine (S.S.S. için sıraya) göre yapılır.
   Yeni bir ürün veya yazı eklediğinizde buraya aynı id ile İngilizcesini ekleyin;
   eklemezseniz o kayıt İngilizce modda Türkçe görünür.
   ========================================================= */

const PRODUCT_NOTE_EN = "Honey and bee products should not be given to infants under 1 year old. People who are allergic to bee products, pregnant or breastfeeding women, and those who take regular medication should consult their doctor before consuming them.";

const PRODUCTS_EN = {
  "organik-suzme-bal-850": {
    name: "Certified Organic Strained Honey 850 g",
    short: "Organic flower honey in an 850 g glass jar. A staple for breakfast and desserts.",
    desc: [
      "Organic flower honey with a net weight of 850 grams, presented in a glass jar. The jar label states the Refahiye region and organic flower honey.",
      "Strained honey is honey separated from the comb by straining and has a fluid consistency. It can be used at breakfast, in desserts, with yogurt and in hot drinks."
    ],
    usage: ["At breakfast with bread, butter and cheese", "In yogurt, oat and granola bowls", "In desserts such as crepes, baked apples and cakes", "In warm (not hot) milk or herbal tea"],
    storage: "Store in a cool, dry place away from light, with the lid closed. It does not need to be refrigerated. It is natural for honey to crystallize over time."
  },
  "suzme-bal": {
    name: "Strained Honey",
    short: "Strained honey in an 850 g glass jar. For everyday use.",
    desc: [
      "Strained honey with a net weight of 850 grams. Shipped in a glass jar.",
      "Strained honey contains no comb pieces and is easy to scoop with a spoon. It goes with every moment at the table."
    ],
    usage: ["On the breakfast table", "On cheese and fruit platters", "In desserts and baked goods", "On top of yogurt or dairy products"],
    storage: "Store in a cool, dry place away from light, with the lid closed. If it crystallizes, you can keep the closed jar in a warm water bath (not above about 40 °C)."
  },
  "polen-240": {
    name: "Bee Pollen 240 g",
    short: "240 g of bee pollen. For yogurt, muesli and smoothie bowls.",
    desc: [
      "Bee pollen with a net weight of 240 grams. It consists of pollen grains that bees collect from flowers; its composition varies with the floral source.",
      "Its colorful grains add both looks and texture to breakfast bowls."
    ],
    usage: ["Sprinkled over yogurt or muesli", "Blended into smoothies", "Mixed with honey and spread on bread", "Starting with small amounts"],
    storage: "Store in a cool, dry place away from light, with the lid closed. Do not let it absorb moisture."
  },
  "perga-200": {
    name: "Perga (Bee Bread) 200 g",
    short: "200 g of perga (bee bread). To enjoy with honey and yogurt.",
    desc: [
      "Perga with a net weight of 200 grams. Perga is a bee product that bees make by packing pollen with honey and secretions into the honeycomb cells, where it matures; it is also known as \"bee bread\".",
      "With its distinctive, slightly tangy taste, it is suitable to eat together with honey or yogurt."
    ],
    usage: ["Mixed with honey and eaten by the spoonful", "In yogurt and breakfast bowls", "Starting with small amounts"],
    storage: "Store in a cool, dry place away from light, with the lid closed."
  }
};

const POSTS_EN = {
  "balli-muzlu-krep-rulosu": {
    title: "Honey Banana Crepe Rolls",
    excerpt: "A quick honey and banana crepe roll recipe made with strained honey, banana, thin crepes, tahini or labneh and walnuts.",
    sure: "Prep 10 min · Cook 15 min", porsiyon: "Serves 2",
    content: [
      "These rolls work for breakfast as well as for tea time, and they need only a handful of ingredients. The slightly bitter taste of tahini, the softness of banana and the sweetness of honey balance each other beautifully.",
      "You can make the crepes at home or use ready-made ones. What matters is that the crepe is thin and flexible so that it does not tear when rolled."
    ],
    malzemeler: [
      "4 thin crepes (ready-made or homemade)", "2 ripe bananas", "2 tablespoons strained honey + a little more for the top",
      "2 tablespoons tahini or labneh", "1 handful of coarsely chopped walnuts", "1 pinch of cinnamon (optional)",
      "For the crepes: 1 cup flour, 1 egg, 1.5 cups milk, 1 pinch of salt"
    ],
    yapilis: [
      "For the crepes, whisk the flour, egg, milk and salt until it becomes a smooth, runny batter; let it rest for 10 minutes.",
      "Cook thin crepes on both sides in a lightly oiled, hot pan.",
      "Spread a thin layer of tahini or labneh over each crepe.",
      "Cut the bananas lengthwise and line them up along one edge of the crepe; sprinkle with walnuts and cinnamon.",
      "Drizzle with honey, roll the crepe up tightly and cut in half. Add another spoonful of honey when serving."
    ]
  },
  "bali-peynir-ve-meyveyle-eslestirme-rehberi": {
    title: "A Guide to Pairing Honey with Cheese and Fruit",
    excerpt: "A simple guide to pairing honey with cheese, fruit, bread and nuts in a balanced way for breakfast and party tables.",
    content: [
      "Honey is not just something to spread on bread; paired well, it balances salty, sour and bitter flavors. Here are pairings you can easily try at your own table.",
      { h: "With cheese" },
      "Fresh and salty cheeses such as white cheese, labneh, curd cheese and goat cheese love honey. With aged and hard cheeses, a few drops of honey are enough; more can overpower the cheese's aroma.",
      { h: "With fruit" },
      "Figs, pears, apples, grapes and pomegranate make a classic match with honey. Slicing the fruit and placing it beside the cheese, with the honey jar in the middle, makes the plate both elegant and practical.",
      { h: "With bread and nuts" },
      "Toasted bread, butter and honey is the unchanging trio of breakfast. Walnuts, hazelnuts and almonds add crunch and depth to the plate.",
      { h: "Tips for a party table" },
      { ul: ["Take the cheeses out of the fridge half an hour before serving.", "Serve the honey in a small jar or bowl with a honey spoon.", "Place sweet, salty and crunchy elements side by side on the plate.", "Two or three cheeses and two or three fruits are enough for one platter."] }
    ]
  },
  "balli-yulafli-firin-elma": {
    title: "Baked Apples with Honey and Oats",
    excerpt: "A simple baked apple recipe made with strained honey, oats, walnuts and cinnamon; for breakfast, snacks or dessert.",
    sure: "Prep 10 min · Cook 30 min", porsiyon: "Serves 4",
    content: [
      "The oat filling stuffed into apples softened in the oven fills the house with the scent of cinnamon. If you want a dessert without added sugar, the natural sweetness of honey does the job here."
    ],
    malzemeler: [
      "4 medium apples (firm, sweet-tart ones work well)", "3 tablespoons rolled oats", "2 tablespoons coarsely chopped walnuts",
      "3 tablespoons strained honey", "1 teaspoon cinnamon", "1 tablespoon butter (optional)", "Strained yogurt for serving"
    ],
    yapilis: [
      "Preheat the oven to 180 °C (350 °F). Cut the top off each apple like a lid and hollow out the core with a spoon; do not pierce the bottom.",
      "Mix the oats, walnuts, cinnamon and half of the honey; fill the apples with the mixture.",
      "Add the remaining honey and, if you like, small pieces of butter on top; put the lids back on.",
      "Place the apples in a baking dish, add half a cup of water to the bottom and bake for 25–30 minutes.",
      "Serve warm with a spoonful of strained yogurt."
    ]
  },
  "suzme-bal-nedir-petek-bal-farki": {
    title: "What Is Strained Honey? How It Differs from Comb Honey",
    excerpt: "What is the difference between strained honey and comb honey, and which suits which table? A short, clear guide.",
    content: [
      "Two terms often come up in shops and stores: strained honey and comb honey. Both are products of the honey bee; the difference lies in how they are presented.",
      { h: "Strained honey" },
      "Strained honey is honey separated from the honeycomb by straining. It contains no comb pieces, has a fluid consistency and is easy to take from the jar. It is practical for spreading on bread, adding to yogurt and using in desserts.",
      { h: "Comb honey" },
      "Comb honey is served inside the comb that the bees built and sealed, together with its wax. Comb wax is edible; after chewing, any leftover wax can be spat out. It is preferred on cheese plates and for special presentations.",
      { h: "Which should you choose?" },
      { ul: ["For everyday breakfast and kitchen use: strained honey.", "For presentation and gifts: comb honey.", "For easy use in homes with children: strained honey."] },
      "Whichever you choose, the most reliable way is to check the label and to know the producer. We explained what to look for on a label in our article \"What to Look for on a Honey Label\"."
    ],
    links: [{ t: "Honey – Wikipedia", u: "https://en.wikipedia.org/wiki/Honey" }]
  },
  "bal-nasil-saklanir-kristallesme": {
    title: "How to Store Honey: Is Crystallized Honey Spoiled?",
    excerpt: "How to store honey properly, what crystallization means, and the safe way to bring crystallized honey back to its original consistency.",
    content: [
      "It is common for honey in the jar to harden or become grainy over time. Many people think this means the honey has gone bad; in fact, crystallization is usually a natural process.",
      { h: "Why does honey crystallize?" },
      "Honey is a dense solution of sugars, mainly glucose and fructose. Honeys with a high glucose ratio crystallize over time. Cold environments speed up the process. It changes only the consistency of the honey, not its quality.",
      { h: "Proper storage" },
      { ul: ["Store in a cool, dry place away from light.", "Close the lid tightly; honey can absorb moisture from the air.", "You do not need to refrigerate it; it crystallizes faster in the cold.", "Put only a dry spoon into the jar."] },
      { h: "Making crystallized honey runny again" },
      "Put the closed jar in a bowl of warm water and wait. The water temperature should not exceed about 40 °C (104 °F). Boiling water or a microwave can harm the aroma and content of the honey. Stir occasionally as the honey softens.",
      "If you notice a moldy smell, foaming or a sour odor in the honey, do not eat it."
    ],
    links: [{ t: "Ministry of Agriculture and Forestry (Türkiye)", u: "https://www.tarimorman.gov.tr" }]
  },
  "polen-nedir-nasil-tuketilir": {
    title: "What Is Pollen and How Is It Eaten?",
    excerpt: "How is bee pollen obtained, how is it used in the kitchen, and what should you keep in mind when eating it?",
    content: [
      "Bees carry the pollen grains they collect from flowers to the hive in the baskets on their hind legs. Beekeepers collect some of these grains with pollen traps placed at the hive entrance.",
      { h: "What pollen is made of" },
      "Pollen is a bee product containing carbohydrates, protein and various other components. Its color and composition vary with the flowers the bees visited, so every batch can look a little different.",
      { h: "In the kitchen" },
      { ul: ["Sprinkle over yogurt or muesli.", "Add to smoothies and fruit bowls.", "Mix with honey and spread on bread.", "Use to decorate desserts."] },
      { h: "What to keep in mind" },
      "Pollen can cause an allergic reaction in some people. If you are trying it for the first time, start with a very small amount. If you are allergic to pollen or bee products, pregnant, breastfeeding or taking regular medication, be sure to consult your doctor. It should not be given to children under 1 year old.",
      "Store pollen in a closed container in a cool, dry place away from light."
    ]
  },
  "perga-nedir-ari-ekmegi": {
    title: "What Is Perga (Bee Bread)?",
    excerpt: "What sets perga apart from pollen? What you need to know about this product that bees mature inside the honeycomb cells.",
    content: [
      "Perga forms when bees pack the pollen they collect into honeycomb cells, mix it with honey and secretions and seal it. In this closed environment the pollen matures over time and takes on a structure of its own. That is why it is called \"bee bread\".",
      { h: "How it differs from pollen" },
      "Pollen consists of the grains that bees collect from flowers, taken from the hive as they are. Perga is the product that bees process and store inside the hive. They differ in appearance, texture and taste.",
      { h: "How is it eaten?" },
      { ul: ["Mixed with a little honey and eaten by the spoonful.", "In yogurt and breakfast bowls.", "Starting with small amounts."] },
      "Like pollen, perga is not suitable for people who are allergic to bee products. In situations such as pregnancy, breastfeeding or regular medication use, consult your doctor before eating it. Store in a cool, dry place with the lid closed."
    ]
  },
  "bal-alirken-etikette-nelere-bakilir": {
    title: "What to Look for on a Honey Label",
    excerpt: "The label on the jar tells you a lot: producer, batch number, dates and honey type. What to check when shopping.",
    content: [
      "When buying honey, appearance or consistency alone is not enough to decide. The best sign of a trustworthy product is a legible and complete label.",
      { h: "What to look for on the label" },
      { ul: ["The name and type of the product (flower honey, honeydew honey, etc.).", "The name and address of the producer or packer.", "Net weight.", "Batch or lot number; it allows traceability.", "Production and expiry date, or the recommended consumption date.", "Origin or region information.", "If it says organic, the certificate code and control body information."] },
      { h: "Why does traceability matter?" },
      "Thanks to the batch number, you can trace when and how a product was made. Knowing the producer and being able to ask questions also builds trust.",
      { h: "Packaging" },
      "A glass jar does not react with honey and lets you see the product from the outside. Make sure the lid is intact and the safety seal is unbroken.",
      "Having a way to reach the producer you buy from is also an important criterion."
    ],
    links: [{ t: "Ministry of Agriculture and Forestry – Beekeeping Research", u: "https://arastirma.tarimorman.gov.tr/aricilik/Menu/155/Urunler" }]
  },
  "balli-yogurt-kasesi": {
    title: "Honey and Pollen Yogurt Bowl",
    excerpt: "A colorful breakfast bowl made in 5 minutes with strained yogurt, honey, seasonal fruit and pollen.",
    sure: "Prep 5 min", porsiyon: "Serves 1",
    content: ["One of the quickest breakfasts for mornings when time is short. Change the fruit with the season to get a different flavor every day."],
    malzemeler: ["1 large bowl of strained yogurt", "1 tablespoon strained honey", "1 teaspoon pollen", "1 banana or half a cup of seasonal fruit", "2 tablespoons granola or walnuts"],
    yapilis: [
      "Put the yogurt in a wide bowl.",
      "Slice the fruit and arrange it on top of the yogurt.",
      "Drizzle with honey and add the granola or walnuts.",
      "Sprinkle the pollen on last and serve immediately."
    ]
  },
  "balli-granola": {
    title: "Homemade Honey Granola",
    excerpt: "Crunchy granola baked with oats, nuts and honey; it keeps for weeks in a jar.",
    sure: "Prep 10 min · Cook 25 min", porsiyon: "About 6 servings",
    content: ["If you are looking for an alternative to the extra sugar in store-bought granola, this honey granola is easy and satisfying. You can change the nuts to your liking."],
    malzemeler: ["2 cups rolled oats", "1 cup mixed nuts (walnuts, hazelnuts, almonds), coarsely chopped", "3 tablespoons olive oil", "1/3 cup strained honey", "1 teaspoon cinnamon", "1 pinch of salt", "Raisins or dried apricots to add after baking"],
    yapilis: [
      "Preheat the oven to 150 °C (300 °F).",
      "Mix the oats, nuts, cinnamon and salt in a large bowl.",
      "Warm the olive oil and honey together in a separate bowl and stir; add to the dry mixture and combine well.",
      "Spread in a thin layer on a tray lined with parchment paper.",
      "Bake for 25 minutes; stir once at the 10th minute.",
      "Let it cool completely (it crisps as it cools), add the dried fruit and store in a closed jar."
    ]
  }
};

/* S.S.S. – data.js'teki FAQ dizisiyle aynı sırada */
const FAQ_EN = [
  { q: "What is strained honey?", a: ["Strained honey is honey separated from the honeycomb by straining; it contains no comb pieces. It has a fluid consistency and is easy to use."], more: { t: "Our article comparing strained and comb honey" } },
  { q: "What is the difference between pollen and perga?", a: ["Pollen consists of the grains bees collect from flowers. Perga is the product that bees make by packing the pollen into honeycomb cells and maturing it with honey and secretions. They differ in taste, texture and appearance."], more: { t: "Read our perga article" } },
  { q: "What packaging do your products come in?", a: ["Our honey is shipped in a glass jar. The net weight of each product is stated in the product name and on the product page."] },
  { q: "Where can I see the product information for honey?", a: ["The jar label carries the product type, net weight and producer details. For more information, you can get in touch with us."], more: { t: "Contact page" } },
  { q: "My honey crystallized. Has it gone bad?", a: ["No. Crystallization is a natural property of honey and usually does not mean it has spoiled. It happens faster in cold environments. To make it runny again, you can keep the closed jar in a warm water bath that does not exceed about 40 °C."], more: { t: "Detailed storage guide" } },
  { q: "How should honey be stored?", a: ["Store it in a cool, dry place away from light, with the lid tightly closed. You do not need to refrigerate it."] },
  { q: "Can babies eat honey?", a: ["Honey and bee products should not be given to infants under 1 year old. For older children, you can consult your child's doctor."] },
  { q: "I may be allergic to bee products. Can I use pollen or perga?", a: ["Pollen and perga can cause an allergic reaction in some people. If you have an allergy, are pregnant, are breastfeeding or take regular medication, consult your doctor before eating them. If you are trying them for the first time, start with a very small amount."] },
  { q: "Can I add honey to hot drinks?", a: ["Yes; however, the aroma of honey can fade in very hot drinks. It is best to wait until the drink cools slightly before adding honey."] },
  { q: "How can I place an order?", a: ["You can add products to your cart and send your order by WhatsApp or e-mail from the cart window, or order on kayicanbal.com through the \"Open in Store\" link on a product page."], more: { t: "Our products" } },
  { q: "Where can I find delivery and payment information?", a: ["Shipping, delivery and payment options are stated during ordering and on our store page. You can contact us with any questions."], more: { t: "Write to us" } },
  { q: "Where can I get information about my order?", a: ["You can reach us through the channel you ordered from (WhatsApp, e-mail or the store). You can also use the form on our contact page."], more: { t: "Contact" } }
];
