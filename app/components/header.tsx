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
              Buscador Proyectos Normativos del Servicio de Impuestos Internos
          </h1>
      </div>
    </header>        
  );
}
