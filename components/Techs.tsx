import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Qualifications: NextPage = (pageProps: PageProps): JSX.Element => {
  const qualifications = [
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
          alt="UK Flag"
          className="w-32 h-20 rounded-lg object-cover"
        />
      ),
      description: 'B1 English',
      gradient: 'from-red-600 via-blue-500 to-red-600',
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png"
          alt="France Flag"
          className="w-32 h-20 rounded-lg object-cover"
        />
      ),
      description: 'A1 French',
      gradient: 'from-blue-700 via-white to-red-500',
    },
  ];

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 w-full flex flex-col items-center">
      <div className='max-w-5xl w-full'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16 fade-in-up'>
          <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4 text-white">
            Qualifications
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto rounded-full'></div>
        </div>

        {/* Qualifications Grid - Compact */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {qualifications.map((data, index) => (
            <div 
              key={`qual${index}`} 
              className="group fade-in-up w-full sm:w-[calc(50%-12px)] max-w-[280px]" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full">
                {/* Subtle outer glow */}
                <div className='absolute -inset-2 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700'></div>
                
                {/* Card Content - Compact Glass */}
                <div className="relative glass-card p-6 sm:p-8 flex flex-col items-center justify-center space-y-4 sm:space-y-5 h-full group-hover:scale-[1.03] transition-all duration-500">
                  {/* Flag Container - Smaller */}
                  <div 
                    className="relative rounded-2xl overflow-hidden p-2 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                      backdropFilter: 'blur(40px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      {data.icon}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-center text-white/95 font-bold text-base sm:text-lg tracking-wide">
                    {data.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className='w-0 group-hover:w-16 h-1 bg-white/20 rounded-full transition-all duration-700'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
