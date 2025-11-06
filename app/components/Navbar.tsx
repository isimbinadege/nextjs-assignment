import Link from "next/link";


  

export default function Navbar() {
  return (
    <header className="bg-rose-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide hover:text-rose-200 transition-colors cursor-pointer">
          MyApp
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <Link
            href="/"
            className="hover:text-rose-200 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-rose-200 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:text-rose-200 transition-colors duration-200"
          >
            Blog
          </Link>
        </nav>

        {/* Optional: Button / CTA */}
        <div>
          <button className="bg-white text-rose-700 font-semibold px-4 py-1 rounded hover:bg-rose-100 transition-colors duration-200">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}

