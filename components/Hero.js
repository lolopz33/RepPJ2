export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-500 to-green-700 text-white">
      <h2 className="text-5xl font-extrabold mb-4">Construindo um futuro sustentável</h2>
      <p className="text-lg max-w-2xl mb-6">
        Projetos ecológicos que transformam comunidades e preservam o planeta.
      </p>
      <a href="#contact" className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
        Fale Conosco
      </a>
    </section>
  );
}
