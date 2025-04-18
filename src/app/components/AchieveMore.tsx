import { BarChart3, Settings } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Strategic Planning",
    description: "A methodical approach to setting goals, making informed decisions, and driving business growth.",
    bgColor: "bg-indigo-500",
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "Customize Solution",
    description: "Tailored strategies and tools, designed to perfectly address your unique business needs.",
    bgColor: "bg-pink-500",
  },
];

export const AchieveMore = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-[#f6f9fc]">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          mask: 'linear-gradient(to bottom, transparent, black, transparent)',
          WebkitMask: 'linear-gradient(to bottom, transparent, black, transparent)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-center">
          {/* Left Column - Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-blue-50 border border-blue-100">
              <h3 className="text-blue-600 font-medium text-sm tracking-wider">
                ACHIEVE MORE
              </h3>
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Take Your Business to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Next Level
              </span>
            </h2>
          </div>

          {/* Right Column - Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.05)'
                }}
              >
                <div
                  className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-700/5 to-white/5"
                  style={{
                    // background: 'linear-gradient(45deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))',
                    transform: 'scale(1.02)',
                    zIndex: -1
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
