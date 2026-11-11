import type { NextPage } from 'next';
import type { PageProps } from '../types';

import Hero from '../components/Hero';
import Organizations from '../components/Organizations';
import Langs from '../components/Langs';

import Footer from '../components/Footer';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DonationBanner from '../components/DonationBanner';
import DonationModal from '../components/DonationModal';

const Home: NextPage = (pageProps: PageProps) => {
  const router = useRouter();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [forceSuccess, setForceSuccess] = useState(false);

  useEffect(() => {
    if (router.query.redirect_status === 'succeeded') {
      setIsDonationModalOpen(true);
      setForceSuccess(true);
    }
  }, [router.query]);

  const handleCloseModal = () => {
    setIsDonationModalOpen(false);
    if (forceSuccess) {
      setForceSuccess(false);
      router.replace('/', undefined, { shallow: true });
    }
  };

  return (
    <div className='relative min-h-screen'>
      {/* Background Image with Subtle Overlay */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div className="absolute w-full h-full bg-[url('https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg')] bg-no-repeat bg-cover bg-center bg-fixed"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className='relative z-10'>
        <Hero />
        <div id="projects">
          <Organizations />
        </div>
        <Langs />
        
        <div className="py-4">
          <DonationBanner 
            isDayMode={false} 
            onOpenModal={() => {
              setForceSuccess(false);
              setIsDonationModalOpen(true);
            }} 
          />
        </div>

        <Footer />
      </div>

      <DonationModal 
        isOpen={isDonationModalOpen}
        onClose={handleCloseModal}
        isDayMode={false}
        forceSuccess={forceSuccess}
      />
    </div>
  );
};

export default Home;
