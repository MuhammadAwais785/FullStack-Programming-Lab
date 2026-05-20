'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
			<div className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
					<div className="flex justify-center lg:justify-start">
						<div className="relative w-full max-w-xl h-[320px] sm:h-[380px] lg:h-[470px]">
							<div className="absolute inset-0 rounded-3xl bg-orange-100/70 blur-2xl" />
							<div className="relative z-10 h-full flex items-center justify-center">
								<div className="relative w-full h-full rounded-3xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] border border-orange-100 overflow-hidden">
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,180,110,0.26),_transparent_45%)]" />
									<Image
										src="/hero-chair.jpg"
										alt="Featured furniture"
										fill
										sizes="(max-width: 640px) 100vw, 50vw"
										priority
										className="object-contain p-6 sm:p-10"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="relative z-10 text-center lg:text-left">
						<p className="text-orange-500 font-semibold uppercase tracking-[0.35em] text-xs mb-4">
							Featured Collection
						</p>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
							Rustik Plank
						</h1>
						<p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-8">
							Premium handcrafted furniture with a warm natural finish, designed to match the clean showroom
							look from your reference image.
						</p>

						<div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
							<span className="text-3xl font-bold text-orange-500">£129.99</span>
							<span className="text-sm text-gray-500 line-through">£149.99</span>
						</div>

						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
							<Link
								href="/shop"
								className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
							>
								Shop Now
							</Link>
							<Link
								href="/products/1"
								className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
							>
								View Details
							</Link>
						</div>
					</div>
				</div>
			</div>

			<svg viewBox="0 0 1440 120" className="block w-full h-auto" preserveAspectRatio="none">
				<path
					d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,85.3C1120,96,1280,96,1360,96L1440,96V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
					fill="#f97316"
					fillOpacity="0.16"
				/>
				<path
					d="M0,80L80,74.7C160,69,320,59,480,64C640,69,800,91,960,101.3C1120,112,1280,112,1360,112L1440,112V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
					fill="#f97316"
					fillOpacity="0.28"
				/>
			</svg>
		</section>
	);
}
