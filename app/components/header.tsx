import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-sky-950 p-4 text-white">
      <Image
            className="rounded-xl object-bottom-left" 
            src="/image.png"
            alt="SII"
            width={90}
            height={90}           
          />
      <div className="container mx-auto">
          <h1 className="text-4xl font-bold center">
            𝗘𝗦𝗧𝗔𝗗𝗢 DE 𝗖𝗛𝗜𝗟𝗘
              Buscador Proyectos Normativos
          </h1>
      </div>
    </header>        
  );
}
