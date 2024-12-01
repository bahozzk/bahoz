import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'; // Voleybol ikonu
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {
  const techs = [
    {
      icon: (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" 
          alt="UK Flag" 
          className="w-full h-full object-cover rounded-lg" 
        />
      ),
      href: '',
      description: 'B1 English'
    },
    {
      icon: (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png" 
          alt="France Flag" 
          className="w-full h-full object-cover rounded-lg" 
        />
      ),
      href: '',
      description: 'A1 French'
    },
    {
      icon: (
        <div className="w-full h-full flex items-center justify-center bg-yellow-100 rounded-lg">
          <FontAwesomeIcon color="#ffcc00" size="3x" icon={faVolleyballBall} />
        </div>
      ),
      href: 'https://grabagame.com/volleyball-skill-levels/',
      description: 'B+ Volleyball'
    },
  ];

  return (
    <div className="my-20 md:px-8 w-full flex flex-col items-center">
      <h2 className="font-bold text-2xl uppercase tracking-wide text-gray-700 mb-10">
        Qualifications
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 max-w-4xl">
        {techs.map((data, index) => (
          <a
            href={data.href || '#'}
            target={data.href ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group w-32 h-40 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-between transition-transform transform hover:scale-105"
            key={`techs${index}`}
          >
            <div className="w-24 h-24 mb-3">{data.icon}</div>
            <p className="text-center text-gray-600 group-hover:text-gray-800 font-medium">
              {data.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Techs;
