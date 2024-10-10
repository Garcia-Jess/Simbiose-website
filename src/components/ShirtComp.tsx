import Image from "next/image";
import Link from "next/link";

export default function ShirtComp() {
  return (
    <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1
        id="camisas"
        className="text-4xl font-bold mb-6 text-white sm:text-4xl flex justify-center mt-10"
      >
        Camisas
      </h1>

      {/* Product Card */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* T-Shirt 1 */}
        <div className="rounded-lg shadow-2xl shadow-gray-500/50 overflow-hidden md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-700">
          <Image
            src="/images/camisa1.jpg"
            alt="Classic Black T-Shirt"
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-lg sm:text-xl text-white font-semibold">
              Camisa Básica
            </h3>
            <p className="text-white mt-2 text-sm sm:text-base">R$ 20.00</p>
            <button className="mt-4 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full border-2 border-red-500 hover:bg-red-600 hover:border-black">
              Quero
            </button>
          </div>
        </div>

        {/* T-Shirt 2 */}
        <div className="rounded-lg shadow-2xl shadow-gray-500/50 overflow-hidden md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-700">
          <Image
            src="/images/camisa2.jpeg"
            alt="Classic Black T-Shirt"
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-lg sm:text-xl text-white font-semibold">
              Camisa Básica
            </h3>
            <p className="text-white mt-2 text-sm sm:text-base">R$ 20.00</p>
            <button className="mt-4 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full border-2 border-red-500 hover:bg-red-600">
              Quero
            </button>
          </div>
        </div>

        {/* T-Shirt 3 */}
        <div className="rounded-lg shadow-2xl shadow-gray-500/50 overflow-hidden md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-700">
          <Image
            src="/images/camisa3.jpeg"
            alt="Classic Black T-Shirt"
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-lg sm:text-xl text-white font-semibold">
              Camisa Básica
            </h3>
            <p className="text-white mt-2 text-sm sm:text-base">R$ 20.00</p>
            <button className="mt-4 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full border-2 border-red-500 hover:bg-red-600">
              Quero
            </button>
          </div>
        </div>

        {/* T-Shirt 4 */}
        <div className="rounded-lg shadow-2xl shadow-gray-500/50 overflow-hidden md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-700">
          <Image
            src="/images/camisa4.jpeg"
            alt="Classic Black T-Shirt"
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-lg sm:text-xl text-white font-semibold">
              Camisa Básica
            </h3>
            <p className="text-white mt-2 text-sm sm:text-base">R$ 20.00</p>
            <button className="mt-4 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full border-2 border-red-500 hover:bg-red-600">
              Quero
            </button>
          </div>
        </div>

        {/* T-Shirt 5 */}
        <div className="rounded-lg shadow-2xl shadow-gray-500/50 overflow-hidden md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-700">
          <Image
            src="/images/camisa5.jpeg"
            alt="Classic Black T-Shirt"
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-lg sm:text-xl text-white font-semibold">
              Camisa Básica
            </h3>
            <p className="text-white mt-2 text-sm sm:text-base">R$ 20.00</p>
            <button className="mt-4 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full border-2 border-red-500 hover:bg-red-600">
              Quero
            </button>
          </div>
        </div>

        {/* T-Shirt 6 */}
        <div className="rounded-lg shadow-2xl shadow-gray-500/50 overflow-hidden md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-700">
          <Image
            src="/images/camisa6.jpeg"
            alt="Classic Black T-Shirt"
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-lg sm:text-xl text-white font-semibold">
              Camisa Básica
            </h3>
            <p className="text-white mt-2 text-sm sm:text-base">R$ 20.00</p>
            <button className="mt-4 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full border-2 border-red-500 hover:bg-red-600">
              Quero
            </button>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <Link href="/Camisas">
          <button className="bg-gradient-to-r from-red-600 via-red-400 to-red-600 shadow-lg shadow-red-600/60 text-white py-3 px-6 sm:py-5 sm:px-8 mt-5 sm:mt-10 rounded-md text-md sm:text-lg font-medium hover:bg-red-400">
            Ver mais camisas
          </button>
        </Link>
      </div>
    </main>
  );
}
