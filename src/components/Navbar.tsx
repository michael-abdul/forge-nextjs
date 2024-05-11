import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black px-8 py-4">
      <Link href="/" className="text-white text-lg font-bold">
        Forge cryptoDemo
      </Link>
      <Link href="/hash" className="text-white text-lg font-bold">
        Hash
      </Link>
    </nav>
  );
}
