import Image from "next/image";

interface ShirtCompProps {
  nome: string;
  foto: string;
  preco: number;
  href: string;
}

export default function ShirtComp({ nome, foto, preco, href }: ShirtCompProps) {
  return (
    <>
      {/* T-Shirt 1 */}
      <div className="rounded-lg shadow-2xl shadow-gray-500/50 overflow-hidden md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-700">
        <Image
          src={foto}
          alt={nome}
          width={400}
          height={400}
          className="w-full h-auto"
        />
        <div className="p-6">
          <h3 className="text-lg sm:text-xl text-white font-semibold">
            {nome}
          </h3>
          <p className="text-white mt-2 text-sm sm:text-base">R$ {preco}</p>
          <button className="mt-4 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full border-2 border-red-500 hover:bg-red-600 hover:border-black">
            <a
              href={href} //
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
