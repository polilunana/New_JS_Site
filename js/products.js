var products = [
    {
        id: 1,
        name: "Oversize Basic Tee",
        category: "Футболки",
        price: 649,
        emoji: "👕",
        desc: "Базова oversize футболка з м’якої бавовни для щоденного комфорту та мінімалістичного стилю"
    },
    {
        id: 2,
        name: "Wide Fit Cargo",
        category: "Штани",
        price: 1399,
        emoji: "👖",
        desc: "Стильні широкі карго штани з функціональними кишенями та комфортною посадкою"
    },
    {
        id: 3,
        name: "Heavy Oversize Hoodie",
        category: "Худі та світшоти",
        price: 1699,
        emoji: "🧥",
        desc: "Тепле oversize худі з щільної тканини та м’яким внутрішнім шаром для максимального комфорту"
    },
    {
        id: 4,
        name: "Minimal Black Shirt",
        category: "Сорочки",
        price: 1099,
        emoji: "👔",
        desc: "Мінімалістична чорна сорочка прямого крою для casual та streetwear образів"
    },
    {
        id: 5,
        name: "Urban Relax Shorts",
        category: "Шорти",
        price: 799,
        emoji: "🩳",
        desc: "Легкі та комфортні шорти для літа та щоденного носіння"
    },
    {
        id: 6,
        name: "Elvaré Signature Cap",
        category: "Аксесуари",
        price: 499,
        emoji: "🧢",
        desc: "Класична кепка з мінімалістичним логотипом Elvaré та регульованою посадкою"
    },
    {
        id: 7,
        name: "Shadow Oversize Longsleeve",
        category: "Oversize Collection",
        price: 899,
        emoji: "🧦",
        desc: "Стильний oversize лонгслів із м’якої бавовни для повсякденного minimal look"
    },
    {
        id: 8,
        name: "Washed Zip Hoodie",
        category: "Streetwear Collection",
        price: 1899,
        emoji: "👟",
        desc: "Oversize худі на блискавці з washed ефектом у сучасному streetwear стилі"
    },
]

function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) return products[i];
    }

    return null;
}