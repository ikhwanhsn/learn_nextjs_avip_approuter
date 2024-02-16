"use client";

import { useState } from "react";

const AdminProductPage = () => {
  const [status, setstatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=123",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setstatus("Failed to revalidate");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setstatus("Revalidated successfully");
      }
    }
  };
  return (
    <section className="mt-5">
      <p>{status}</p>
      <button
        className="bg-blue-500 rounded-md p-3"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </section>
  );
};

export default AdminProductPage;
