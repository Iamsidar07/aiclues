import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { GradientText } from "./GradientText";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="py-12 lg:py-24 h-[calc(100vh-70px)] relative">
      <div className="max-w-5xl mx-auto h-full flex flex-col items-center justify-center gap-12 text-center px-6">
        <h1 className="text-2xl lg:text-6xl font-semibold lg:text-bold text-center leading-snug">
          <GradientText>Transforming Businesses</GradientText> for <br /> the
          Digital Age
        </h1>
        <p className="max-w-sm lg:max-w-3xl mx-auto leading-relaxed text-gray-600 text-base lg:text-lg">
          In today’s fast-paced digital landscape, organizations must evolve to
          stay competitive. At AiClues, we specialize in empowering businesses
          through comprehensive digital transformation services. Our mission is
          to guide you through every step of your digital journey, ensuring you
          harness the full potential of technology to drive innovation,
          efficiency, and growth.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <Link
            href="#contact"
            className="bg-blue-700 text-white group px-8 py-2.5 flex items-center gap-2 rounded-full hover:bg-blue-800 transition-colors duration-200"
            aria-label="Lets get started"
          >
            Lets Get Started
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2.5 transition-transform" />
          </Link>
          <Link
            href="#discover-more"
            className="bg-transparent border border-blue-600 text-blue-700 group px-8 py-2.5 flex items-center gap-2 rounded-full transition-colors duration-200"
            aria-label="Discover More"
          >
            Discover More
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2.5 transition-transform" />
          </Link>
        </div>
      </div>
     
    </section>
  );
};
