import Hero from "./home/page";
import About from "./about/page";
import Header from "@/app/Components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About/>
      </main>
    </div>
  );
}
