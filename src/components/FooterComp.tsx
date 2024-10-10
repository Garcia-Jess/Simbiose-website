import { IoLogoWhatsapp } from "react-icons/io";

export default function FooterComp() {
  return (
    <footer className="text-white py-6 mx-10 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://wa.me/5591982588355" //
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 text-4xl hover:text-white"
          >
            <IoLogoWhatsapp />
          </a>
        </div>

        <div className="text-center text-gray-400">
          <p>© 2024 All rights reserved</p>
          <p>
            Website feito por <strong>Jess Garcia</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
