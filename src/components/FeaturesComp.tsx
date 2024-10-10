import Image from "next/image";

export default function FeaturesComp() {
  return (
    <section id="sobre" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Sobre Nós</h2>
        <p className="text-white max-w-3xl mx-auto leading-7">
          Na Simbiose, criamos camisetas personalizadas por meio de técnicas de
          pintura manual. Cada peça é feita à mão, com cuidado e atenção aos
          detalhes, tornando-a única e exclusiva. Nosso objetivo é transformar
          ideias em arte, permitindo que nossos clientes expressem sua
          personalidade através de camisetas autênticas. Unimos criatividade e
          tradição para oferecer produtos artesanais com qualidade e estilo.
        </p>
        <div className="flex justify-center mt-10">
          <Image
            src="/images/pincelart.png"
            alt="Logo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
