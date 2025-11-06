import Image from 'next/image';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Footer: NextPage = (pageProps: PageProps): JSX.Element => {
    return (
        <footer className='relative mt-24 pt-16 pb-8'>
            {/* Decorative Top Line */}
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
            
            <div className='px-6 max-w-7xl mx-auto'>
                {/* Avatar Section */}
                <div className='flex justify-center mb-12'>
                    <div className='relative group'>
                        <div className='absolute -inset-4 bg-white/5 rounded-full opacity-40 group-hover:opacity-70 blur-2xl transition-all duration-700'></div>
                        <div 
                            className='relative p-2 rounded-full transition-all duration-500 group-hover:scale-105'
                            style={{
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                                backdropFilter: 'blur(60px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.25)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <Image
                                onMouseEnter={(e) => {
                                    (e.target as HTMLImageElement).src = '/assets/images/avatar-front.png';
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLImageElement).src = '/assets/images/avatar.png';
                                }}
                                className='rounded-full cursor-pointer transition-all duration-300'
                                src="/assets/images/avatar.png"
                                alt="Avatar"
                                width={96}
                                height={96}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Content */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60'>
                    <p className='text-center md:text-left'>
                        Designed By{' '}
                        <a
                            className='text-white/80 hover:text-white transition-colors duration-300 font-medium underline decoration-white/30 hover:decoration-white/60'
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/MustqfaCan'
                        >
                            Mustafa Can
                        </a>
                    </p>
                    
                    <p className='text-center md:text-right'>
                        <a
                            className='hover:text-white transition-colors duration-300 flex items-center gap-2 group'
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/bahozzk/bahoz'
                        >
                            <svg className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' fill='currentColor' viewBox='0 0 24 24'>
                                <path fillRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' clipRule='evenodd' />
                            </svg>
                            View on Github
                        </a>
                    </p>
                </div>

                {/* Copyright */}
                <div className='mt-8 text-center text-xs text-white/40'>
                    <p>© 2025 Bahoz</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
