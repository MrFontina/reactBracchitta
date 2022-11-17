import {
    initializeApp
} from "firebase/app";
import {
    collection,
    getFirestore,
    getDocs,
    doc,
    getDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA0xWc9DjYYs9Ut_sP0csFZgNt4emsmS4o",
    authDomain: "reactbracchitta.firebaseapp.com",
    projectId: "reactbracchitta",
    storageBucket: "reactbracchitta.appspot.com",
    messagingSenderId: "462226756709",
    appId: "1:462226756709:web:33ad89f1187de0db80e28c"
};

const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);


export function testDataBase() {
    console.log(FirebaseApp)
}



export async function getItemsFromApi() {
    try {
        const collectionProductos = collection(DB, "productos")
        let respuesta = await getDocs(collectionProductos)

        const productos = respuesta.docs.map(
            docu => {
                return {

                    ...docu.data(),
                    id: docu.id,
                }

            })
        return (productos)
    } catch (error) {
        console.error(error)
    }
}

export async function getSingleItemFromApi(id) {
    const docRef = doc(DB, "productos", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {

        return {
            ...docSnap.data(),
            id: docSnap.id,
        }
    } else {
        console.error("El producto no existe")
    }

}