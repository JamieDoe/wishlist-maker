"use client";

import { type WishlistItemType, WishlistItem } from "./WishlistItem";
import { Button } from "@/components/ui/button";

import { useWishlistStore } from "@/lib/stores/wishlistStore";

export function Wishlist({ id }: { id: string }) {
  const { getWishlistById } = useWishlistStore();

  const wishlist = getWishlistById(Number(id));

  function addWishlistItem() {}

  function removeWishlistItem(id: number) {}

  return (
    <div className="max-w-xl space-y-2 px-6">
      <h2>My Wishlist</h2>
      <Button onClick={addWishlistItem}>Add Item</Button>
      {wishlist?.items.map((item) => (
        <WishlistItem key={item.id} item={item} onRemove={removeWishlistItem} />
      ))}
    </div>
  );
}
