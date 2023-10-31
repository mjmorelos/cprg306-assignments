"use client";
import {useState} from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas"; // Import the new MealIdeas component

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
                <p>Selected ingredient: {selectedItemName}</p> 
            </div>
            <div className="w-1/2 pl-4">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    )
}
