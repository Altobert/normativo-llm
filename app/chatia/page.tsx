import React from 'react'
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import NavBarNormativo from "@/app/components/navbar-normativo";
import ChatSection from '../components/chat-section';

const page = () => {
    return (
        <main className="bg-gray-100 font-sans leading-normal tracking-normal">
            <Header />

            <NavBarNormativo />

            <div className="container mx-auto p-10">
                <section className="space-y-4">

                <div className="h-[65vh] flex">          
                    <ChatSection />         
                </div>

                </section>
            </div>

            <Footer />

        </main>
    )
}

export default page