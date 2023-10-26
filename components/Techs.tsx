import ReactPlayer from 'react-player';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {

  return (
<div className='my-20 md:px-8 w-full flex flex-col items-center'>
  <h2 className='font-bold text-lg uppercase'>Teknolojiler</h2>
  <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
    <div className="react-player-wrapper">
      <ReactPlayer
        url="https://media.discordapp.net/attachments/1140520610141847552/1167127062516080776/Dilan_Polat_-_Enercii720P_HD.mp4"
        type="audio"
        controls={true}
      />
    </div>
  </div>
</div>
  );
};

export default Techs;
