import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import BodySearchNorma from "./components/body-search-norma";
import NavBarNormativo from "./components/navbar-normativo";
import FiltrosBuscador from "./components/filtros-buscador";

/**
 * 
 * @returns
 * <div className="h-[65vh] flex">          
    <ChatSection />         
  </div>

  <div className="h-[58vh]" style={{ marginRight: "-33rem" }}>
        <ChatSection />
  </div>
 *  
 */
export default function Home() {
  return (
    
    <main className="bg-gray-100 font-sans leading-normal tracking-normal">
      
      <Header />
      
      <NavBarNormativo />
      
  
      <div className="container mx-auto p-4">
        <section className="space-y-4">

        <BodySearchNorma />

        </section>
        
      </div>

      <div className="h-[58vh]" style={{ marginRight: "30rem" }}>
          <FiltrosBuscador />
      </div>

      <Footer />      
    </main>
  );
}
