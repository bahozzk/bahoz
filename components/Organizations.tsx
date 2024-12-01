import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Organizations: NextPage = (pageProps: PageProps): JSX.Element => {
    const organizations = [
        {
            title: 'Student',
            href: 'https://mehmetraufanadolulisesi.meb.k12.tr/tema/iletisim.php',
            position: '11th Grade',
            icon: 'https://media.discordapp.net/attachments/818564854436462602/1312122008707793030/1732904656553.png?ex=674b5858&is=674a06d8&hm=7be8bc3c4c47e5492fc898b4f3fb7b34fb2a6dc7640e1cedaf83da4c77571d65&'
        }
    ];

    return (
        <div className='my-20 md:px-8 w-full flex flex-col items-center'>
            <h2 className='font-bold text-lg uppercase'>What am I doing?</h2>
            <div className='flex flex-row flex-wrap items-center justify-center max-w-3xl'>
                {organizations.map((data, index) => (
                    <div 
                        className='duration-150 hover:shadow-[0_0px_30px_0px_#fcb400] hover:shadow-[0_0px_30px_0px_#ffd700] m-4 bg-gray-500/10 px-4 py-2 rounded-lg flex flex-row justify-between' 
                        key={`techs${index}`}
                    >
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
