'use client'
import { ArrowRightIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
      
      {/* Desktop Navigation Links */}
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
        className="hidden sm:flex bg-blue-700 text-white group px-4 text-sm lg:text-base py-1.5 lg:px-8 lg:py-2.5 items-center gap-2 rounded-full hover:bg-blue-800 transition-colors duration-200"
        aria-label="Talk to us"
      >
        Talk to Us
        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2.5 transition-transform"/>
      </Link>
      
      {/* Mobile Hamburger Menu Button */}
      <button 
        className="sm:hidden ml-2 p-1 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        onClick={toggleSidebar}
        aria-expanded={isSidebarOpen}
        aria-label="Toggle navigation menu"
      >
        <Menu className="w-6 h-6" />
      </button>
      
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black/50 bg-opacity-30 z-50 sm:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 h-full w-[80%] bg-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-blue-700 text-xl">AiClues</h2>
              <button 
                onClick={closeSidebar}
                className="p-1 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((navItem) => (
                <Link
                  key={navItem.label}
                  href={navItem.href}
                  className="text-gray-700 hover:text-blue-700 py-2 transition-colors duration-200 border-b border-gray-100"
                  onClick={closeSidebar}
                >
                  {navItem.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-4">
              <Link
                href="#contact"
                className="bg-blue-700 text-white w-full group px-4 py-2 flex items-center justify-center gap-2 rounded-full hover:bg-blue-800 transition-colors duration-200"
                aria-label="Talk to us"
                onClick={closeSidebar}
              >
                Talk to Us
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2.5 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}