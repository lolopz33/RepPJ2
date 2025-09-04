const services = [
  {
    title: "Consultoria Ambiental",
    desc: "Analisamos impactos e propomos soluções sustentáveis.",
  },
  {
    title: "Projetos Sustentáveis",
    desc: "Desenvolvemos iniciativas de energia limpa e reciclagem.",
  },
  {
    title: "Educação Ecológica",
    desc: "Workshops e programas para conscientização ambiental.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-8 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12">O que fazemos</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold mb-2 text-green-600">{s.title}</h4>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
