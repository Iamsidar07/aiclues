import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id='about' className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />
      
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          mask: 'linear-gradient(to bottom, transparent, black, transparent)',
          WebkitMask: 'linear-gradient(to bottom, transparent, black, transparent)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4 backdrop-blur-sm">
            <span className="text-blue-600 font-medium text-sm tracking-wider">
              ABOUT US
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Who We Are?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden"
                 style={{
                   boxShadow: '0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.05)'
                 }}>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              
              {/* Main Image */}
              <div className="relative aspect-[480/500]">
                <Image
                  src="/team-member.png"
                  alt="Team member in office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-500/5" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 -right-4 bg-white px-6 py-3 rounded-full shadow-xl">
                <span className="text-blue-600 font-semibold">10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-6 [&>p]:text-gray-600 [&>p]:leading-relaxed">
              <p>
                At <span className="text-blue-600 font-semibold">AiClues</span>, we are passionate about empowering businesses to thrive in the digital age. As a team of experienced professionals, we specialize in providing innovative digital transformation services that help organizations streamline operations, enhance customer engagement, and drive growth.
              </p>

              <p>
                Our diverse team brings together expertise in technology, business strategy, design, and customer experience. We understand that each client is unique, and we pride ourselves on developing tailored solutions that address your specific challenges and goals.
              </p>

              <p>
                We believe in the power of collaboration, working closely with our clients to ensure that every project aligns with their vision and objectives. Our commitment to excellence and customer satisfaction is at the heart of everything we do.
              </p>

              <p>
                With a proven track record of success across various industries, including small to medium businesses and municipalities, we have the skills and insights to navigate the complexities of digital transformation.
              </p>
            </div>

            <div className="pt-8">
              <Link 
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-full transition-all duration-300"
              >
                Read our full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
