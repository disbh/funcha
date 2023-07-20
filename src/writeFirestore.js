import { doc, setDoc } from "firebase/firestore"; 
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
    console.log("Document written with ID: ", slug)
}

async function likeArticle(slug) {
    const article = await readFirestore(slug);
    if (article) {
        const newLikes = article.likes + 1;
        const newData = {
            ...article,
            likes: newLikes,
        }
        await writeFirestore(slug, newData);
    }
}

async function addComment(slug, author, commentText) {
    const article = await readFirestore(slug);
    if (article) {
        const newComment = {
            author: author,
            comment: commentText,
            likes: 0,
        }
        const newData = {
            ...article,
            comments: [...article.comments, newComment],
        }
        await writeFirestore(slug, newData);
    }
}

async function likeComment(slug, commentIndex) {
    const article = await readFirestore(slug);
    if (article) {
        const newComments = article.comments.map((comment, index) => {
            if (index === commentIndex) {
                return {
                    ...comment,
                    likes: comment.likes + 1,
                }
            } else {
                return comment;
            }
        })
        const newData = {
            ...article,
            comments: newComments,
        }
        await writeFirestore(slug, newData);
    }
}

async function deleteComment(slug, commentIndex) {
    const article = await readFirestore(slug);
    if (article) {
        const newComments = article.comments.filter((comment, index) => {
            if (index === commentIndex) {
                return false;
            } else {
                return true;
            }
        })
        const newData = {
            ...article,
            comments: newComments,
        }
        await writeFirestore(slug, newData);
    }
}



export {writeFirestore, likeArticle, addComment};