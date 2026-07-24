import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faDiscord, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const AboutMe: NextPage = (pageProps: PageProps) => {
    const links = [
        {
            icon: faGithub,
            href: '/github',
            colorClass: 'hover:text-gray-300',
            label: 'GitHub'
        },
        {
            icon: faInstagram,
            href: '/instagram',
            colorClass: 'hover:text-pink-400',
            label: 'Instagram'
        },
        {
            icon: faTwitter,
            href: '/x',
            colorClass: 'hover:text-blue-400',
            label: 'Twitter'
        },
        {
            icon: faDiscord,
            href: '/discord',
            colorClass: 'hover:text-indigo-400',
            label: 'Discord'
        },
        {
            icon: faYoutube,
            href: '/youtube',
            colorClass: 'hover:text-red-500',
            label: 'YouTube'
        },
        {
            icon: faSpotify,
            href: '/spotify',
            colorClass: 'hover:text-green-400',
            label: 'Spotify'
        }
    ];

    return (
        <div id="aboutme" className='py-24 px-6 w-full flex flex-col items-center'>
            <div className='max-w-4xl w-full'>
                {/* Section Header */}
                <div className='text-center mb-16 fade-in-up'>
                    <div className="relative inline-block">
                        {/* Glow Layer */}
                        <h2 
                            className='absolute inset-0 z-0 text-5xl md:text-4xl font-bold mb-4 text-white blur-md opacity-60'
                            aria-hidden="true"
                        >
                            About Me
                        </h2>
                        {/* Main Gradient Text */}
                        <h2 
                            className='relative z-10 text-5xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-white to-zinc-400'
                            style={{
                                backgroundSize: '200% auto',
                                animation: 'shine 4s linear infinite',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            About Me
                        </h2>
                    </div>
                </div>

                {/* Content Card */}
                <div className='glass-card p-12 mb-12 fade-in-up'>
                    <p className='text-center text-xl md:text-lg leading-relaxed text-white/85 font-light'>
                        Hiya! I&apos;m <span className='font-semibold text-white'>Bahoz</span>,
                        <br />
                        <span className='inline-block mt-3'>
                            I am interested in programming but I don&apos;t know any languages 🙃
                        </span>
                    </p>
                </div>

                {/* Social Links */}
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    {links.map((data, index) => (
                        <a 
                            className='group relative' 
                            rel="noreferrer" 
                            target={'_blank'} 
                            href={data.href} 
                            key={`link${index}`}
                            aria-label={data.label}
                        >
                            <div 
                                className='w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1'
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                    backdropFilter: 'blur(60px) saturate(180%)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <FontAwesomeIcon 
                                    className={`text-white/75 group-hover:text-white ${data.colorClass} transition-all duration-300`} 
                                    size={'lg'} 
                                    icon={data.icon} 
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
