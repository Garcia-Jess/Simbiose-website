import Image from "next/image";

export default function HelpComp() {
  return (
    <div
      id="contato"
      className="flex justify-center px-5 sm:px-10 md:px-20 mt-10"
    >
      <div className="container bg-gray-900 w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 py-10 md:py-20 rounded-lg shadow-2xl shadow-gray-500/50">
        {/* Imagem - Responsiva */}
        <div className="grid grid-col-1">
          <Image
            src="/images/help.png"
            alt="Logo"
            width={300} // Ajustando o tamanho da imagem para telas menores
            height={150}
            className="w-full h-auto"
          />
        </div>

        {/* Conteúdo de Texto */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-white font-bold text-xl sm:text-2xl mt-5">
            Não Perca Tempo!
          </h1>
          <p className="text-white mt-5 text-base sm:text-lg">
            Escolha sua camisa ou envie sua arte
            <br /> personalizada para pintar.
          </p>
          <a
            href="#"
            className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 shadow-lg shadow-red-600/60 text-white py-3 px-6 sm:py-5 sm:px-8 mt-5 sm:mt-10 rounded-md text-md sm:text-lg font-medium hover:bg-red-400"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
}
