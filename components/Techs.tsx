import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import type { PageProps } from '../types';

const Qualifications: NextPage = (pageProps: PageProps): JSX.Element => {
  const qualifications = [
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
          alt="UK Flag"
          className="w-[120px] h-[80px]"  // Bayrak boyutlarına uyumlu
        />
      ),
      description: 'B1 English',
      hoverColors: 'from-red-600 via-blue-500 to-red-600',  // Yeni renk geçişi
      isUKFlag: true,
    },
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png"
          alt="France Flag"
          className="w-[120px] h-[80px]"  // Bayrak boyutlarına uyumlu
        />
      ),
      description: 'A1 French',
      hoverColors: 'from-blue-800 via-white to-red-500',  // Mavi tonunu daha koyu yaptım
      isUKFlag: false,
    },
  ];

  return (
    <div className="my-20 md:px-8 w-full flex flex-col items-center">
      <h2 className="font-bold text-2xl uppercase tracking-wide text-white mb-10">
        Qualifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {qualifications.map((data, index) => (
          <div key={`qual${index}`} className="relative group">
            {/* Hover Glow Effect */}
            <div
              className={`absolute -inset-2 rounded-lg bg-gradient-to-r ${data.hoverColors} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md filter`}
              style={{ width: 'calc(100% + 10px)', height: 'calc(100% + 10px)' }} // Hover efekti kutu boyutuyla uyumlu
            ></div>

            {/* Inner Black Box */}
            <div className="relative w-36 h-44 bg-black rounded-lg shadow-md flex flex-col items-center justify-center">
              <div>{data.icon}</div>
              <p className="text-center text-white mt-4 text-lg font-bold">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
