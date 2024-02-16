import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Apple",
    description: "A red apple",
    price: 1.99,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/dda5cd94-dcb1-4067-b5f4-042a8c65de53/court-vision-low-shoes-mxK2Kk.png",
  },
  {
    id: 2,
    name: "Banana",
    description: "A yellow banana",
    price: 0.99,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/dda5cd94-dcb1-4067-b5f4-042a8c65de53/court-vision-low-shoes-mxK2Kk.png",
  },
  {
    id: 3,
    name: "Orange",
    description: "A orange",
    price: 2.99,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/dda5cd94-dcb1-4067-b5f4-042a8c65de53/court-vision-low-shoes-mxK2Kk.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({ status: 200, data: detailProduct });
    } else {
      return NextResponse.json({ status: 404, message: "Product not found" });
    }
  }
  return NextResponse.json({ status: 200, data });
}
