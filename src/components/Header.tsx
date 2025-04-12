import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobilenavLinks from "./Mobilenavelinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="flex items-center justify-between py-2 px-4 md:px-6 bg-primary shadow-md w-full sticky top-0 z-50 h-16 md:h-20">
      {/* Logo and Brand Name */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="images/logo.png" alt="Maison Flavour Logo" className="h-10 md:h-16" />
        <span className="text-base md:text-2xl font-bold text-primary">
          Maison Flavour
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden text-lg md:flex items-center space-x-6 text-primary font-semibold mr-16 pr-10">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/About" },
          { name: "Contact", path: "/Contact" },
          { name: "Careers", path: "/Careers" },

        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`hover:text-gray-600 transition ${
              location.pathname === item.path ? "text-yellow-600 underline" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-primary focus:outline-none ml-auto"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary shadow-lg lg:hidden">
          <MobilenavLinks setMenuOpen={setMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
