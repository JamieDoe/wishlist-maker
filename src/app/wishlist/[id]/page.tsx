import { Wishlist } from "@/components";

export default async function WishlistPage({
  params,
}: {
  params: Promise<{
    id: string[];
  }>;
}) {
  const { id } = await params;

  return (
    <main>
      <h1>Wishlist ID: {id}</h1>
      <Wishlist id={id} />
    </main>
  );
}
