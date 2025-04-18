import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Services",
        href: "#services"
    },
    {
        label: "Our Process",
        href: "#process"
    },
    {
        label: "Why Us",
        href: "#why-us"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];

export default function Navbar() {
  return (
  <nav aria-label="Main navigation" className="bg-transparent mx-auto h-[68px] flex items-center justify-between gap-5 max-w-6xl px-4 py-2">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image src="/wave.svg" alt="pattern" fill className="object-cover" />
      </div>

      {/* Logo */}
      <Link href="/" aria-label="AiClues Home">
        <h1 className="font-bold text-blue-700 text-2xl lg:text-3xl">AiClues</h1>
      </Link>

      {/* Navigation Links */}
      <div className="hidden sm:flex items-center justify-center flex-1 gap-5">
        {NAV_ITEMS.map((navItem) => (
          <Link 
            key={navItem.label} 
            href={navItem.href}
            className="text-gray-500 hover:text-blue-700 transition-colors duration-200"
          >
            {navItem.label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link 
        href="#contact"
        className="bg-blue-700 text-white group px-4 text-sm lg:text-base py-1.5 lg:px-8 lg:py-2.5 flex items-center gap-2 rounded-full hover:bg-blue-800 transition-colors duration-200"
        aria-label="Talk to us"
      >
        Talk to Us
        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2.5 transition-transform"/>
      </Link>
    </nav>
  );
}
