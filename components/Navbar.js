export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white fixed w-full z-10">
      <h1 className="text-2xl font-bold text-green-600">Ecologic</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-green-600">Sobre</a>
        <a href="#services" className="hover:text-green-600">Serviços</a>
        <a href="#impact" className="hover:text-green-600">Impacto</a>
        <a href="#contact" className="hover:text-green-600">Contato</a>
      </div>
    </nav>
  );
}
