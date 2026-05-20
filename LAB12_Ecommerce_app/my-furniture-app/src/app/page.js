'use client';

import Hero from '@/components/Hero';
import CategoryCollections from '@/components/CategoryCollections';
import ProductGrid from '@/components/ProductGrid';
import HotDeal from '@/components/HotDeal';
import BuyOnline from '@/components/BuyOnline';
import LatestUpdates from '@/components/LatestUpdates';

export default function Home() {
  return (
    <main> {/* div ki jagah main tag use kiya */}
      <Hero />
      <CategoryCollections />
      <ProductGrid />
      <HotDeal />
      <BuyOnline />
      <LatestUpdates />
    </main>
  );
}