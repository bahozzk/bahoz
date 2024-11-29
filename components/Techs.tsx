import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'; // Voleybol ikonu
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {
  const techs = [
    {
      // İngiltere bayrağını görsel olarak ekliyoruz
      icon: (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" 
             alt="UK Flag" 
             className="w-24 h-24" />
      ),
      href: '',
      description: 'B1 English'
    },
    {
      // Voleybol ikonu
      icon: <FontAwesomeIcon color={'#ffcc00'} size="6x" icon={faVolleyballBall} />,
      href: 'https://grabagame.com/volleyball-skill-levels/',
      description: 'B+ Volleyball'
    },
    // Daha fazla nitelik ekleyebilirsiniz
  ];

  return (
    <div className='my-20 md:px-8 w-full flex flex-col items-center'>
      <h2 className='font-bold text-lg uppercase'>Qualifications</h2>
      <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
        {techs.map((data, index) => (
          <div className="m-6 flex flex-col items-center" key={`techs${index}`}>
            {data.icon}
            <p className="mt-2 text-center">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
