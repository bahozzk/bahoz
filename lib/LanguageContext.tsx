import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'tr' | 'fr';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations = {
  // Hero
  heroGreeting: {
    en: "Hi, I'm",
    tr: "Merhaba, Ben",
    fr: "Bonjour, je suis",
  },
  heroRole: {
    en: "Vibe Coder & Digital Enthusiast",
    tr: "Vibe Coding ile Uğraşıyor",
    fr: "Passionné de Vibe Coding & Numérique",
  },
  heroBio: {
    en: "Crafting modern web experiences, applications, and creative digital solutions with modern technology stack.",
    tr: "Modern teknolojiler kullanarak dijital deneyimler, uygulamalar ve yaratıcı çözümler üretiyorum.",
    fr: "Création d'expériences web modernes, d'applications et de solutions numériques créatives.",
  },
  viewProjects: {
    en: "View My Projects",
    tr: "Projelerimi İncele",
    fr: "Voir Mes Projets",
  },
  playing: {
    en: "Playing",
    tr: "Oynuyor",
    fr: "En train de jouer",
  },
  listeningTo: {
    en: "Listening to",
    tr: "Dinliyor",
    fr: "Écoute",
  },
  streamingOn: {
    en: "Streaming on",
    tr: "Yayın yapıyor",
    fr: "En stream sur",
  },
  activeIn: {
    en: "Active in",
    tr: "Aktif:",
    fr: "Actif sur",
  },

  // Organizations / Projects
  whatAmIDoing: {
    en: "What Am I Doing?",
    tr: "Neler Yapıyorum?",
    fr: "Que fais-je ?",
  },
  projectsSubtitle: {
    en: "Featured projects & active contributions",
    tr: "Öne çıkan projeler ve katkılar",
    fr: "Projets en vedette & contributions actives",
  },
  wgtfDesc: {
    en: "A digital experience and website created as a submission for the Maison des Jeunes contest for the WGTF 2026 hip-hop festival by Nextape.",
    tr: "Nextape bünyesindeki WGTF 2026 hip-hop festivali için Maison des Jeunes yarışması başvurusu olarak oluşturulmuş bir web deneyimi.",
    fr: "Une expérience numérique et un site web créés dans le cadre du concours Maison des Jeunes pour le festival hip-hop WGTF 2026 par Nextape.",
  },
  ivymcDesc: {
    en: "Choose your climate and build your world in the IvyMC server! Fight creatures in the wild world!",
    tr: "IvyMC sunucusunda ikliminizi seçin ve dünyanızı inşa edin! Vahşi dünyada yaratıklarla savaşın!",
    fr: "Choisissez votre climat et construisez votre monde sur le serveur IvyMC ! Combattez des créatures dans un monde sauvage !",
  },

  // Qualifications
  qualificationsTitle: {
    en: "Qualifications",
    tr: "Yetenekler & Diller",
    fr: "Qualifications",
  },

  // Donation
  donationTitle: {
    en: "Ce projet a été codé avec passion. 💻✨",
    tr: "Bu proje tutkuyla kodlandı. 💻✨",
    fr: "Ce projet a été codé avec passion. 💻✨",
  },
  donationDesc: {
    en: "Support the developer behind this creative experience.",
    tr: "Bu yaratıcı deneyimin arkasındaki geliştiriciyi destekleyin.",
    fr: "Soutenez le développeur derrière cette expérience créative.",
  },
  makeDonation: {
    en: "Make a Donation",
    tr: "Bağış Yap",
    fr: "Faire un don",
  },

  // Footer
  designedBy: {
    en: "Designed By",
    tr: "Tasarımcı:",
    fr: "Conçu par",
  },
  viewOnGithub: {
    en: "View on Github",
    tr: "Github'da Görüntüle",
    fr: "Voir sur Github",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // 1. Saved preference in localStorage
    const savedLang = localStorage.getItem('user_lang') as Language | null;
    if (savedLang && ['en', 'tr', 'fr'].includes(savedLang)) {
      setLanguage(savedLang);
      return;
    }

    // 2. GeoIP / Region Detection
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        const country = data.country_code?.toUpperCase();
        if (country === 'TR') {
          setLanguage('tr');
        } else if (country === 'FR') {
          setLanguage('fr');
        } else {
          setLanguage('en');
        }
      })
      .catch(() => {
        // Fallback to Browser language
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (browserLang === 'tr') setLanguage('tr');
        else if (browserLang === 'fr') setLanguage('fr');
        else setLanguage('en');
      });
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('user_lang', lang);
  };

  const t = (key: keyof typeof translations): string => {
    if (!translations[key]) return key;
    return translations[key][language] || translations[key]['en'];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
