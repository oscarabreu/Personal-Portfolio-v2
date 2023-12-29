/** @format */

import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body bg-bgclr ">
      <main className="text-sm my-10 px-5">
        <HeroSection />
      </main>
    </div>
  );
}
