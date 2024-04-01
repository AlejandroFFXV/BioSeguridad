import "/src/app/globals.css";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <ul
      className="flex flex-wrap items-center justify-center mb-6 
    dark:text-white font-sans font-light text-2xl list-inside pt-5"
    >
      <li className="mr-4 md:mr-6 hover:underline">
        <Link href="/"> Inicio </Link>
      </li>
      <li className="mr-4 md:mr-6 hover:underline">
        <Link href="/faqs">FAQs</Link>
      </li>
      <li className="mr-4 md:mr-6 hover:underline">
        {" "}
        <Link href="/support">Support</Link>{" "}
      </li>
      <li className="mr-4 md:mr-6 hover:underline">
        <Link href="/about"> About us</Link>
      </li>
      <li className="mr-4 md:mr-6 hover:underline">
        <Link href="/inteligencia"> IA</Link>
      </li>
    </ul>
  );
};

export default Navbar;
