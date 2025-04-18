import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='overflow-hidden'>
      {/* Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <footer className="relative bg-gray-50/80">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
          style={{
            mask: 'linear-gradient(to bottom, transparent, black, black)',
            WebkitMask: 'linear-gradient(to bottom, transparent, black, black)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {/* About Section */}
            <div className="relative">
              <h3 className="text-lg font-semibold mb-4">About AiClues</h3>
              <p className="text-gray-600 leading-relaxed">
                At AiClues, we specialize in delivering innovative digital transformation solutions 
                that empower businesses to thrive in a rapidly changing world.
              </p>
            </div>

            {/* Contact Section */}
            <div className="relative">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <Link 
                href="mailto:support@aiclues.com"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                support@aiclues.com
              </Link>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="relative pt-8 mt-8 border-t border-gray-200/50">
            <p className="text-sm text-gray-600 text-center">
              © Copyright 2023-2024. Developed by{' '}
              <Link 
                href="/"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                AiClues
              </Link>
              . Powered by{' '}
              <Link 
                href="/"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Next.js
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-violet-100/20 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-violet-100/20 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
      </footer>
    </div>
  );
};
