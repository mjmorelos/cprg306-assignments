"use client";
import { useState, useEffect} from "react";
//useEffect is added to give effects to a function
async function fetchRandomDog(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
    //fetches the data first to send the data to the json file
    //then to user
    //this makes that the page is loaded at the same time instead of
    //loading everything before displaying.
}

async function fetchBreedList(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    return data.message;
}

export default function Page(){

    const [dog, setDog] = useState(null);
    const [breedList, setBreedList] = useState(null);

    async function loadRandomDog(){
        const randomDog = await fetchRandomDog();
        setDog(randomDog);
    }

    async function loadBreedList(){
        const breedList = await fetchBreedList();
        setBreedList(breedList);
    }


    useEffect(() => {
    loadRandomDog();
    loadBreedList();
    }, []);
    //this useEffect is used to run the command once^

    

    return (
        <main>
            <h1>Random Dog</h1>
            <div>
                <h2>Breeds</h2>
                <select name="breeds" id="breeds" className="text-blue">
                    {breedList &&
                        Object.keys(breedList).map((breed) => (
                        <option key={breed} value={breed}>{breed}</option>
                    ))}
                    {/* this is used to map the breeds to the list */}
                </select>
                <img src={dog}></img>
            </div>
        </main>
    )
}