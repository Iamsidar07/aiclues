import Image from 'next/image';

const processSteps = [
  {
    title: "Discovery",
    description: "We start by understanding your business, identifying pain points, and exploring opportunities for growth."
  },
  {
    title: "Strategy Development",
    description: "Our experts craft a comprehensive digital transformation strategy that aligns with your business objectives."
  },
  {
    title: "Implementation",
    description: "We work collaboratively with your team to deploy the necessary technologies and processes, ensuring a smooth transition."
  },
  {
    title: "Optimization",
    description: "We continuously monitor performance, gather feedback, and make necessary adjustments to ensure your solutions are delivering maximum value."
  },
  {
    title: "Monitoring & Support",
    description: "Post-implementation, we provide continuous support and optimization to adapt to evolving business needs."
  }
];

export const OurProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6">
          <div className="text-sm font-medium text-blue-600 mb-2">
            OUR PROCESS
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            How we do it?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              We believe that a structured approach is key to successful digital
              transformation. Our process is designed to be collaborative, flexible, and
              tailored to meet the unique needs of each client. We prioritize
              understanding your business, your goals, and your customers to create
              solutions that drive meaningful results.
            </p>

            {/* Process Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-blue-600" />
                  <div>
                    <h3 className="text-gray-900 font-medium mb-1">
                      {step.title}:
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/process-image.png"
                alt="Professional woman in office setting"
                width={480}
                height={500}
                className="object-cover rounded-2xl"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/5 to-gray-900/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};