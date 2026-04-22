import Link from 'next/link';

export default function Header() {
	return (
		<header className="bg-blue-600 text-white">
			<nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
				<Link href="/" className="text-xl font-bold">
					Dynamic App
				</Link>
				<ul className="flex items-center gap-6 font-medium">
					<li>
						<Link href="/" className="hover:text-blue-200">
							Home
						</Link>
					</li>
					<li>
						<Link href="/products" className="hover:text-blue-200">
							Products List
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}