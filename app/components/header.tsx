import Image from "next/image";

export default function Header() {
  return (    
    <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-10 w-[50%] lg:w-[5rem]">      
      <Image
            className="rounded-xl"
            src="/image.png"
            alt="SII"
            width={100}
            height={100}
            priority
          />
    </div>
  );
}
