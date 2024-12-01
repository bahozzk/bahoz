import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Footer: NextPage = (pageProps: PageProps): JSX.Element => {
    return (
        <footer className='pt-10'>
            <div className='block flex w-full flex-row md:justify-start items-center justify-center'>
                <img onMouseEnter={(e) => {
                    (e.target as Element)?.setAttribute(
                        'src',
                        '/assets/images/avatar-front.png'
                    );
                }} 
                onMouseLeave={(e) => {
                    (e.target as Element)?.setAttribute(
                        'src',
                        '/assets/images/avatar.png'
                    );
                }}
                className='block h-32 w-32 absolute bottom-0 allow-pointer' src="/assets/images/avatar.png" />
            </div>
            <div className='border-t border-white/10 border-solid'>
                <div className='md:flex-col-reverse flex flex-row items-center md:items-end justify-between px-[7%] py-6 md:py-4'>
                    <p>Designed By <a className='text-purple-400/90 underline' target={'_blank'} href='https://github.com/MustqfaCan'>Mustafa Can</a></p>
                    <p className='md:mb-1'><a className='hover:text-white/70 duration-100' target={'_blank'} href='https://github.com/bahozzk/bahoz' rel="noreferrer">View on Github</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
