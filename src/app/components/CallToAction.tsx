import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section id='contact' className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-b from-[#f6f9fc] to-blue-50/50 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
            style={{
              mask: 'linear-gradient(to bottom, transparent, black, transparent)',
              WebkitMask: 'linear-gradient(to bottom, transparent, black, transparent)',
            }}
          />
          
          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                Start Your Success Journey With Us Today!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Elevate your business to new heights with us! Contact us now for a personalized consultation and discover how our innovative, tailored solutions can drive your business growth.
              </p>
            </div>
            
            <Link
              href="mailto:support@aiclues.com"
              className="group relative inline-flex items-center justify-center px-6 py-3 rounded-full
                bg-blue-600 text-white font-medium 
                transition-all duration-300
                ring-2 ring-blue-600/20 ring-offset-2
                hover:ring-4 hover:ring-blue-600/30 hover:ring-offset-4
                hover:bg-blue-700"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-violet-100/40 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/40 to-violet-100/40 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};
