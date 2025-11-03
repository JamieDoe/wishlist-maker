import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddWishlistForm } from "./AddWishlistForm";

export function AddWishlistButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "border-dotted bg-transparent border-2 w-full h-full aspect-square text-foreground flex flex-col justify-center items-center hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Plus />
          New Wishlist
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Wishlist</DialogTitle>
        </DialogHeader>
        <AddWishlistForm />
      </DialogContent>
    </Dialog>
  );
}
