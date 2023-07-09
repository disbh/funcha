import { collection, doc, setDoc } from "firebase/firestore"; 
import articles from "./firestore";


const templateData =  {
    title: "San Francisco",
    likes: 21,
    comments: [
        {
            author: "John Doe",
            comment: "This is a comment",
            likes: 12,
        },
        {
            author: "Jane Doe",
            comment: "This is another comment",
            likes: 5,
        }
    ]
}

async function writeFirestore(slug, data) {
    await setDoc(doc(articles, slug), data);
}



export default writeFirestore;