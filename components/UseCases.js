export default function UseCases() {
  return (
    <section id="usecases" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold">Use Case</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 shadow-md">
          <video controls className="w-full h-auto">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-white p-6 shadow-md">
          <video controls className="w-full h-auto">
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-white p-6 shadow-md">
          <video controls className="w-full h-auto">
            <source src="/video3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
