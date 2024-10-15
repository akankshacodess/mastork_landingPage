export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center" data-aos="fade-in">
      <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Email Management using AI</h1>
      <p className="text-xl mb-6">Manage your emails effortlessly with advanced AI technology</p>
      <a href="#consultation" className="bg-white text-blue-600 py-2 px-6 rounded hover:bg-gray-200 transition duration-300">
        Book a Free Consultation
      </a>
    </section>
  );
}

