import Image from 'next/image';
import { Box, BarChart3, Workflow, Users } from 'lucide-react';

const features = [
  {
    icon: Box,
    title: "Tailored Solutions",
    description: "We understand that every business is unique. Our team collaborates closely with you to develop customized strategies that align with your specific goals and challenges.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600"
  },
  {
    icon: BarChart3,
    title: "Expertise Across Industries",
    description: "With a diverse portfolio, we bring extensive experience in various sectors, including healthcare, finance, retail, and manufacturing. Our insights help you navigate industry-specific challenges with confidence.",
    iconBg: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    icon: Workflow,
    title: "End-to-End Services",
    description: "From initial assessment to implementation and ongoing support, we offer a holistic approach to digital transformation.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description: "Our strategies are designed to place your customers at the center of your operations, ensuring their needs and preferences drive every decision.",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600"
  }
];

export const WhyUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          mask: 'linear-gradient(to bottom, transparent, black, transparent)',
          WebkitMask: 'linear-gradient(to bottom, transparent, black, transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
                <span className="text-blue-600 font-medium text-sm tracking-wider">
                  WHY US
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-4">
                Why Make Us Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  Trusted Partner
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Choose us to leverage expertise and innovation for your business&apos;s transformative journey towards success.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="relative flex gap-6 group p-4 rounded-2xl transition-all duration-300
                    bg-white ring-2 ring-gray-100 ring-offset-2
                    hover:translate-y-[-2px] hover:ring-8 hover:ring-blue-100 hover:ring-offset-8"
                  style={{
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${feature.iconBg} ${feature.iconColor} 
                    flex items-center justify-center transition-transform duration-300
                    group-hover:scale-110`}
                  >
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Abstract Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]"> {/* Updated aspect ratio */}
              <Image
                src="/abstract-waves.png"
                alt="Abstract waves representing digital transformation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-violet-500/20" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm 
                px-8 py-4 rounded-2xl shadow-lg flex gap-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-600">98%</div>
                  <div className="text-sm text-gray-600 text-nowrap">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
