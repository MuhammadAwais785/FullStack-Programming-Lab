export default function ProductsPage() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-16">
			<div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 shadow-2xl">
				<div className="grid gap-10 px-6 py-14 md:grid-cols-[1.3fr_0.7fr] md:px-12 md:py-20">
					<div className="text-white">
						<p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">Rustik Plank</p>
						<h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
							Crafted furniture built for warm, modern spaces.
						</h1>
						<p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
							A clean Tailwind-styled route that proves the PostCSS pipeline is working and the app can render
							styled pages again.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
								Chairs
							</span>
							<span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
								Tables
							</span>
							<span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
								Beds
							</span>
						</div>

						<div className="mt-10 flex flex-wrap gap-4">
							<a
								href="/shop"
								className="inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
							>
								Browse shop
							</a>
							<a
								href="/about"
								className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
							>
								About the brand
							</a>
						</div>
					</div>

					<div className="grid gap-4 self-center">
						{[
							{ title: 'Living room', value: '12 curated pieces' },
							{ title: 'Bedroom', value: '8 comfort-first designs' },
							{ title: 'Dining', value: '6 handcrafted sets' },
						].map((item) => (
							<div
								key={item.title}
								className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-lg backdrop-blur"
							>
								<p className="text-sm uppercase tracking-[0.3em] text-amber-200">{item.title}</p>
								<p className="mt-3 text-2xl font-semibold">{item.value}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
