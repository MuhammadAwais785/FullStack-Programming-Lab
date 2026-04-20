import React from "react";

function Showcase() {
	return (
		<main className="w-full bg-[#efefef] px-4 pb-6 pt-2 sm:px-6 lg:px-8">
			<section className="relative overflow-hidden border border-[#d9d9d9] bg-white">
				<img
					src="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1600&q=80"
					alt="Luxury hot tub showcase"
					className="h-[340px] w-full object-cover max-md:h-[260px]"
				/>

				<div className="absolute inset-y-0 left-0 w-[42%] bg-white/72 px-5 py-6 max-md:w-[80%] max-sm:w-full">
					<h2 className="m-0 text-[42px] leading-[1] text-[#ef1b24] max-md:text-[30px]">Barrier Reef 158 Jet</h2>
					<p className="m-0 mt-1 text-[42px] leading-[1.03] text-[#ef1b24] max-md:text-[30px]">TV- Stereo - Home Theater</p>
					<p className="m-0 mt-1 text-[42px] leading-[1] text-[#ef1b24] max-md:text-[30px]">Supter Spa</p>

					<p className="mt-6 text-[18px] leading-tight text-[#1f2d3d]">Extra Large and Deep 8 Person</p>
					<p className="mt-1 text-[17px] leading-tight text-[#1f2d3d]">158 Jet Supper Spa, TV-Home Theater Spa System.</p>

					<p className="mt-10 text-[50px] font-bold leading-none text-[#0f2d4a] max-md:mt-5 max-md:text-[38px]">$4899.00</p>
					<button className="mt-3 rounded-sm bg-[#ef1b24] px-6 py-2 text-[17px] font-semibold text-white">More Details</button>
				</div>

				<div className="absolute bottom-3 right-4 flex items-center gap-2">
					<span className="h-2.5 w-2.5 rounded-full bg-white" aria-hidden="true" />
					<span className="h-2.5 w-2.5 rounded-full bg-white" aria-hidden="true" />
					<span className="h-2.5 w-2.5 rounded-full bg-[#ef1b24]" aria-hidden="true" />
				</div>
			</section>

			<section className="mt-2 grid grid-cols-3 gap-0.5 max-md:grid-cols-1">
				<article className="relative h-[190px] overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1613553420933-11f9c7d2f8f8?auto=format&fit=crop&w=900&q=80"
						alt="5-7 person spa"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#061a34] via-transparent to-transparent" />
					<div className="absolute bottom-2 left-3 text-white">
						<p className="m-0 text-[40px] leading-none">5-7 PERSON</p>
						<p className="m-0 text-[40px] leading-none">SPA</p>
						<p className="mt-2 text-[11px] uppercase">This is Photoshop's version of lorem ipsum. Proin gravida nibh vel velit auctor.</p>
					</div>
				</article>

				<article className="relative h-[190px] overflow-hidden">
					<img
						src="https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?auto=format&fit=crop&w=900&q=80"
						alt="TV theater spa"
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#11233e] via-transparent to-transparent" />
					<div className="absolute bottom-2 left-3 text-white">
						<p className="m-0 text-[40px] leading-none">TV THEATER SPA</p>
						<p className="mt-2 text-[11px] uppercase">This is Photoshop's version of lorem ipsum. Proin gravida nibh vel velit auctor.</p>
					</div>
				</article>

				<article className="flex h-[190px] items-center justify-center bg-[#ef1b24] p-4 text-center text-white">
					<div>
						<p className="m-0 text-[86px] font-semibold uppercase leading-[0.85]">Save</p>
						<p className="m-0 text-[100px] font-semibold leading-[0.85]">50%</p>
						<p className="mt-2 text-[11px] uppercase">This is Photoshop's version of lorem ipsum. Proin gravida nibh vel velit auctor.</p>
					</div>
				</article>
			</section>
		</main>
	);
}

export default Showcase;
