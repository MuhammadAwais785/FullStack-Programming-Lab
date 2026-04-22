import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12">
      <section className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          Welcome to Dynamic Product App
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Browse products, open dynamic detail pages, and navigate across all
          required routes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Go to Product List
          </Link>
          <Link
            href="/product/1"
            className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-100"
          >
            Open Sample Product
          </Link>
        </div>
      </section>
    </div>
  );
}
