export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-8">Entre em Contato</h3>
      <form className="max-w-3xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="border p-3 rounded-lg"
        />
        <textarea
          rows="4"
          placeholder="Sua mensagem"
          className="border p-3 rounded-lg"
        />
        <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Enviar
        </button>
      </form>
    </section>
  );
}
