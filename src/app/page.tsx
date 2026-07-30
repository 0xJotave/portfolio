import { Hero } from "@/src/components/Hero";
import { StatsCards } from "@/src/components/StatsCards";
import { ApiExplorer } from "@/src/components/ApiExplorer";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06050a] text-white relative overflow-hidden flex flex-col justify-between selection:bg-purple-900 selection:text-white">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <main className="z-10 flex-grow">
        <Hero />
        <StatsCards />
        <ApiExplorer />
      </main>

      <Footer />
    </div>
  );
}