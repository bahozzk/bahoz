import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faVolleyballBall } from '@fortawesome/free-solid-svg-icons'; // İkonlar
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {
  const techs = [
    {
      icon: <FontAwesomeIcon color={'#00d1f7'} size="6x" icon={faComment} />,
      href: '',
      description: 'Fluent in English, proficient in conversation and writing.'
    },
    {
      icon: <FontAwesomeIcon color={'#ffcc00'} size="6x" icon={faVolleyballBall} />,
      href: '',
      description: 'Able to play volleyball at an amateur level.'
    },
    // Buraya daha fazla nitelik ekleyebilirsiniz
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
