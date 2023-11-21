import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

async function getItems(userId) {
    const items = [];

    try {
        const itemsRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(itemsRef);

        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                data: doc.data(),
            });
        });
    } catch (error) {
        console.error("Error getting items:", error);
    }

    return items;
}

async function addItem(userId, item) {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        return null;
    }
}




