"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">///</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col items-center">
            <li className="my-2">
              <Link href="/">Inicio</Link>
            </li>
            <li className="my-2">
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="my-2">
              <Link href="/support">Soporte</Link>
            </li>
            <li className="my-2">
              <Link href="/about">Sobre nosotros</Link>
            </li>
            <li className="my-2">
              <Link href="/inteligencia">IA</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <li className="mr-6">
              <Link href="/">Inicio</Link>
            </li>
            <li className="mr-6">
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="mr-6">
              <Link href="/support">Soporte</Link>
            </li>
            <li className="mr-6">
              <Link href="/about">Sobre nosotros</Link>
            </li>
            <li className="mr-6">
              <Link href="/inteligencia">IA</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
