import { Trash2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity } from "react";
import Link from "next/link";

export type WishlistItemType = {
  id: number;
  name: string;
  url?: string;
  price?: number;
  notes?: string;
  purchased: boolean;
};

interface WishlistItemProps {
  item: WishlistItemType;
  onRemove: (id: number) => void;
}

export function WishlistItem({ item, onRemove }: WishlistItemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Activity mode={item.url ? "visible" : "hidden"}>
          {item.url && (
            <p>
              <Link
                href={item.url}
                target="_blank"
                className="text-blue-600 underline"
              >
                {item.url}
              </Link>
            </p>
          )}
          {item.price !== undefined && <p>Price: ${item.price.toFixed(2)}</p>}
          {item.notes && <p>Notes: {item.notes}</p>}
          <p>Status: {item.purchased ? "Purchased" : "Not Purchased"}</p>
          <Button
            aria-label={`Delete ${item.name} from wishlist`}
            variant="destructive"
            size="icon"
            onClick={() => {
              onRemove(item.id);
            }}
          >
            <Trash2 size={16} />
            <span className="sr-only">Delete</span>
          </Button>
        </Activity>
      </CardContent>
    </Card>
  );
}
