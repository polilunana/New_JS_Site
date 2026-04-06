var products = [
    {
        id: 1,
        name: "tovar 1",
        category: "category 1",
        price: 1000,
        emoji: "👚",
        desc: "tovar description 1"
    },
    {
        id: 2,
        name: "tovar 2",
        category: "category 2",
        price: 1000,
        emoji: "👗",
        desc: "tovar description 2"
    },
    {
        id: 3,
        name: "tovar 3",
        category: "category 3",
        price: 1000,
        emoji: "🧦",
        desc: "tovar description 3"
    },
    {
        id: 4,
        name: "tovar 4",
        category: "category 4",
        price: 1000,
        emoji: "👠",
        desc: "tovar description 4"
    },
    {
        id: 5,
        name: "tovar 5",
        category: "category 5",
        price: 1000,
        emoji: "🧥",
        desc: "tovar description 5"
    },
    {
        id: 6,
        name: "tovar 6",
        category: "category 6",
        price: 1000,
        emoji: "🧤",
        desc: "tovar description 6"
    },
    {
        id: 7,
        name: "tovar 7",
        category: "category 7",
        price: 1000,
        emoji: "👖",
        desc: "tovar description 7"
    },
    {
        id: 8,
        name: "tovar 8",
        category: "category 8",
        price: 1000,
        emoji: "🧣",
        desc: "tovar description 8"
    },
]

function getProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) return products[i];
    }

    return null;
}