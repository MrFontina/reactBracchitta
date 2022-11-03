// SIMULACION DE BACKEND


const itemsDataBase = [{
    id: 1,
    title: "SX JazzBass",
    price: 649,
    stock: 54,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/25121-thickbox_default/bd1-3ts.jpg",
    description: "Bajo eléctrico | Modelo JazzBass",
},

{
    id: 3,
    title: "SX Precission",
    price: 649,
    stock: 54,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/26051-thickbox_default/bd2-eb.jpg",
    description: "Bajo eléctrico | Modelo Precission",
},

{
    id: 2,
    title: "SX Stratocaster",
    description: "Guitarra eléctrica | Modelo Stratocaster",
    price: 899,
    stock: 34,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/25150-thickbox_default/sst62-car.jpg",
},
{
    id: 4,
    title: "SX Les Paul",
    description: "Guitarra eléctrica | Modelo Les Paul",
    price: 280,
    stock: 123,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/25108-thickbox_default/ee3-bk.jpg",
},
{
    id: 5,
    title: "Texas Acústica",
    description: "Guitarra acústica | marca Texas",
    price: 499,
    stock: 32,
    category: "cuerdas",
    thumbnail: "https://todomusica.com.ar/14607-thickbox_default/cg20-17a-nat-tex-cg20-17a-nat-tex.jpg",
},
{
    id: 6,
    title: "Batería Pearl",
    description: "Batería acústica | Maple | Amarillo",
    price: 1749,
    stock: 83,
    category: "baterias",
    thumbnail: "https://todomusica.com.ar/13609-thickbox_default/dmp905p-c-228-dmp905p-c-228.jpg",
},
{
    id: 7,
    title: "Mapex Prodigy Standard",
    description: "Batería acústica | Prodigy Standard | Negro",
    price: 1499,
    stock: 50,
    category: "baterias",
    thumbnail: "https://todomusica.com.ar/13189-thickbox_default/exl705np-c-249-exl705np-c-249.jpg",
},
{
    id: 8,
    title: "Mapex SATURN 30",
    description: "Batería acústica | SATURN 30 Aniversario | Limit Series | Maple",
    price: 1499,
    stock: 68,
    category: "baterias",
    thumbnail: "https://todomusica.com.ar/19341-thickbox_default/sesv628xcme-sesv628xcme.jpg",
},
{
    id: 9,
    title: "Pearl, Decade Maple Series",
    description: "Batería acústica | Decade Maple Series",
    price: 1099,
    stock: 96,
    category: "baterias",
    thumbnail: "https://todomusica.com.ar/13099-thickbox_default/dmp943xp-c-261-dmp943xp-c-261.jpg",
},
{
    id: 10,
    title: "Export Laqued Series",
    description: "Batería acústica | 5 cuerpos | sin fierros",
    price: 1099,
    stock: 89,
    category: "baterias",
    thumbnail: "https://todomusica.com.ar/13189-thickbox_default/exl705np-c-249-exl705np-c-249.jpg",
},
{
    id: 11,
    title: "Piano De Escenario CDP-S100BK",
    description: "Piano | 88 Teclas Acc.Tri Sensor | 64 Polifonia | Negro",
    price: 13,
    stock: 65,
    category: "teclados",
    thumbnail: "https://todomusica.com.ar/21213-thickbox_default/piano-de-escenario-cdp-s100bk-cdp-s100bk.jpg",
},
{
    id: 12,
    title: "Teclado CT-S200RD",
    description: "Teclado | Casiotone | 61 Teclas | Rojo ",
    price: 40,
    stock: 52,
    category: "teclados",
    thumbnail: "https://todomusica.com.ar/16967-thickbox_default/teclado-ct-s200rd-ct-s200rd.jpg",
},
{
    id: 13,
    title: "Teclado CT-S200WE",
    description: "Teclado | Casiotone | 61 Teclas | 400 Sonidos | Blanco",
    price: 13,
    stock: 61,
    category: "teclados",
    thumbnail: "https://todomusica.com.ar/16983-thickbox_default/teclado-ct-s200we-ct-s200we.jpg",
},
{
    id: 14,
    title: "Sintetizador MZ-X300",
    description: "Teclado | MZ-X | 61 Teclas |  950  Sonidos ",
    price: 120,
    stock: 114,
    category: "teclados",
    thumbnail: "https://todomusica.com.ar/8071-thickbox_default/sintetizador-mz-x300-mz-x300.jpg",
},
{
    id: 15,
    title: "Sintetizador XW-P1GD",
    description: "Sintetizador | XW | 61 Teclas | 620 Sonidos ",
    price: 30,
    stock: 105,
    category: "teclados",
    thumbnail: "https://todomusica.com.ar/15273-thickbox_default/sintetizador-xw-p1gd-xw-p1gd.jpg",
},
{
    id: 16,
    title: "PRS Valvular",
    description: "Amplificador |  Para Guitarra |  Sonzera 20 | 20 watts |",
    price: 19,
    stock: 110,
    category: "amplificacion",
    thumbnail: "https://todomusica.com.ar/25600-thickbox_default/amsoc1e2llr.jpg",
},
{
    id: 17,
    title: "Ross 25w",
    description: "Amplificador | Para guitarra | 25w | Parlante 8",
    price: 12,
    stock: 78,
    category: "amplificacion",
    thumbnail: "https://todomusica.com.ar/2897-thickbox_default/g-25r-g-25r.jpg",
},
{
    id: 18,
    title: "Anderson A25C",
    description: "Amplificador | Para acustica | 25w | Parlante 8",
    price: 40,
    stock: 88,
    category: "amplificacion",
    thumbnail: "https://todomusica.com.ar/15934-thickbox_default/a25c-and-a25c-and.jpg",
},
{
    id: 19,
    title: "Bass 441-5055-000",
    description: "Amplificador | AMPLITE | Class-D | 400w",
    price: 46,
    stock: 54,
    category: "amplificacion",
    thumbnail: "https://todomusica.com.ar/22807-thickbox_default/441-5055-000-441-5055-000.jpg",
},
{
    id: 20,
    title: "Bass HD15",
    description: "Amplificador | Para Bajo | 15w | 1 x 6,5",
    price: 70,
    stock: 140,
    category: "amplificacion",
    thumbnail: "https://todomusica.com.ar/23607-thickbox_default/hd15-hd15.jpg",
},
{
    id: 21,
    title: "AC-2",
    description: "Pedal | para Guitarra Acustica | 16 Presets | Entrada ¼” ",
    price: 20,
    stock: 133,
    category: "efectos",
    thumbnail: "https://todomusica.com.ar/17574-thickbox_default/ac-2-ac-2.jpg",
},
{
    id: 22,
    title: "Free step",
    description: "Pedal de efecto | WAh series ",
    price: 14,
    stock: 146,
    category: "efectos",
    thumbnail: "https://todomusica.com.ar/14153-thickbox_default/free-step-free-step.jpg",
},
{
    id: 23,
    title: "Gonkulator",
    description: "Pedal Ringmodulator. Ganancia, Distor, Nivel, Frecuencia, Ring, Entrada.",
    price: 14,
    stock: 26,
    category: "efectos",
    thumbnail: "https://todomusica.com.ar/13628-thickbox_default/gonkulator-gonkulator.jpg",
},
{
    id: 24,
    title: "Spark Overdrive",
    description: "Pedal de efecto | Spark Series Cubo | Overdrive Vintage tipo 80´s",
    price: 46,
    stock: 113,
    category: "efectos",
    thumbnail: "https://todomusica.com.ar/4073-thickbox_default/spark-overdrive-spark-overdrive.jpg",
},
{
    id: 25,
    title: "The Wahter",
    description: "Pedal de efecto | Wah Series | Wah-Wah | Sonidos clasicos",
    price: 70,
    stock: 47,
    category: "efectos",
    thumbnail: "https://todomusica.com.ar/13508-thickbox_default/the-wahter-the-wahter.jpg",
},
{
    id: 26,
    title: "Puas",
    description: "Puas The Beatles Signature, Medium",
    price: 41,
    stock: 131,
    category: "accesorios",
    thumbnail: "https://todomusica.com.ar/15791-thickbox_default/1cbk4-10b2-1cbk4-10b2.jpg",
},
{
    id: 27,
    title: "Funda",
    description: "Funda | Para Platillos Deluxe 20",
    price: 51,
    stock: 17,
    category: "accesorios",
    thumbnail: "https://todomusica.com.ar/8393-thickbox_default/p0729-p0729.jpg",
},
{
    id: 28,
    title: "Correa",
    description: "Correa | p/Guitarra o Bajo | Simil cuero | Logo Yellow Submarine Beatles ",
    price: 20,
    stock: 54,
    category: "accesorios",
    thumbnail: "https://todomusica.com.ar/14711-thickbox_default/25lb06-25lb06.jpg",
},
{
    id: 29,
    title: "Atril",
    description: "Atril | director con sistema EZ Grip (53 cm -123 cm)",
    price: 60,
    stock: 7,
    category: "accesorios",
    thumbnail: "https://todomusica.com.ar/19208-thickbox_default/bs200b-bs200b.jpg",
},
{
    id: 30,
    title: "Tunner",
    description: "Micro Afinador | Cromatico | para violin y viola| Tipo pinza | Función metrónomo incluida",
    price: 30,
    stock: 54,
    category: "accesorios",
    thumbnail: "https://todomusica.com.ar/12640-thickbox_default/pw-ct-14-pw-ct-14.jpg",
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