export default function Testimonials() {
    return (
      <section id="video" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
        <div className="mt-8 overflow-x-auto flex space-x-4">
          <div className="min-w-[300px] bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold">Company A</h3>
            <p className="text-sm">CEO</p>
            <p className="mt-4">"Great service! Helped us streamline our processes."</p>
          </div>
          <div className="min-w-[300px] bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold">Company B</h3>
            <p className="text-sm">CEO</p>
            <p className="mt-4">"Great service! Helped us streamline our processes."</p>
          </div>
          <div className="min-w-[300px] bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold">Company C</h3>
            <p className="text-sm">CEO</p>
            <p className="mt-4">"Great service! Helped us streamline our processes."</p>
          </div>
          <div className="min-w-[300px] bg-gray-100 p-6 shadow-md">
            <h3 className="text-xl font-semibold">Company D</h3>
            <p className="text-sm">CTO</p>
            <p className="mt-4">Incredible results with AI integration.</p>
          </div>
        </div>
      </section>
    );
  }
  