import type { NextPage } from 'next';
import type { PageProps } from '../types';

import Hero from '../components/Hero';
import Organizations from '../components/Organizations';
import Techs from '../components/Techs';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

const Home: NextPage = (pageProps: PageProps): JSX.Element => {
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
        <Techs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
