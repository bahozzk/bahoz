import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useState, useEffect } from 'react';
import style from '../styles/home.module.css';

const Hero: NextPage = (pageProps: PageProps): JSX.Element => {
    const [userActivity, setUserActivity] = useState<string>("Loading...");
    const [subTitleIndex, setSubTitleIndex] = useState(0);

    useEffect(() => {
        const fetchUserActivity = async () => {
            try {
                const response = await fetch('/api/discord');
                const data = await response.json();
                if (data.activity) {
                    setUserActivity(`Currently ${data.activity}`); // Kullanıcının etkinliğini göster
                }
            } catch (error) {
                console.error('Error fetching Discord user activity:', error);
                setUserActivity("Failed to fetch activity");
            }
        };

        fetchUserActivity();
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-row lg:flex-col justify-center items-center my-8 py-6">
                <div className="block m-10 lg:m-2">
                    <img className="block h-72 w-72" src="/assets/images/avatar.png" alt="Avatar" />
                </div>
                <div className="block m-10 lg:m-2">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-6xl md:text-5xl font-semibold my-3 text-center uppercase tracking-wide">
                            Bahoz
                        </h1>
                        <div className="block">
                            <p
                                onAnimationEnd={async (e) => {
                                    const target = e.target as Element;
                                    if (target.classList.contains(style.writer)) {
                                        await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
                                        target.classList.remove(style.writer);
                                        if (userActivity) {
                                            target.classList.add(style.deleter);
                                        }
                                    } else {
                                        let nextIndex = subTitleIndex + 1;
                                        if (!userActivity) nextIndex = 0;
                                        target.classList.remove(style.deleter);
                                        target.classList.add(style.writer);
                                        setSubTitleIndex(nextIndex);
                                    }
                                }}
                                className={`text-xl md:text-lg my-3 text-center ${style['write-animation']} ${style.writer}`}
                            >
                                {userActivity} {/* Burada kullanıcı etkinliği görünecek */}
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
