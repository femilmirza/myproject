import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/30 backdrop-blur-md">
      <div className="text-xl font-semibold tracking-wide uppercase">
        dotandcross
      </div>
      <div className="flex gap-4 text-xl">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-white/70 transition duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-white/70 transition duration-300" />
        </a>
      </div>
    </header>
  );
}
