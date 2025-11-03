import { create } from "zustand";

export interface WishlistItemType {
  id: number;
  name: string;
  url?: string;
  price?: number;
  notes?: string;
  purchased: boolean;
}

export interface WishlistType {
  id: number;
  name: string;
  items: WishlistItemType[];
}

interface WishlistStore {
  wishlists: WishlistType[];
  addWishlist: (wishlist: WishlistType) => void;
  removeWishlist: (id: number) => void;
  addItemToWishlist: (wishlistId: number, item: WishlistItemType) => void;
  removeItemFromWishlist: (wishlistId: number, itemId: number) => void;
  getWishlistById: (id: number) => WishlistType | undefined;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  wishlists: [],
  addWishlist: (wishlist) =>
    set((state) => ({
      wishlists: [...state.wishlists, wishlist],
    })),
  removeWishlist: (id) =>
    set((state) => ({
      wishlists: state.wishlists.filter((w) => w.id !== id),
    })),
  addItemToWishlist: (wishlistId, item) =>
    set((state) => ({
      wishlists: state.wishlists.map((w) =>
        w.id === wishlistId ? { ...w, items: [...w.items, item] } : w
      ),
    })),
  removeItemFromWishlist: (wishlistId, itemId) =>
    set((state) => ({
      wishlists: state.wishlists.map((w) =>
        w.id === wishlistId
          ? { ...w, items: w.items.filter((i) => i.id !== itemId) }
          : w
      ),
    })),
  getWishlistById: (id: number) => get().wishlists.find((w) => w.id === id),
}));

// just for type checking purposes
const wishlists = {
  wishlists: [
    {
      id: 1,
      name: "Birthday Wishlist",
      items: [
        {
          id: 1,
          name: "Sample Item",
          url: "https://example.com",
          price: 29.99,
          notes: "This is a sample item.",
          purchased: false,
        },
      ],
    },
    {
      id: 2,
      name: "Christmas Wishlist",
      items: [
        {
          id: 1,
          name: "Another Item",
          purchased: true,
          url: "https://example.com/another-item",
          price: 49.99,
          notes: "This item has been purchased.",
        },
      ],
    },
  ],
};
