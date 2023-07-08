import { doc, getDoc } from "firebase/firestore";
import articles from "./firestore";

async function readFirestore(slug) {
    const docRef = doc(articles, slug);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    
}

