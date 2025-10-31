import { Trash } from "lucide-react";

export type WishlistItemType = {
  id: number;
  name: string;
  url?: string;
  price?: number;
  notes?: string;
  purchased: boolean;
};

export function WishlistItem({ item }: { item: WishlistItemType }) {
  return (
    <li className="bg-gray-100 my-2 w-fit p-2 rounded shadow">
      <h3>{item.name}</h3>
      {item.url && (
        <p>
          URL:{" "}
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.url}
          </a>
        </p>
      )}
      {item.price !== undefined && <p>Price: ${item.price.toFixed(2)}</p>}
      {item.notes && <p>Notes: {item.notes}</p>}
      <p>Status: {item.purchased ? "Purchased" : "Not Purchased"}</p>
      <Trash
        className="inline-block ml-2"
        // onClick={() => removeItem(item.id)}
      />
      <button
        className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
        // onClick={() => togglePurchased(item.id)}
      >
        {item.purchased ? "Mark as Not Purchased" : "Mark as Purchased"}
      </button>
    </li>
  );
}
