import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faDiscord, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const AboutMe: NextPage = (pageProps: PageProps): JSX.Element => {
    const links = [
        {
            icon: faGithub,
            href: '/github',
            colorClass: 'hover:text-gray-800' // GitHub color
        },
        {
            icon: faInstagram,
            href: '/instagram',
            colorClass: 'hover:text-pink-600' // Instagram color
        },
        {
            icon: faTwitter,
            href: '/x',
            colorClass: 'hover:text-blue-400' // Twitter (X) color
        },
        {
            icon: faDiscord,
            href: '/discord',
            colorClass: 'hover:text-blue-500' // Discord color
        },
        {
            icon: faYoutube,
            href: '/youtube',
            colorClass: 'hover:text-red-600' // YouTube color
        },
        {
            icon: faSpotify,
            href: '/spotify',
            colorClass: 'hover:text-green-600' // Spotify color
        }
    ];

    const content = <p className='text-center my-4 text-lg text-white/80'>
        Hiya! I'm Bahoz,
        <br></br>
        I am interested in programming but I don't know any languages 🙃
    </p>; 

    return (
        <div id="aboutme" className='my-4 md:px-8 w-full mb-20 flex flex-col items-center'>
            <h2 className='font-bold text-lg uppercase'>About Me</h2>
            <div className='flex flex-row flex-wrap items-center justify-center max-w-4xl'>
                <div className='block'>
                    {content}
                    <div className='flex flex-row flex-wrap items-center justify-center'>
                        {links.map((data, index) => (
                            <a
                                className={`m-3 ${data.colorClass}`}
                                rel="noreferrer"
                                target={'_blank'}
                                href={data.href}
                                key={`link${index}`}
                            >
                                <FontAwesomeIcon
                                    className='text-white/90 duration-150'
                                    size={'2x'}
                                    icon={data.icon}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
