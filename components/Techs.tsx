import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {
  const techs = [
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
          alt="UK Flag"
          className="w-20 h-20"
        />
      ),
      description: 'B1 English',
      hoverColors: 'hover:bg-gradient-to-r hover:from-blue-500 hover:via-red-500 hover:to-white',
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png"
          alt="France Flag"
          className="w-20 h-20"
        />
      ),
      description: 'A1 French',
      hoverColors: 'hover:bg-gradient-to-r hover:from-blue-500 hover:via-white hover:to-red-500',
    },
    {
      icon: (
        <div className="w-20 h-20 flex items-center justify-center">
          <FontAwesomeIcon color="#ffcc00" size="3x" icon={faVolleyballBall} />
        </div>
      ),
      description: 'B+ Volleyball',
      hoverColors: 'hover:bg-yellow-500',
    },
  ];

  return (
    <div className="my-20 md:px-8 w-full flex flex-col items-center">
      <h2 className="font-bold text-2xl uppercase tracking-wide text-gray-700 mb-10">
        Qualifications
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 max-w-4xl">
        {techs.map((data, index) => (
          <div
            key={`techs${index}`}
            className={`relative w-40 h-48 p-4 bg-black rounded-lg shadow-md flex flex-col items-center justify-between transition-all duration-300 ${data.hoverColors} group`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 z-0"></div>
            <div className="z-10">{data.icon}</div>
            <p className="z-10 text-center text-white mt-4 text-lg font-medium">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
