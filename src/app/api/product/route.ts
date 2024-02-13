import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Apple",
    description: "A red apple",
    price: 1.99,
  },
  {
    id: 2,
    name: "Banana",
    description: "A yellow banana",
    price: 0.99,
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
