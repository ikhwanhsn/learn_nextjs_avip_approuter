import { getData } from "@/services/products/getData";
import Image from "next/image";
import Link from "next/link";

const DetailProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const products = await getData("http://localhost:3000/api/product");
  const filteredProduct = products.data.filter(
    (product: any) => product.id === Number(id)
  );
  return (
    <main>
      <h1>Halaman Detail Product</h1>
      {filteredProduct.map((product: any) => (
        <article key={product.id} className="border rounded-md p-3">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="w-40 h-40 object-cover"
          />
          <h2 className="mt-3 mb-2">{product.name}</h2>
          <p>{product.price}</p>
        </article>
      ))}
      <Link href="/product">Kembali</Link>
    </main>
  );
};

export default DetailProductPage;
