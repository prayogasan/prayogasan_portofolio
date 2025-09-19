import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        {/* Nama & Kontak */}
        <h2 className="text-2xl font-bold mb-2">Prayoga San Arisakti</h2>
        <p className="text-gray-300">
          📧{" "}
          <a
            href="mailto:prayogasanarisakti@gmail.com"
            className="hover:underline"
          >
            prayogasanarisakti@gmail.com
          </a>{" "}
          | 📱{" "}
          <a href="tel:+6281290805013" className="hover:underline">
            +62 812-9080-5013
          </a>
        </p>
        <p className="text-gray-400 mt-1">📍 Bandung, Jawa Barat</p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://instagram.com/prayogasan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 rounded-full p-3 hover:bg-pink-500 hover:text-white transition"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/prayoga-san-arisakti-147498226/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 rounded-full p-3 hover:bg-blue-500 hover:text-white transition"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
          <a
            href="https://wa.me/6281290805013"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 rounded-full p-3 hover:bg-green-500 hover:text-white transition"
          >
            <FaWhatsapp className="text-lg" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Prayoga Portofolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
