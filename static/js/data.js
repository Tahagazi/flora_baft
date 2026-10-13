const products = [
    {
        id: 1,
        title: "دسته گل آفتابگردان",
        description: "آفتابگردان‌های درخشان با برگ‌های سبز، بافته‌شده با نخ پنبه‌ای نرم.",
        price: 850000,
        category: "دسته گل",
        colors: [{ name: "زرد", hex: "#F2B632" }, { name: "نارنجی", hex: "#EE8A3C" }],
        images: ["static/images/products/1_1.jpg", "static/images/products/1_2.jpg", "static/images/products/1_3.jpg"]
    },
    {
        id: 2,
        title: "تک شاخه لاله",
        description: "یک شاخه لاله ظریف با ساقه مفتولی و برگ‌های بافته.",
        price: 650000,
        category: "تک گل",
        colors: [{ name: "صورتی", hex: "#E7A1B8" }, { name: "قرمز", hex: "#C8283C" }, { name: "زرد", hex: "#F2B632" }, { name: "سفید", hex: "#FAF5F0" }],
        images: ["static/images/products/2_1.jpg", "static/images/products/2_2.jpg", "static/images/products/2_3.jpg"]
    },
    {
        id: 3,
        title: "دسته گل بابونه",
        description: "دسته‌ای از بابونه‌های سفید و شاد، مناسب هدیه‌های ساده و صمیمی.",
        price: 780000,
        category: "دسته گل",
        colors: [{ name: "سفید", hex: "#FAF5F0" }, { name: "زرد", hex: "#F2B632" }],
        images: ["static/images/products/3_1.jpg", "static/images/products/3_2.jpg", "static/images/products/3_3.jpg"]
    },
    {
        id: 4,
        title: "باکس گل رز",
        description: "رزهای پرپر و پرحجم در جعبه هدیه‌ی شیک.",
        price: 1200000,
        category: "باکس گل",
        colors: [{ name: "قرمز", hex: "#C8283C" }, { name: "صورتی", hex: "#E7A1B8" }, { name: "سفید", hex: "#FAF5F0" }],
        images: ["static/images/products/4_1.jpg", "static/images/products/4_2.jpg", "static/images/products/4_3.jpg"]
    },
    {
        id: 5,
        title: "دسته گل اسطوخودوس",
        description: "اسطوخودوس‌های بنفش با حس آرامش و حال‌وهوای بهاری.",
        price: 950000,
        category: "دسته گل",
        colors: [{ name: "بنفش", hex: "#9B6BC4" }, { name: "آبی", hex: "#7D9BD6" }],
        images: ["static/images/products/5_1.jpg", "static/images/products/5_2.jpg", "static/images/products/5_3.jpg"]
    },
    {
        id: 6,
        title: "باکس گل فانتزی",
        description: "ترکیب رنگارنگ گل‌های کوچک در باکس دایره‌ای.",
        price: 1050000,
        category: "باکس گل",
        colors: [{ name: "صورتی", hex: "#E7A1B8" }, { name: "بنفش", hex: "#9B6BC4" }, { name: "زرد", hex: "#F2B632" }, { name: "سفید", hex: "#FAF5F0" }],
        images: ["static/images/products/6_1.jpg", "static/images/products/6_2.jpg", "static/images/products/6_3.jpg"]
    },
    {
        id: 7,
        title: "تک شاخه رز",
        description: "رز بافتنی با گلبرگ‌های لایه‌لایه، ماندگار و بی‌نیاز از آب.",
        price: 520000,
        category: "تک گل",
        colors: [{ name: "قرمز", hex: "#C8283C" }, { name: "صورتی", hex: "#E7A1B8" }, { name: "سفید", hex: "#FAF5F0" }, { name: "زرد", hex: "#F2B632" }],
        images: ["static/images/products/1_1.jpg", "static/images/products/1_2.jpg", "static/images/products/1_3.jpg"]
    },
    {
        id: 8,
        title: "تک گل آفتابگردان",
        description: "یک آفتابگردان بزرگ برای گوشه‌ای روشن از خانه.",
        price: 480000,
        category: "تک گل",
        colors: [{ name: "زرد", hex: "#F2B632" }],
        images: ["static/images/products/2_1.jpg", "static/images/products/2_2.jpg", "static/images/products/2_3.jpg"]
    },
    {
        id: 9,
        title: "دسته گل لاله رنگی",
        description: "شش شاخه لاله در رنگ‌های هماهنگ با کاغذ کادوی دستی.",
        price: 990000,
        category: "دسته گل",
        colors: [{ name: "صورتی", hex: "#E7A1B8" }, { name: "نارنجی", hex: "#EE8A3C" }, { name: "بنفش", hex: "#9B6BC4" }, { name: "سفید", hex: "#FAF5F0" }],
        images: ["static/images/products/3_1.jpg", "static/images/products/3_2.jpg", "static/images/products/3_3.jpg"]
    },
    {
        id: 10,
        title: "باکس گل بنفشه",
        description: "بنفشه‌های ریز در باکس کوچک، هدیه‌ای دوست‌داشتنی.",
        price: 870000,
        category: "باکس گل",
        colors: [{ name: "بنفش", hex: "#9B6BC4" }, { name: "آبی", hex: "#7D9BD6" }, { name: "سفید", hex: "#FAF5F0" }],
        images: ["static/images/products/4_1.jpg", "static/images/products/4_2.jpg", "static/images/products/4_3.jpg"]
    },
    {
        id: 11,
        title: "دسته گل رز صورتی",
        description: "دسته رز صورتی با روبان ساتن، مناسب سالگرد و ولنتاین.",
        price: 1150000,
        category: "دسته گل",
        colors: [{ name: "صورتی", hex: "#E7A1B8" }, { name: "سفید", hex: "#FAF5F0" }],
        images: ["static/images/products/5_1.jpg", "static/images/products/5_2.jpg", "static/images/products/5_3.jpg"]
    },
    {
        id: 12,
        title: "تک شاخه نرگس",
        description: "نرگس سفید با مرکز زرد، ساده و دلنشین.",
        price: 450000,
        category: "تک گل",
        colors: [{ name: "سفید", hex: "#FAF5F0" }, { name: "زرد", hex: "#F2B632" }],
        images: ["static/images/products/6_1.jpg", "static/images/products/6_2.jpg", "static/images/products/6_3.jpg"]
    },
    {
        id: 13,
        title: "باکس گل مینی رز",
        description: "مینی رزهای فشرده در باکس مربعی با درب شفاف.",
        price: 1350000,
        category: "باکس گل",
        colors: [{ name: "قرمز", hex: "#C8283C" }, { name: "صورتی", hex: "#E7A1B8" }, { name: "نارنجی", hex: "#EE8A3C" }],
        images: ["static/images/products/1_1.jpg", "static/images/products/1_2.jpg", "static/images/products/1_3.jpg"]
    },
    {
        id: 14,
        title: "دسته گل بهاری",
        description: "ترکیبی از گل‌های فصل بهار در یک دسته‌ی پرانرژی.",
        price: 1080000,
        category: "دسته گل",
        colors: [{ name: "سبز", hex: "#7FA877" }, { name: "صورتی", hex: "#E7A1B8" }, { name: "زرد", hex: "#F2B632" }, { name: "آبی", hex: "#7D9BD6" }],
        images: ["static/images/products/2_1.jpg", "static/images/products/2_2.jpg", "static/images/products/2_3.jpg"]
    }
]

const categories = ["تک گل", "دسته گل", "باکس گل"]

const colors = [
    { name: "صورتی", hex: "#E7A1B8" },
    { name: "قرمز", hex: "#C8283C" },
    { name: "زرد", hex: "#F2B632" },
    { name: "بنفش", hex: "#9B6BC4" },
    { name: "آبی", hex: "#7D9BD6" },
    { name: "سفید", hex: "#FAF5F0" },
    { name: "نارنجی", hex: "#EE8A3C" },
    { name: "سبز", hex: "#7FA877" }
]
