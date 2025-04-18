import { Code2, Cpu, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    title: "Digital Strategy Consulting",
    description:
      "Our consultants work closely with your team to develop a clear, actionable digital strategy that aligns with your business goals. We help you identify opportunities for innovation and growth, ensuring you stay ahead of the competition.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-600" />,
    title: "Product Development",
    description:
      "Our experienced team collaborates with you from concept to launch, employing agile methodologies to ensure your product is developed efficiently and meets market needs. We create high-quality, scalable solutions that drive value for your business and customers.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Professional Services",
    description:
      "We offer specialized services to businesses and municipalities, focusing on compliance, dispute resolution, governance, policy development, project management, business development, and process improvement to enhance efficiency and drive success.",
  },
];

export const WhatWeOffer = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#f6f9fc]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          mask: "linear-gradient(to bottom, transparent, black, transparent)",
          WebkitMask: "linear-gradient(to bottom, transparent, black, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We examine all catalysts of transformation – starting from the basics, and
            we&apos;ll inspire and assist you in making the desired transition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 transition-all duration-300 
                ring-2 ring-gray-100 ring-offset-2
                hover:translate-y-[-2px] hover:ring-4 hover:ring-blue-100 hover:ring-offset-4
                focus-within:ring-4 focus-within:ring-blue-100 focus-within:ring-offset-4"
              style={{
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              {/* Icon Container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 
                  bg-blue-50 ring-2 ring-gray-100
                  group-hover:bg-blue-100 group-hover:ring-blue-200 
                  group-hover:scale-105 
                  transition-all duration-300"
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div
                className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 
                  group-hover:opacity-100 pointer-events-none"
                style={{
                  background: "linear-gradient(45deg, rgba(59,130,246,0.03), rgba(37,99,235,0.03))",
                  transform: "scale(1.02)",
                  zIndex: -1,
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center justify-center px-6 py-3 rounded-full 
              bg-blue-600 text-white hover:bg-blue-700 
              ring-1 ring-blue-700 ring-offset-2
              hover:ring-2 hover:ring-blue-600 hover:ring-offset-4
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4
              transition-all duration-200"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 
              ease-out group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
