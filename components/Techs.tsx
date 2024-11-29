import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faSquareJs, faNpm, faReact, faVuejs, faGitAlt, faUbuntu } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Techs: NextPage = (pageProps: PageProps): JSX.Element => {
  const techs = [
    {
      //JS Icon
      icon: <FontAwesomeIcon color={'#efd81d'} size="6x" icon={faSquareJs} />,
      href: 'https://www.javascript.com/'
    },
    {
      //Node.JS Icon
      icon: <FontAwesomeIcon color={'#509941'} size="6x" icon={faNodeJs} />,
      href: 'https://nodejs.org/'
    },
    {
      //TS Icon
      icon: <svg xmlns="http://www.w3.org/2000/svg" className='rounded-lg' viewBox="0 0 400 400" width="84" height="84">
        <path style={{ fill: '#2f74c0' }} d="M0 200V0h400v400H0" />
        <path style={{ fill: '#fff' }} d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" />
      </svg>,
      href: 'https://www.typescriptlang.org/'
    },
    {
      //NPM Icon
      icon: <FontAwesomeIcon color={'#c53635'} size="6x" icon={faNpm} />,
      href: 'https://www.npmjs.com/'
    },
    {
      //Vue Icon
      icon: <FontAwesomeIcon color={'#3fb27f'} size="6x" icon={faVuejs} />,
      href: 'https://vuejs.org/'
    },
    {
      //React Icon
      icon: <FontAwesomeIcon color={'#00d1f7'} size="6x" icon={faReact} />,
      href: 'https://reactjs.org/'
    },
    {
      //Git Icon
      icon: <FontAwesomeIcon color={'#e84d31'} size="6x" icon={faGitAlt} />,
      href: 'https://git-scm.com/'
    },
    {
      //Ubuntu Icon
      icon: <FontAwesomeIcon color={'#d64613'} size="6x" icon={faUbuntu} />,
      href: 'https://ubuntu.com'
    }
  ]

  return (
    <div className='my-20 md:px-8 w-full flex flex-col items-center'>
      <h2 className='font-bold text-lg uppercase'>Qualifications</h2>
      <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
        {techs.map((data, index) => <a target={'_blank'} rel="noreferrer" href={data.href} className={`m-6 flex flex-row items-center`} key={`techs${index}`}>
          {data.icon}
        </a>)}
      </div>
    </div>
  );
};

export default Techs;
