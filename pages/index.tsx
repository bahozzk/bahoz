import type { NextPage } from 'next';
import type { PageProps } from '../types';

import Hero from '../components/Hero';
import Organizations from '../components/Organizations';
import Techs from '../components/Techs';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

const Home: NextPage = (pageProps: PageProps): JSX.Element => {
  return (
    <div className='block'>
      <div className="after:content-[''] after:absolute after:w-full after:h-screen
  after:bg-gradient-to-b after:from-black/60 after:to-black/100
  absolute bg-[url('https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg')] bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen">
      </div>
      <div className='absolute w-full'>

        <Hero />
        <AboutMe />
        <Organizations />
        <Techs />
        <Footer />
        
      </div>
    </div>
  );
};

export default Home;
