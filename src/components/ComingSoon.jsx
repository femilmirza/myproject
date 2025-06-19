import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 font-sans overflow-hidden">
      {/* Floating Shapes (Decorative) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-10 h-10 bg-white/10 rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-16 h-16 bg-white/10 rotate-45 top-1/3 right-12 animate-spin-slow" />
        <div className="absolute w-24 h-24 bg-white/10 rounded-full bottom-10 left-10 animate-bounce" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-white">Dot & Cross</h1>

        <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent mb-12">
          We’re almost ready. Website is on the way.
        </h2>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-b border-white outline-none text-white px-4 py-2 w-full md:w-96 placeholder-gray-400"
          />
          <button
            type="submit"
            className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition duration-300"
          >
            Get notified when we're live
          </button>
        </form>

        <p className="text-gray-400 text-sm">
          Say hi Meanwhile! •{" "}
          <a
            href="mailto:hi@dotandcross.agency"
            className="underline hover:text-white"
          >
            hi@dotandcross.agency
          </a>
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <a href="#" target="_blank">
            <FaInstagram className="w-6 h-6 hover:text-gray-300" />
          </a>
          <a href="#" target="_blank">
            <FaLinkedin className="w-6 h-6 hover:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
