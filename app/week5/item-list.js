"use client";
import React from "react";
import { useState } from "react";
import items from './items.json';
import Item from './item.js';

export default function ItemList(){
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
    });

    return (
      <>
        <div>
          <button
            onClick={() => setSortBy("name")}
            style={{ backgroundColor: sortBy === "name" ? "green" : "white" }}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            style={{ backgroundColor: sortBy === "category" ? "green" : "white" }}
          >
            Sort by Category
          </button>
        </div>
        <div>
        {sortedItems.map((item, index) => (
        <Item
            key={index} 
            name={item.name}
            quantity={item.quantity}
            category={item.category}
        /> ))}
        </div>
      </>
    );
  }
        