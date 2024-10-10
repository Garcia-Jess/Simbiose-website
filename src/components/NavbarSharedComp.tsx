import { useState } from "react";

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <div className="logo text-2xl font-bold text-white">Simbiose</div>

            {/* Desktop Menu (hidden on small screens) */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#sobre" className="text-white hover:text-red-400">
                Quem Somos
              </a>
              <a href="#camisas" className="text-white hover:text-red-400">
                Camisas
              </a>
              <a href="#contato" className="text-white hover:text-red-400">
                Contato
              </a>
            </div>

            {/* Contact Buttons (hidden on small screens) */}
            <div className="hidden md:flex space-x-4">
              <button className="text-white hover:border-gray-800 font-bold px-4 py-2 shadow-2xl">
                <a
                  href="https://wa.me/5591982588355" //
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600"
                >
                  WhatsApp
                </a>
              </button>
              <button className="rounded-full border-2 border-red-500 text-white hover:bg-red-400 font-bold px-4 py-2 shadow-2xl">
                <a href="mailto:jessicagarcialobato@hotmail.com.br">E-mail</a>
              </button>
            </div>

            {/* Mobile Menu Button (visible on small screens) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="mobile-menu-button text-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (shown when the menu button is clicked) */}
        <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-gray-800`}>
          <a
            href="#sobre"
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
          >
            Quem Somos
          </a>
          <a
            href="#camisas"
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
          >
            Camisas
          </a>

          <a
            href="https://wa.me/5591982588355" //
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
          >
            WhatsApp
          </a>
          <a
            href="mailto:jessicagarcialobato@hotmail.com.br"
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
          >
            E-mail
          </a>
        </div>
      </nav>
    </div>
  );
}
