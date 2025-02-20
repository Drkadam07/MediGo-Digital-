import Hero from "./home/page";
import About from "./about/page";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
        <Header/>
      </header>
      <main>
        <Hero />
        <About/>
      </main>
    </div>
  );
}
