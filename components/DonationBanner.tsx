import { useLanguage } from '../lib/LanguageContext';

interface Props {
  isDayMode: boolean;
  onOpenModal: () => void;
}

export default function DonationBanner({ isDayMode, onOpenModal }: Props) {
  const { t } = useLanguage();

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 z-10 mb-6 overflow-hidden">
      <div className={`p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 w-full max-w-full transition-all duration-[2500ms] ${
        isDayMode 
          ? 'bg-white/40 border border-white/50 shadow-lg backdrop-blur-md' 
          : 'bg-[#0f1423]/40 border border-white/10 shadow-lg backdrop-blur-xl'
      }`}>
        <div className="flex-1 text-center md:text-left min-w-0">
          <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-1.5 sm:mb-2 transition-colors duration-[2500ms] ${isDayMode ? 'text-slate-900' : 'text-white'}`}>
            {t('donationTitle')}
          </h3>
          <p className={`text-xs sm:text-sm md:text-base font-medium leading-relaxed transition-colors duration-[2500ms] ${isDayMode ? 'text-slate-700' : 'text-slate-300'}`}>
            {t('donationDesc')}
          </p>
        </div>
        
        <button 
          onClick={onOpenModal}
          className={`w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex-shrink-0 text-center ${
            isDayMode 
              ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:shadow-rose-500/25' 
              : 'bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white hover:shadow-pink-500/25'
          }`}
        >
          {t('makeDonation')}
        </button>
      </div>
    </section>
  );
}
