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
                <h1 className="text-3xl font-bold mb-4">Subir Proyectos</h1>
                <p className="text-gray-700 mb-8">Aquí puedes subir tus proyectos.</p>

                <UploadProyectos />
            </div>
 
            <Footer />

        </main>
    )
}

export default page