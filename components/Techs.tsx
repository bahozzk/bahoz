import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useLanguage } from '../lib/LanguageContext';

const Qualifications: NextPage = (pageProps: PageProps) => {
  const { t } = useLanguage();

  const qualifications = [
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
          alt="UK Flag"
          className="w-32 h-20 rounded-lg object-cover"
        />
      ),
      description: 'B1+ English',
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
      description: 'A2 French',
      gradient: 'from-blue-700 via-white to-red-500',
    },
  ];

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 w-full flex flex-col items-center">
      <div className='max-w-5xl w-full'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16 fade-in-up'>
          <div className="relative inline-block">
            {/* Glow Layer */}
            <h2 
                className='absolute inset-0 z-0 text-4xl sm:text-5xl md:text-4xl font-bold mb-4 text-white blur-md opacity-60'
                aria-hidden="true"
            >
                {t('qualificationsTitle')}
            </h2>
            {/* Main Gradient Text */}
            <h2 
                className='relative z-10 text-4xl sm:text-5xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-white to-zinc-400'
                style={{
                    backgroundSize: '200% auto',
                    animation: 'shine 4s linear infinite',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
            >
                {t('qualificationsTitle')}
            </h2>
          </div>
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
                <div className='absolute -inset-2 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300 pointer-events-none'></div>
                
                {/* Card Content - Compact Glass */}
                <div className="relative glass-card p-6 sm:p-8 flex flex-col items-center justify-center space-y-4 sm:space-y-5 h-full group-hover:scale-[1.03] transition-all duration-300 ease-out overflow-hidden group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  {/* Premium Radial Glow Overlay */}
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]' />
                  
                  {/* Flag Container - Smaller */}
                  <div 
                    className="relative rounded-2xl overflow-hidden p-2 shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105"
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
                  <p className="text-center text-white/95 font-bold text-base sm:text-lg tracking-wide transition-colors duration-300 group-hover:text-white">
                    {data.description}
                  </p>
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
