import Hero from "./home/page";
import Header from "@/Components/Header";
import About from "./about/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <Hero />
        <About/>
      </main>
    </div>
  );
}
