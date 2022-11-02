// SIMULACION DE BACKEND


const itemsDataBase = [{
    id: 1,
    title: "SX JazzBass",
    price: 649,
    stock: 54,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/25121-thickbox_default/bd1-3ts.jpg",
    description: "Bajo eléctrico, modelo JazzBass",
},

{
    id: 3,
    title: "SX Precission",
    price: 649,
    stock: 54,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/26051-thickbox_default/bd2-eb.jpg",
    description: "Bajo eléctrico, modelo Precission",
},

{
    id: 2,
    title: "SX Stratocaster",
    description: "Guitarra eléctrica, modelo Stratocaster",
    price: 899,
    stock: 34,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/25150-thickbox_default/sst62-car.jpg",
},
{
    id: 4,
    title: "SX Les Paul",
    description: "Guitarra eléctrica, modelo Les Paul",
    price: 280,
    stock: 123,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/25881-thickbox_default/ee3s.jpg",
},
{
    id: 5,
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    stock: 32,
    category: "cuerdas",
    thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
},
{
    id: 6,
    title: "MacBook Pro",
    description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    stock: 83,
    category: "percusion",
    thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
},
{
    id: 7,
    title: "Samsung Galaxy Book",
    description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    stock: 50,
    category: "percusion",
    thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
},
{
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    stock: 68,
    category: "percusion",
    thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
},
{
    id: 9,
    title: "Infinix INBOOK",
    description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    stock: 96,
    category: "percusion",
    thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
},
{
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    stock: 89,
    category: "percusion",
    thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
},
{
    id: 11,
    title: "perfume Oil",
    description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    stock: 65,
    category: "teclados",
    thumbnail: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
},
{
    id: 12,
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    stock: 52,
    category: "teclados",
    thumbnail: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
},
{
    id: 13,
    title: "Fog Scent Xpressio Perfume",
    description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    stock: 61,
    category: "teclados",
    thumbnail: "https://dummyjson.com/image/i/products/13/thumbnail.webp",
},
{
    id: 14,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    stock: 114,
    category: "teclados",
    thumbnail: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
},
{
    id: 15,
    title: "Eau De Perfume Spray",
    description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    stock: 105,
    category: "teclados",
    thumbnail: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
},
{
    id: 16,
    title: "Hyaluronic Acid Serum",
    description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    stock: 110,
    category: "amplificacion",
    thumbnail: "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
},
{
    id: 17,
    title: "Tree Oil 30ml",
    description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    stock: 78,
    category: "amplificacion",
    thumbnail: "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
},
{
    id: 18,
    title: "Oil Free Moisturizer 100ml",
    description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
    price: 40,
    stock: 88,
    category: "amplificacion",
    thumbnail: "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
},
{
    id: 19,
    title: "Skin Beauty Serum.",
    description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
    price: 46,
    stock: 54,
    category: "amplificacion",
    thumbnail: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
},
{
    id: 20,
    title: "Freckle Treatment Cream- 15gm",
    description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
    price: 70,
    stock: 140,
    category: "amplificacion",
    thumbnail: "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
},
{
    id: 21,
    title: "- Daal Masoor 500 grams",
    description: "Fine quality Branded Product Keep in a cool and dry place",
    price: 20,
    stock: 133,
    category: "efectos",
    thumbnail: "https://dummyjson.com/image/i/products/21/thumbnail.png",
},
{
    id: 22,
    title: "Elbow Macaroni - 400 gm",
    description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
    price: 14,
    stock: 146,
    category: "efectos",
    thumbnail: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
},
{
    id: 23,
    title: "Orange Essence Food Flavou",
    description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
    price: 14,
    stock: 26,
    category: "efectos",
    thumbnail: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
},
{
    id: 24,
    title: "cereals muesli fruit nuts",
    description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
    price: 46,
    stock: 113,
    category: "efectos",
    thumbnail: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
},
{
    id: 25,
    title: "Gulab Powder 50 Gram",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
    price: 70,
    stock: 47,
    category: "efectos",
    thumbnail: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
},
{
    id: 26,
    title: "Plant Hanger For Home",
    description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
    price: 41,
    stock: 131,
    category: "accesorios",
    thumbnail: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
},
{
    id: 27,
    title: "Flying Wooden Bird",
    description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
    price: 51,
    stock: 17,
    category: "accesorios",
    thumbnail: "https://dummyjson.com/image/i/products/27/thumbnail.webp",
},
{
    id: 28,
    title: "3D Embellishment Art Lamp",
    description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
    price: 20,
    stock: 54,
    category: "accesorios",
    thumbnail: "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
},
{
    id: 29,
    title: "Handcraft Chinese style",
    description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    price: 60,
    stock: 7,
    category: "accesorios",
    thumbnail: "https://dummyjson.com/image/i/products/29/thumbnail.webp",
},
{
    id: 30,
    title: "Key Holder",
    description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    price: 30,
    stock: 54,
    category: "accesorios",
    thumbnail: "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
},
];

export default function getItemsFromApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsDataBase);
        }, 500);
    });
    }



    export function getSingleItemFromApi(idParams) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let itemRequested = itemsDataBase.find(
                    (item) => item.id === Number(idParams)
                );
                if (itemRequested) {
                    resolve(itemRequested);
                }
                else{
                    reject (new Error ("El item no existe"))
                };
                
            }, 500);
        });
        }

        export  function getItemsFromApiByCategory(categoryid) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                        let itemsRequested = itemsDataBase.filter(item => item.category === categoryid)
                    resolve(itemsRequested);
                }, 500);
            });
            }