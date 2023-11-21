"use client";
import {useState} from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Import the new MealIdeas component
import { useUserAuth } from "../_utils/auth-context"; // Import the useUserAuth hook
import getItems from "../_services/shopping-list-service"; // Import the getItems function
import addItem from "../_services/shopping-list-service"; // Import the addItem function
import { useEffect } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(""); // Add new state variable

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (selectedItem) => { // Add new event handler
        let itemName = selectedItem.name.split(',')[0];
        itemName = itemName.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/, ''); // Removes emojis
        const cleanedItemName = itemName.trim();
        setSelectedItemName(cleanedItemName);
    };

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
async function loadItems() {
    try {
        const user = useUserAuth(); // Get the current user
        const userId = user.uid; // Get the user ID
        const items = await getItems(userId); // Call the getItems function with the user ID
        setItems(items); // Set the state of items to the result of getItems
    } catch (error) {
        console.error("Error loading items:", error);
    }
}
