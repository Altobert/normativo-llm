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
    // h-screen w-screen flex justify-center items-center background-gradient
    // agregar div que permita agregar componentes
    // de la parte superior e inferior
    // y que el chat ocupe el espacio restante
    // <div className="h-screen w-screen flex justify-center items-center background-gradient"></div>
    //   <div className="h-screen w-screen flex justify-center items-center background-gradient"> 
    //     <div className="h-[65vh] flex">
    //       <ChatSection />
    //     </div>
    //   </div>
    // <div className="h-screen w-screen flex justify-center items-center background-gradient">
    //   <div className="h-[65vh] flex">
    //     <ChatSection />
    //   </div>
    // </div>
         
     <div className="h-screen w-screen flex justify-center items-center background-gradient">
      <div className="absolute top-0 left-0 w-full flex justify-center items-center">
          <Header />
      </div>

      <div className="h-[65vh] flex">
         <ChatSection />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
          <Footer />
       </div>           
     </div>
     
    
  );
}
