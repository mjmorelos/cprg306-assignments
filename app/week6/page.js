"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";


export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    
    return(
        <main className="p-2">
            <h2 className="text-4x1 font-bold mb-4 text-lg">Shopping List</h2>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}

