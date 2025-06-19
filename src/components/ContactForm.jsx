export default function ContactForm() {
  return (
    <section className="px-6 py-20 bg-white text-black font-grotesk">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Let's Talk.
      </h2>
      <form className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
        <input type="text" placeholder="Name" className="border p-3 rounded" />
        <input type="email" placeholder="Email" className="border p-3 rounded" />
        <textarea placeholder="Message" rows="5" className="border p-3 rounded" />
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded hover:bg-white hover:text-black border transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
