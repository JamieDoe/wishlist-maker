"use client";

import { AddWishlistButton } from "@/components";
import { useWishlistStore } from "@/lib/stores/wishlistStore";
import Link from "next/link";

export default function HomePage() {
  const { wishlists } = useWishlistStore();
  return (
    <main className="min-h-screen p-6">
      <div className="grid grid-cols-2 gap-4 h-full">
        {wishlists.map((wishlist) => (
          <Link href={`/wishlist/${wishlist.id}`} key={wishlist.id}>
            <div
              key={wishlist.id}
              className="border rounded-lg p-4 flex flex-col justify-center items-center aspect-square"
            >
              <h2 className="mb-2">{wishlist.name}</h2>
              <p>{wishlist.items.length} items</p>
            </div>
          </Link>
        ))}
        <AddWishlistButton />
      </div>
    </main>
  );
}
