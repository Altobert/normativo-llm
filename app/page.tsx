import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import ResultadoBusqueda from "./components/resultadoBusqueda";
import ChatSection from "./components/chat-section";

/**
 * 
 * @returns
 * <div className="h-[65vh] flex">          
    <ChatSection />         
  </div>
 * 
 */
export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center background-gradient">
      <div className="space-y-2 lg:space-y-10 w-[90%] lg:w-[60rem]">
        <Header />
        <br/>        
        <ResultadoBusqueda/>
        <br/>
        <Footer/>
      </div>
    </main>
  );
}
