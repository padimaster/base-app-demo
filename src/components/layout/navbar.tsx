import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center fixed bottom-0 left-0 right-0">
      <ul className="flex justify-between items-center gap-4 w-full">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/wallet">Wallet</Link>
        </li>
        <li>
          <Link href="/config">Config</Link>
        </li>
      </ul>
    </nav>
  );
}
