import ReactPlayer from 'react-player';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {

  return (
<div className='my-20 md:px-8 w-full flex flex-col items-center'>
  <h2 className='font-bold text-lg uppercase'>Favori Şarkım - Enercii</h2>
  <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
    <div className="react-player-wrapper">
      <ReactPlayer
        url="https://youtu.be/fQBqaga9ElU?si=54GQ26ZU5DC8xgPH"
        type="audio"
        controls={true}
      />
    </div>
  </div>
</div>
  );
};

export default Techs;
