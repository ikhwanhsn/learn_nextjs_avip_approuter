export const getData = async (link: string) => {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch(link, {
    cache: "no-store",
    // next: { revalidate: 3 },
    next: {
      tags: ["products"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
