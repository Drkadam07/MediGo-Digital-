import TopBar from "@/Components/ui/TopBar";
import Hero from "./home/page";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">

      <main>
      <TopBar/>
      <Header/>
        <Hero/>
      </main>
      
    </div>
  );
}
