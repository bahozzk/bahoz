import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useState, useEffect } from 'react';
import style from '../styles/home.module.css';

const Hero: NextPage = (pageProps: PageProps): JSX.Element => {
    const [discordStatus, setDiscordStatus] = useState<string | null>(null);

    // Discord durumunu çek
    useEffect(() => {
        const fetchDiscordStatus = async () => {
            try {
                const response = await fetch('/api/discord');
                const data = await response.json();
                if (data.activities && data.activities.length > 0) {
                    const playingGame = data.activities.find((activity: any) => activity.type === 0); // Oynuyor kısmını bul
                    setDiscordStatus(playingGame ? `Oynuyor: ${playingGame.name}` : "Şu anda bir şey oynamıyor.");
                } else {
                    setDiscordStatus("Şu anda bir şey yapmıyor.");
                }
            } catch (error) {
                console.error("Discord durumu alınamadı:", error);
                setDiscordStatus("Durum alınamadı.");
            }
        };

        fetchDiscordStatus();
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-row lg:flex-col justify-center items-center my-8 py-6">
                <div className="block m-10 lg:m-2">
                    <img className="block h-72 w-72" src="/assets/images/avatar.png" />
                </div>
                <div className="block m-10 lg:m-2">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-6xl md:text-5xl font-semibold my-3 text-center uppercase tracking-wide">
                            Bahoz
                        </h1>
                        <div className="block">
                            {/* Discord durumunu burada göster */}
                            <p className="text-xl md:text-lg my-3 text-center">
                                {discordStatus || "Yükleniyor..."}
                            </p>
                        </div>
                    </div>
                    <div className="animate-bounce h-10 m-7 flex flex-row items-center justify-center cursor-pointer">
                        <span
                            onClick={() => {
                                document.getElementById("aboutme")?.scrollIntoView();
                            }}
                            className="text-lg md:text-base"
                        >
                            More... <FontAwesomeIcon icon={faCircleDown} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
