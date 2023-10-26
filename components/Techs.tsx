import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faSquareJs, faNpm, faReact, faVuejs, faGitAlt, faUbuntu } from '@fortawesome/free-brands-svg-icons';
import ReactPlayer from 'react-player';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {
  const techs = [
    {
      //JS Icon
      icon: <FontAwesomeIcon color={'#efd81d'} size="6x" icon={faSquareJs} />,
      href: 'https://www.javascript.com/'
    }
  ];

  return (
    <div className='my-20 md:px-8 w-full flex flex-col items-center'>
      <h2 className='font-bold text-lg uppercase'>Teknolojiler</h2>
      <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
        {techs.map((data, index) => (
          <a
            target={'_blank'}
            rel="noreferrer"
            href={data.href}
            className={`m-6 flex flex-row items-center`}
            key={`techs${index}`}
          >
            {data.icon}
          </a>
        ))}

        <ReactPlayer
          url="https://youtu.be/fQBqaga9ElU?si=bukykJKMv05_5Hwp"
          type="audio"
          controls={true}
        />
      </div>
    </div>
  );
};

export default Techs;
