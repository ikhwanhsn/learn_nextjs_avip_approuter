import Image from "next/image";

const getData = async () => {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const products = await getData();
  console.log(products.data);
  return (
    <main>
      <h1>{params.slug ? "Halaman Product" : "Halaman Product"}</h1>
      <p>{params.slug}</p>
      {/* <section className="grid grid-cols-5 gap-3 mx-3">
        {products.map((product: any) => (
          <article key={product.id} className="border rounded-md p-3">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-40 object-cover"
            />
            <h2 className="mt-3 mb-2">{product.title}</h2>
            <p>{product.price}</p>
          </article>
        ))}
      </section> */}
      <section className="grid grid-cols-5 gap-3 mx-3">
        {products.data.map((product: any) => (
          <article key={product.id} className="border rounded-md p-3">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-40 object-cover"
            />
            <h2 className="mt-3 mb-2">{product.name}</h2>
            <p>{product.price}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ProductPage;
