export default function Team() {
  return (
    <section id="team" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold">Our Team</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 shadow-md">
          <img src="/team1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Member 1</h3>
          <p>Role</p>
        </div>
        <div className="bg-white p-6 shadow-md">
          <img src="/team2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Member 2</h3>
          <p>Role</p>
        </div>
        <div className="bg-white p-6 shadow-md">
          <img src="/team2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Member 3</h3>
          <p>Role</p>
        </div>
      </div>
    </section>
  );
}