import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const AboutMe: NextPage = (pageProps: PageProps): JSX.Element => {
    const links = [
        {
            icon: faGithub,
            href: '/github'
        },
        {
            icon: faInstagram,
            href: '/instagram'
        },
        {
            icon: faTwitter,
            href: '/twitter'
        },
        {
            icon: faDiscord,
            href: '/discord'
        },
        {
            icon: faYoutube,
            href: '/youtube'
        }
    ];

    const content = <p className='text-center my-4 text-lg text-white/80'>
        Hi! I&apos;m a Jr Full Stack Web Developer and I&apos;m coding apps, bots, API&apos;s and websites.
        <br></br>
        Also, since I&apos;m a high school student, I can only code in my spare time.
        <br></br>
        But if you have a project in your mind, don&apos;t hesitate to contact me, I&apos;m a freelancer!
        <br></br>
        Currently I am the owner and sole developer of the <a className='text-purple-400/90' target={'_blank'} href='https://caneria.net/' rel="noreferrer">Caneria</a>!
    </p>

    return (
        <div id="aboutme" className='my-4 md:px-8 w-full mb-20 flex flex-col items-center'>
            <h2 className='font-bold text-lg uppercase'>About Me</h2>
            <div className='flex flex-row flex-wrap items-center justify-center max-w-4xl'>
                <div className='block'>
                    {content}
                    <div className='flex flex-row flex-wrap items-center justify-center'>
                        {links.map((data, index) => <a className='m-3' rel="noreferrer" target={'_blank'} href={data.href} key={`link${index}`}>
                            <FontAwesomeIcon className='text-white/90 hover:text-purple-400/90 duration-150' size={'2x'} icon={data.icon} />
                        </a>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;