export default function Challenges() {
  return (
    <section id="problems" className="py-16 bg-gray-100 text-center" data-aos="fade-right">
      <h2 className="text-3xl font-semibold">Are you facing these challenges&</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 shadow-md">
          <img src="/challenge-icon1.png" alt="dummy" className="h-8 w-8 mb-4" />
          <h3 className="text-xl font-semibold">Challenge 1</h3>
          <p>Dummy content for challenge 1.</p>
        </div>
        <div className="bg-white p-6 shadow-md">
          <img src="/challenge-icon2.png" alt="Dummy" className="h-8 w-8 mb-4" />
          <h3 className="text-xl font-semibold">Challenge 2</h3>
          <p>Dummy content for challenge 2.</p>
        </div>
        <div className="bg-white p-6 shadow-md">
          <img src="/challenge-icon3.png" alt="Dummy" className="h-8 w-8 mb-4" />
          <h3 className="text-xl font-semibold">Challenge 3</h3>
          <p>Dummy content for challenge 3.</p>
        </div>
      </div>
      <a href="#consultation" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Book a Free Consultation
      </a>
    </section>
  );
}
