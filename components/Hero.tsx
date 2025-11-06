import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faXTwitter, faDiscord, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useState, useEffect } from 'react';
import { trackButtonClick, trackSocialClick } from '../lib/gtag';

const Hero: NextPage = (pageProps: PageProps): JSX.Element => {
    const DISCORD_ID = '673849208154882078';
    
    // Discord Rich Presence bilgileri
    const [discordStatus, setDiscordStatus] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDiscordStatus = async () => {
            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
                const data = await response.json();
                
                if (data.success) {
                    setDiscordStatus(data.data);
                }
            } catch (error) {
                console.error('Discord status alınamadı:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchDiscordStatus();
        const interval = setInterval(fetchDiscordStatus, 30000); // 30 saniyede bir güncelle
        
        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        {
            icon: faGithub,
            href: '/github',
            hoverColor: '#ffffff',
            label: 'GitHub'
        },
        {
            icon: faInstagram,
            href: '/instagram',
            hoverColor: '#E4405F',
            label: 'Instagram'
        },
        {
            icon: faXTwitter,
            href: '/x',
            hoverColor: '#000000',
            label: 'X (Twitter)'
        },
        {
            icon: faDiscord,
            href: '/discord',
            hoverColor: '#5865F2',
            label: 'Discord'
        },
        {
            icon: faYoutube,
            href: '/youtube',
            hoverColor: '#FF0000',
            label: 'YouTube'
        },
        {
            icon: faSpotify,
            href: '/spotify',
            hoverColor: '#1DB954',
            label: 'Spotify'
        }
    ];

    const scrollToProjects = () => {
        trackButtonClick('View My Projects');
        document.getElementById("projects")?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Discord status indicator color
    const getStatusColor = (status: string) => {
        switch(status) {
            case 'online': return '#43b581';
            case 'idle': return '#faa61a';
            case 'dnd': return '#f04747';
            case 'offline': return '#747f8d';
            default: return '#747f8d';
        }
    };

    // Get activity icon
    const getActivityIcon = (activity: any) => {
        if (!activity) return faDiscord;
        
        if (activity.name === 'Spotify' || activity.type === 2) {
            return faSpotify;
        }
        
        // Diğer aktiviteler için varsayılan Discord ikonu
        return faDiscord;
    };

    // Get activity type text
    const getActivityTypeText = (activity: any) => {
        if (!activity) return '';
        
        if (activity.name === 'Spotify' || activity.type === 2) {
            return 'Listening to';
        }
        
        switch(activity.type) {
            case 0: return 'Playing';
            case 1: return 'Streaming';
            case 3: return 'Watching';
            case 5: return 'Competing in';
            default: return 'Playing';
        }
    };

    // Get primary activity (Spotify veya ilk aktivite)
    const getPrimaryActivity = () => {
        if (!discordStatus || !discordStatus.activities || discordStatus.activities.length === 0) {
            return null;
        }

        // Önce Spotify'ı ara
        const spotifyActivity = discordStatus.activities.find((a: any) => a.name === 'Spotify' || a.type === 2);
        if (spotifyActivity) return spotifyActivity;

        // Yoksa ilk aktiviteyi döndür
        return discordStatus.activities[0];
    };

    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-20'>
            <div className='w-full max-w-4xl mx-auto fade-in-up'>
                {/* Main Profile Card */}
                <div className='glass-card p-6 sm:p-8 md:p-10 mb-6 sm:mb-8'>
                    <div className='flex flex-col gap-6'>
                        {/* Top Section - Avatar and Info */}
                        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6'>
                            {/* Avatar */}
                            <div className='flex-shrink-0'>
                                <div className='relative group'>
                                    {/* Status Indicator */}
                                    {discordStatus && (
                                        <div 
                                            className='absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 z-10'
                                            style={{
                                                backgroundColor: getStatusColor(discordStatus.discord_status),
                                                borderColor: 'rgba(0, 0, 0, 0.8)'
                                            }}
                                        ></div>
                                    )}
                                    
                                    {/* Avatar with Glass Frame */}
                                    <div 
                                        className='relative rounded-3xl overflow-hidden p-2 transition-all duration-500 group-hover:scale-105'
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                                            backdropFilter: 'blur(60px) saturate(180%)',
                                            border: '1px solid rgba(255, 255, 255, 0.25)',
                                            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
                                        }}
                                    >
                                        <img 
                                            className='block h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-2xl object-cover' 
                                            src="/assets/images/avatar.png" 
                                            alt="Bahoz Avatar"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Info Column - Name and Bio */}
                            <div className='flex-1 flex flex-col justify-start sm:pt-2 space-y-2 text-center sm:text-left'>
                                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]'>
                                    Bahoz
                                </h1>
                                <p className='text-xs sm:text-sm md:text-base text-white/60 leading-relaxed font-light'>
                                    I am interested in programming but I don&apos;t know any languages 🙃
                                </p>
                            </div>
                        </div>

                        {/* Bottom Section - Activity */}
                        <div>
                            {!isLoading && discordStatus && getPrimaryActivity() ? (
                                <div 
                                    className='rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:scale-[1.01]'
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                        backdropFilter: 'blur(40px) saturate(180%)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)'
                                    }}
                                >
                                    <div className='flex items-center gap-3 sm:gap-4'>
                                        {/* Activity Icon */}
                                        <div className='flex-shrink-0'>
                                            {getPrimaryActivity()?.assets?.large_image ? (
                                                <img 
                                                    src={
                                                        getPrimaryActivity().assets.large_image.startsWith('mp:external/')
                                                            ? getPrimaryActivity().assets.large_image.replace('mp:external/', 'https://media.discordapp.net/external/')
                                                            : getPrimaryActivity().assets.large_image.startsWith('spotify:')
                                                            ? `https://i.scdn.co/image/${getPrimaryActivity().assets.large_image.replace('spotify:', '')}`
                                                            : `https://cdn.discordapp.com/app-assets/${getPrimaryActivity().application_id}/${getPrimaryActivity().assets.large_image}.png`
                                                    }
                                                    alt="Activity"
                                                    className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover'
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        if (e.currentTarget.nextSibling) {
                                                            (e.currentTarget.nextSibling as HTMLElement).style.display = 'flex';
                                                        }
                                                    }}
                                                />
                                            ) : null}
                                            <div 
                                                className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center'
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    display: getPrimaryActivity()?.assets?.large_image ? 'none' : 'flex'
                                                }}
                                            >
                                                <FontAwesomeIcon 
                                                    icon={getActivityIcon(getPrimaryActivity())} 
                                                    className={`text-lg sm:text-xl ${getPrimaryActivity()?.name === 'Spotify' ? 'text-green-400' : 'text-indigo-400'}`}
                                                />
                                            </div>
                                        </div>

                                        {/* Activity Details */}
                                        <div className='flex-1 min-w-0'>
                                            <p className='text-xs text-white/50 uppercase tracking-wider font-semibold mb-1'>
                                                {getActivityTypeText(getPrimaryActivity())} {getPrimaryActivity()?.name}
                                            </p>
                                            <p className='text-white/90 font-semibold truncate text-xs sm:text-sm'>
                                                {getPrimaryActivity()?.details || 'Playing'}
                                            </p>
                                            {getPrimaryActivity()?.state && (
                                                <p className='text-white/60 text-xs truncate'>
                                                    {getPrimaryActivity().state}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div 
                                    className='rounded-2xl p-3 sm:p-4 flex items-center justify-center'
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%)',
                                        backdropFilter: 'blur(40px) saturate(180%)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.15)'
                                    }}
                                >
                                    <p className='text-white/50 text-xs sm:text-sm'>
                                        {isLoading 
                                            ? 'Loading status...' 
                                            : discordStatus?.discord_status === 'offline'
                                            ? 'Bahoz şu an çevrimdışı'
                                            : 'Bahoz şu anda hiçbir şey yapmıyor'}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Social Media Icons */}
                        <div className='flex flex-wrap gap-3 sm:gap-4 justify-center'>
                            {socialLinks.map((link, index) => (
                                <a
                                    key={`social-${index}`}
                                    href={link.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={link.label}
                                    className='group'
                                    onClick={() => trackSocialClick(link.label)}
                                >
                                    <div 
                                        className='social-icon-box w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1'
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
                                            backdropFilter: 'blur(60px) saturate(180%)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.2)'
                                        }}
                                        onMouseEnter={(e) => {
                                            const icon = e.currentTarget.querySelector('svg');
                                            if (icon) icon.style.color = link.hoverColor;
                                        }}
                                        onMouseLeave={(e) => {
                                            const icon = e.currentTarget.querySelector('svg');
                                            if (icon) icon.style.color = 'rgba(255, 255, 255, 0.75)';
                                        }}
                                    >
                                        <FontAwesomeIcon 
                                            icon={link.icon}
                                            className='text-white/75 transition-all duration-300 text-base sm:text-lg'
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Explore More Button */}
                <div className='flex justify-center'>
                    <button 
                        onClick={scrollToProjects}
                        className='liquid-button group inline-flex items-center gap-3 relative text-sm sm:text-base'
                    >
                        <span>View My Projects</span>
                        <FontAwesomeIcon 
                            icon={faChevronDown} 
                            className='text-sm transition-transform duration-300'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
