"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(submit)
    {
        submit.preventDefault();
        const newItem = { name, quantity, category };
        console.log(newItem);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
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
            <div className="flex items-center justify-center">
                <div>
                    <form onSubmit={handleSubmit}>
                        <input required onChange={handleNameChange} value={name} placeholder="Item name" />
                        <br /> <br />
                        <input required onChange={handleQuantityChange} value={quantity} type="number" min={1} max={99}/>
                        <br /> <br />
                        <select required onChange={handleCategoryChange} value={category}>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div> 
        </main>
    )
};
            
                
