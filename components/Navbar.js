export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MASTORK</div>
        <div className="space-x-4">
          <a href="#problems" className="hover:underline">Problems</a>
          <a href="#solutions" className="hover:underline">Solutions</a>
          <a href="#usecases" className="hover:underline">Use Case</a>
          <a href="#video" className="hover:underline">Testimonials</a>
        </div>
      </div>
    </nav>
  );
}
