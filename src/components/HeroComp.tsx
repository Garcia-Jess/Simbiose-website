import Image from "next/image";

export default function HeroComp() {
  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-5">
          {/* Imagem responsiva */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/illustrationHero1.png"
              alt="Logo"
              width={611}
              height={382}
              className="w-full h-auto"
              priority // Prioriza o carregamento dessa imagem
            />
          </div>
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Suporte o Underground
            </h1>
            <h1 className="bounce logo font-bold text-4xl sm:text-5xl lg:text-6xl">
              Simbiose
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white mb-10">
              Camisas pintadas manualmente.
            </p>
            {/* Botão responsivo */}
            <a
              href="#camisas"
              className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-md text-base sm:text-lg font-medium"
            >
              Ver Camisas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
