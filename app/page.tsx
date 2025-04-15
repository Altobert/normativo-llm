import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import BodySearchNorma from "./components/body-search-norma";
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

     <div className="h-screen w-screen flex justify-center items-center background-gradient">
      <div className="absolute top-0 left-0 w-full flex justify-center items-center">
          <Header />
      </div>
     <br />            
      <div className="absolute top-10 left-0 w-full flex justify-center items-center">
          <BodySearchNorma />
      </div>       
      <div className="h-[58vh]" style={{ marginRight: "-33rem" }}>
        <ChatSection />
      </div>
        
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
          <Footer />
       </div>           
     </div>
     
    
  );
}
