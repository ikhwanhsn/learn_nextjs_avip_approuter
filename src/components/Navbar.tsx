"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex justify-between py-3 px-5 bg-black text-white items-center">
      <h1>Navbar</h1>
      <ul className="flex gap-3">
        <Link href="/" className={`${pathname === "/" ? "" : "text-gray-500"}`}>
          <li>Home</li>
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" ? "" : "text-gray-500"}`}
        >
          <li>About</li>
        </Link>
        <Link
          href="/about/profile"
          className={`${pathname === "/about/profile" ? "" : "text-gray-500"}`}
        >
          <li>Profile</li>
        </Link>
      </ul>
      <button
        className="bg-white text-black py-1 px-3 rounded-md text-sm"
        onClick={() => router.push("/login")}
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
