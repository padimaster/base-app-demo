import React from "react";
import WalletDemo from "../wallet/wallet-demo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link href="/">Logo</Link>
      </div>
      <WalletDemo />
    </header>
  );
}
