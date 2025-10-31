"use client";

import { type WishlistItemType, WishlistItem } from "./WishlistItem";

const dummyItems: WishlistItemType[] = [
  {
    id: 1,
    name: "New Laptop",
    url: "https://example.com/laptop",
    price: 999.99,
    notes: "Preferably with 16GB RAM",
    purchased: false,
  },
  {
    id: 2,
    name: "Headphones",
    url: "https://example.com/headphones",
    price: 199.99,
    notes: "",
    purchased: true,
  },
  {
    id: 3,
    name: "Smartphone",
    purchased: false,
  },
  {
    id: 4,
    name: "Book: Learn TypeScript",
    url: "https://example.com/book",
    price: 29.99,
    notes: "Check for the latest edition",
    purchased: true,
  },
];

export function Wishlist() {
  return (
    <div>
      <h2>My Wishlist</h2>
      <ul>
        {dummyItems.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
