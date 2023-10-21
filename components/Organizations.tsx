import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Organizations: NextPage = (pageProps: PageProps): JSX.Element => {
    const organizations = [
        {
            title: 'Caneria Bot',
            href: 'https://caneria.net/',
            position: 'Founder',
            icon: 'https://caneria.net/assets/icons/favicon-round.png'
        },
        {
            title: 'Con City',
            href: 'https://con.city/',
            position: 'Developer',
            icon: 'https://cdn.discordapp.com/icons/1010858209881362432/acf3ffbee2e416cd505df2055b5045c3.png?size=256'
        },
        {
            title: 'Alpaca Bot',
            href: 'https://alpacabot.xyz/',
            position: 'Lead Developer',
            icon: 'https://alpacabot.xyz/assets/images/icons/cTkfInE.png'
        }
    ];

    return (
        <div className='my-20 md:px-8 w-full flex flex-col items-center'>
            <h2 className='font-bold text-lg uppercase'>Organizations</h2>
            <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
                {organizations.map((data, index) => <div className='duration-150 hover:shadow-[0_0px_30px_0px_#7947d6] m-4 bg-gray-500/10 px-4 py-2 rounded-lg' key={`techs${index}`}>
                    <a target={'_blank'} rel="noreferrer" href={data.href}
                        className={`flex flex-row items-center justify-center py-1 w-[300px]`}>
                        <img className='mr-2' alt={`Organization ${index} - Icon`} width="120" height="120" src={data.icon} />
                        <div className='mx-2 text-center'>
                            <div className='font-semibold text-lg'>{data.title}</div>
                            <div className='text-white/50 text-sm'>{data.position}</div>
                        </div>
                    </a>
                </div>
                )}
            </div>
        </div>
    );
};

export default Organizations;