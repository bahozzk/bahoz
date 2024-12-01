import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';
import Image from 'next/image'; // Next.js Image bileşenini import ettik

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
                        className='duration-150 hover:shadow-[0_0px_30px_0px_#fcb400]
