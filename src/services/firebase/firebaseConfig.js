import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBuFimMzBKUw2ZX8BtshzX9zGxgtm-56LQ",
  authDomain: "proyectofinal-fernandocabrera.firebaseapp.com",
  projectId: "proyectofinal-fernandocabrera",
  storageBucket: "proyectofinal-fernandocabrera.appspot.com",
  messagingSenderId: "1038739985852",
  appId: "1:1038739985852:web:78a9e57effdc13e94807b9",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
