"use client";

export default function Page() {
    let dogList = [
        {
            id: 1,
            name: "Yorks",
            description: "Yorkshire Terrier",
            imageUrl: "https://images.pexels.com/photos/5732474/pexels-photo-5732474.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            name: "Puppy",
            description: "It's a puppy",
            imageUrl: "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            name: "Sleepy Dog",
            description: "It's a sleepy dog",
            imageUrl: "https://images.pexels.com/photos/1714454/pexels-photo-1714454.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    dogList.sort( (a, b) => a.name.localeCompare(b.name) );
    //This sorts the list alphabetically by name

    dogList = dogList.filter((dog) => dog.id !==2);
    //This filters out the dog with id 2

    const handleClick = (id) => {
        alert(id);
    };
    //This is the function that will be called when the button is clicked

    return (
        <main>
            <ul>
                {
                    dogList.map( (dog) => (
                        <li key={dog.id} onClick={()=> handleClick(dog.id)}>
                            <h2>{dog.name}</h2>
                            <p>{dog.description}</p>
                            <img src={dog.imageUrl} alt={dog.name} />
                        </li>
                        //This maps the list to the page
                    ) )
                }
            </ul>
        </main>
    )
}
