import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My Next App</h1>
        <ul className="flex gap-4">
          <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-200">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-200">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}