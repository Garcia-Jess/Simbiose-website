import CardShirtComp from "@/components/CardShirtComp";
import FooterComp from "@/components/FooterComp";
import { camisas } from "@/data/shirtData";
import Link from "next/link";

export default function Camisas() {
  return (
    <div className="bg-gray-900">
      {/* Button */}
      <Link href="/">
        <button className="bg-red-400 text-white p-2 m-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </Link>
      {/* Card */}
      <main className=" max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1
          id="camisas"
          className="text-4xl font-bold mb-6 text-white sm:text-4xl flex justify-center mt-10"
        >
          Camisas
        </h1>

        {/* Product Card */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* camisas */}

          {camisas.map((camisa) => (
            <CardShirtComp
              key={camisa.id}
              nome={camisa.nome}
              foto={camisa.foto}
              preco={camisa.preco}
              href={camisa.href}
            />
          ))}
        </section>
      </main>
      <FooterComp />
    </div>
  );
}
