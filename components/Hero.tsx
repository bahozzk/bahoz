/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faXTwitter, faDiscord, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';
import { useLanguage } from '../lib/LanguageContext';
import { trackButtonClick, trackSocialClick } from '../lib/gtag';

const Hero: NextPage = (pageProps: PageProps): JSX.Element => {
    const { t } = useLanguage();
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
        const target = document.getElementById("projects");
        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 500; // 0.5 saniye
        let start: number | null = null;

        // Custom cubic-bezier easing function (ease-in-out / smooth deceleration)
        const easeInOutCubic = (t: number) => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * easeProgress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
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

  // Get dynamic Discord avatar
  let avatarUrl = "/assets/images/avatar.png";
  if (discordStatus?.discord_user?.avatar) {
      const ext = discordStatus.discord_user.avatar.startsWith('a_') ? 'gif' : 'png';
      avatarUrl = `https://cdn.discordapp.com/avatars/${discordStatus.discord_user.id}/${discordStatus.discord_user.avatar}.${ext}?size=512`;
  }

  return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-20'>
            <div className='w-full max-w-2xl mx-auto fade-in-up'>
                {/* Main Profile Card - Compact & Chic */}
                <div 
                    className='relative p-6 sm:p-8 mb-8 rounded-3xl transition-all duration-500 hover:shadow-2xl'
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                        backdropFilter: 'blur(40px) saturate(200%)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                >
                    <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
                        
                        {/* Avatar Section */}
                        <div className='flex-shrink-0 relative group'>
                            {/* Avatar with Glass Frame */}
                            <div 
                                className='relative rounded-full overflow-hidden p-1.5 transition-all duration-500 group-hover:scale-105'
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <img 
                                    className='block h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover' 
                                    src={avatarUrl} 
                                    alt="Bahoz Avatar"
                                />
                            </div>

                            {/* Status Indicator Pill */}
                            {discordStatus && (
                                <div 
                                    className='absolute -bottom-2 right-2 sm:right-4 flex items-center justify-center rounded-full border-[3px] z-10 transition-all'
                                    style={{
                                        backgroundColor: getStatusColor(discordStatus.discord_status),
                                        borderColor: '#1a1a1a',
                                        width: '18px',
                                        height: '18px'
                                    }}
                                    title={`Status: ${discordStatus.discord_status}`}
                                ></div>
                            )}
                        </div>

                        {/* Profile Info & Activity */}
                        <div className='flex-1 flex flex-col justify-center text-center sm:text-left space-y-4'>
                            <div>
                                <div className="relative inline-block">
                                    {/* Glow Layer (Solid white text blurred, no gradient/clip bugs) */}
                                    <h1 
                                        className='absolute inset-0 z-0 text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-white blur-md opacity-60'
                                        aria-hidden="true"
                                    >
                                        Bahoz
                                    </h1>
                                    {/* Main Gradient Text */}
                                    <h1 
                                        className='relative z-10 text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-white to-zinc-400'
                                        style={{
                                            backgroundSize: '200% auto',
                                            animation: 'shine 4s linear infinite',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        Bahoz
                                    </h1>
                                </div>
                                <p className='text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/50 mb-2'>
                                    {t('heroRole')}
                                </p>
                                <p className='text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-lg'>
                                    {t('heroBio')}
                                </p>
                            </div>

                            {/* Compact Socials inline */}
                            <div className='flex flex-wrap gap-2.5 justify-center sm:justify-start pt-1'>
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={`social-${index}`}
                                        href={link.href}
                                        target='_blank'
                                        rel='noreferrer'
                                        aria-label={link.label}
                                        className='group relative'
                                        onClick={() => trackSocialClick(link.label)}
                                    >
                                        <div 
                                            className='w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1'
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                            }}
                                            onMouseEnter={(e) => {
                                                const icon = e.currentTarget.querySelector('svg');
                                                if (icon) icon.style.color = link.hoverColor;
                                                e.currentTarget.style.borderColor = link.hoverColor;
                                                e.currentTarget.style.background = `${link.hoverColor}15`;
                                                e.currentTarget.style.boxShadow = `0 0 20px 2px ${link.hoverColor}40, inset 0 0 10px 1px ${link.hoverColor}20`;
                                            }}
                                            onMouseLeave={(e) => {
                                                const icon = e.currentTarget.querySelector('svg');
                                                if (icon) icon.style.color = 'rgba(255, 255, 255, 0.7)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            <FontAwesomeIcon 
                                                icon={link.icon}
                                                className='text-white/70 transition-all duration-300 text-sm'
                                            />
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Ultra Compact Activity Pill */}
                            {!isLoading && discordStatus && getPrimaryActivity() && (
                                <div className='pt-2'>
                                    <div 
                                        className='inline-flex items-center gap-3 py-2 px-3 sm:px-4 rounded-full transition-all duration-300'
                                        style={{
                                            background: 'rgba(0, 0, 0, 0.2)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        {/* Activity Icon - Miniature */}
                                        <div className='flex-shrink-0 w-6 h-6 flex items-center justify-center overflow-hidden rounded-md'>
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
                                                    className='w-full h-full object-cover'
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        if (e.currentTarget.nextSibling) {
                                                            (e.currentTarget.nextSibling as HTMLElement).style.display = 'flex';
                                                        }
                                                    }}
                                                />
                                            ) : null}
                                            <div 
                                                className='w-full h-full flex items-center justify-center'
                                                style={{
                                                    display: getPrimaryActivity()?.assets?.large_image ? 'none' : 'flex',
                                                    background: 'rgba(255,255,255,0.1)'
                                                }}
                                            >
                                                <FontAwesomeIcon 
                                                    icon={getActivityIcon(getPrimaryActivity())} 
                                                    className={`text-[10px] ${getPrimaryActivity()?.name === 'Spotify' ? 'text-green-400' : 'text-indigo-400'}`}
                                                />
                                            </div>
                                        </div>

                                        {/* Activity Name */}
                                        <div className='flex flex-col text-left'>
                                            <span className='text-[10px] text-white/50 uppercase tracking-wide font-bold leading-none mb-0.5'>
                                                {getActivityTypeText(getPrimaryActivity())}
                                            </span>
                                            <span className='text-xs text-white/90 font-medium leading-none truncate max-w-[150px] sm:max-w-[200px]'>
                                                {getPrimaryActivity()?.name} - {getPrimaryActivity()?.details || 'Playing'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Explore More Button */}
                <div className='flex justify-center'>
                    <button 
                        onClick={scrollToProjects}
                        className='liquid-button group inline-flex items-center gap-2 relative text-sm sm:text-base'
                    >
                        <span>{t('viewProjects')}</span>
                        <FontAwesomeIcon 
                            icon={faChevronDown} 
                            className='text-xs transition-transform duration-300 group-hover:translate-y-1'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
