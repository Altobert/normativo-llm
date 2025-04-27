import React from 'react'
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import NavBarNormativo from "@/app/components/navbar-normativo";
import UploadProyectos from "@/app/components/upload-proyectos";

/** necesito construir una barra de upload de documentos */
const page = () => {
    return (
        <main className="bg-gray-100 font-sans leading-normal tracking-normal">

            <Header />

            <NavBarNormativo />            
            
            <div className="container mx-auto px-4 py-8">                
                <UploadProyectos />
            </div>
 
            <Footer />

        </main>
    )
}

export default page