import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useLanguage } from '../lib/LanguageContext';

const Langs: NextPage = (pageProps: PageProps) => {
  const { t } = useLanguage();

  const qualifications = [
    {
      flagSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
      alt: "UK Flag",
      description: t('englishLang'),
    },
    {
      flagSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png",
      alt: "France Flag",
      description: t('frenchLang'),
    },
  ];

  return (
    <div className="py-12 sm:py-24 px-4 sm:px-6 w-full max-w-full flex flex-col items-center overflow-hidden">
      <div className='max-w-5xl w-full'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-16 fade-in-up'>
          <div className="relative inline-block">
            {/* Glow Layer */}
            <h2 
                className='absolute inset-0 z-0 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white blur-md opacity-60'
                aria-hidden="true"
            >
                {t('qualificationsTitle')}
            </h2>
            {/* Main Gradient Text */}
            <h2 
                className='relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-white to-zinc-400'
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

        {/* Qualifications Grid - Responsive Side-by-Side */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-sm sm:max-w-xl mx-auto w-full">
          {qualifications.map((data, index) => (
            <div 
              key={`qual${index}`} 
              className="group fade-in-up w-full" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full w-full">
                {/* Subtle outer glow */}
                <div className='absolute -inset-1 sm:-inset-2 bg-white/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl sm:blur-2xl transition-all duration-300 pointer-events-none'></div>
                
                {/* Card Content - Compact Glass */}
                <div className="relative glass-card p-3.5 sm:p-6 md:p-8 flex flex-col items-center justify-center space-y-2.5 sm:space-y-4 h-full group-hover:scale-[1.03] transition-all duration-300 ease-out overflow-hidden group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  {/* Premium Radial Glow Overlay */}
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]' />
                  
                  {/* Flag Container - Scalable */}
                  <div 
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden p-1 sm:p-2 shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                      backdropFilter: 'blur(40px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={data.flagSrc}
                        alt={data.alt}
                        className="w-16 h-10 xs:w-20 xs:h-12 sm:w-28 sm:h-18 md:w-32 md:h-20 rounded-md sm:rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-center text-white/95 font-bold text-xs sm:text-base md:text-lg tracking-wide transition-colors duration-300 group-hover:text-white">
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

export default Langs;
