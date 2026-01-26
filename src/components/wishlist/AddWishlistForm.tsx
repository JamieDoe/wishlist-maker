"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useWishlistStore } from "@/lib/stores/wishlistStore";

const formSchema = z.object({
  wishlistName: z.string().min(1, {
    message: "Wishlist name is required",
  }),
});

export function AddWishlistForm() {
  const { addWishlist } = useWishlistStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wishlistName: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const id = new Date().getTime();
    const newWishlist = {
      id,
      name: data.wishlistName,
      items: [],
    };
    addWishlist(newWishlist);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="wishlistName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whats the occasion?</FormLabel>
              <FormControl>
                <Input placeholder="Birthday, Wedding, etc." {...field} />
              </FormControl>
              <FormDescription>
                Give your wishlist a name to get started.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Wishlist</Button>
      </form>
    </Form>
  );
}
