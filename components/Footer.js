export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">MASTORK</p>
        <p className="mt-2">© 2024 MASTORK. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#problems" className="hover:underline">Problems</a>
          <a href="#solutions" className="hover:underline">Solutions</a>
          <a href="#usecases" className="hover:underline">Use Case</a>
          <a href="#video" className="hover:underline">Video</a>
        </div>
      </div>
    </footer>
  );
}
