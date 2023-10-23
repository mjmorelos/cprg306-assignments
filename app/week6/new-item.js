"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(submit)
    {
        submit.preventDefault();
        const newItem = { name, quantity, category };
        console.log(newItem);
        onAddItem(newItem); // call the onAddItem function with the new item
        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    function handleNameChange(change)
    {
        setName(change.target.value);
    }
    function handleQuantityChange(change)
    {
        setQuantity(change.target.value);
    }
    function handleCategoryChange(change)
    {
        setCategory(change.target.value);
    }


    return(
        <main>
            <div className="flex items-center justify-left">
                <div>
                    <form onSubmit={handleSubmit}>
                        <input className="text-black"
                        required onChange={handleNameChange} value={name} placeholder="Item name" />
                        <br /> <br />
                        <input className="text-black"
                        required onChange={handleQuantityChange} value={quantity} type="number" min={1} max={99}/>
                        <br /> <br />
                        <select className="text-black"
                        required onChange={handleCategoryChange} value={category}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                        </select>
                        <br /> <br />
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Submit</button>
                    </form>
                </div>
            </div> 
        </main>
    )
};
            
                
