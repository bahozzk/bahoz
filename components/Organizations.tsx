import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';
import Image from 'next/image';
import { trackExternalLink } from '../lib/gtag';

const Organizations: NextPage = (pageProps: PageProps): JSX.Element => {
    const organizations = [
        {
            title: 'IvyMC Towny',
            href: 'https://ivymc.net',
            position: 'Founder',
            description: 'A Minecraft server focused on community building and town management.',
            iconPath: '/assets/images/sapka.png'  
        }
    ];

    return (
        <div className='py-16 sm:py-24 px-4 sm:px-6 w-full flex flex-col items-center'>
            <div className='max-w-5xl w-full'>
                {/* Section Header */}
                <div className='text-center mb-12 sm:mb-16 fade-in-up'>
                    <h2 className='text-4xl sm:text-5xl md:text-4xl font-bold mb-4 text-white'>
                        What Am I Doing?
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto rounded-full'></div>
                </div>

                {/* Organizations Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto'>
                    {organizations.map((data, index) => (
                        <a 
                            key={`org${index}`}
                            target={'_blank'} 
                            rel="noopener noreferrer" 
                            href={data.href}
                            className='group block'
                            onClick={() => trackExternalLink(data.href)}
                        >
                            <div className='glass-card p-6 sm:p-8 h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1'>
                                <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                                    {/* Icon Container - Left Aligned */}
                                    <div 
                                        className='flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-2 transition-transform duration-500 group-hover:scale-105 mx-auto sm:mx-0'
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                            backdropFilter: 'blur(40px) saturate(180%)',
                                            border: '1px solid rgba(255, 255, 255, 0.15)',
                                            boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)'
                                        }}
                                    >
                                        <div className='w-full h-full rounded-xl overflow-hidden bg-black/10'>
                                            <Image
                                                alt={data.title}
                                                width={96}
                                                height={96}
                                                src={data.iconPath}
                                                className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-700'
                                            />
                                        </div>
                                    </div>

                                    {/* Text Content - Right Side */}
                                    <div className='flex-1 flex flex-col justify-between space-y-3 text-center sm:text-left'>
                                        {/* Title */}
                                        <h3 className='font-bold text-xl sm:text-2xl text-white/95 group-hover:text-white transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2'>
                                            {data.title}
                                            <FontAwesomeIcon 
                                                icon={faArrowUpRightFromSquare} 
                                                className='text-xs sm:text-sm opacity-40 group-hover:opacity-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300'
                                            />
                                        </h3>
                                        
                                        {/* Position */}
                                        <p 
                                            className='text-xs sm:text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full inline-block self-center sm:self-start'
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                color: 'rgba(255, 255, 255, 0.7)'
                                            }}
                                        >
                                            {data.position}
                                        </p>

                                        {/* Description */}
                                        <p className='text-white/60 text-xs sm:text-sm leading-relaxed'>
                                            {data.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Hover Line */}
                                <div className='w-0 group-hover:w-full h-0.5 bg-white/20 rounded-full transition-all duration-700 mt-4 sm:mt-6'></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Organizations;
