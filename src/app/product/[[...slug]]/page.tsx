const DetailProductPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main>
      <h1>{params.slug ? "Halaman Detail Product" : "Halaman Product"}</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default DetailProductPage;
