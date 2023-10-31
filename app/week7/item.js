export default function Item({name, quantity, category, onSelect}) {
    return (
        <ol className="p-5 m-5 shadow-md rounded-lg mb-4 bg-slate-600 max-w-sm" onClick={onSelect}>
            <li>{name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ol>
    )}

