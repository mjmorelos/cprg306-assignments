"use client";
import {useState, useEffect} from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Import the new MealIdeas component
import { useUserAuth } from "./user-auth"; // Import the useUserAuth hook
import getItems from "./_services/shopping-list-service"; // Import the getItems function
import addItem from "./_services/shopping-list-service"; // Import the addItem function

export default function Page(){
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(""); // Add new state variable
    const { user } = useUserAuth();

    const handleAddItem = async (newItem) => {
        try {
            const userId = user.uid;
            const addedItem = await addItem(userId, newItem);
            const updatedItems = [...items, { ...addedItem, id: addedItem.id }];
            setItems(updatedItems);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    }

    const handleItemSelect = (selectedItem) => { // Add new event handler
        let itemName = selectedItem.name.split(',')[0];
        itemName = itemName.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/, ''); // Removes emojis
        const cleanedItemName = itemName.trim();
        setSelectedItemName(cleanedItemName);
    };

    const loadItems = async () => {
        try {
            const userId = user.uid;
            const result = await getItems(userId);
            setItems(result);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    };

    useEffect(() => {
        loadItems();
    }, []);

    return(
        <main className="p-2 flex">
            <div className="w-1/2 pr-4">
                <h2 className="text-4x1 font-bold mb-4 text-lg">Shopping List</h2>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/> 
                <p>Selected ingredient: {selectedItemName || "No ingredient selected" }</p> 
            </div>
            <div className="w-1/2 pl-4">
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
        </main>
    )
}
