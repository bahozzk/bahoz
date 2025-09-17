import React, { useEffect, useState } from 'react';

const EdebiyatProje: React.FC = () => {
  // Detect mobile safely (only runs in browser)
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };
    check();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }
    return;
  }, []);

  return (
    <main style={mainStyle}>
      {/* 1. Başlık */}
      <section style={sectionStyle}>
        <h1 style={headerStyle}>Sait Faik Abasıyanık'ın Hayatı</h1>
        <div style={paragraphContainerStyle}>
          <p style={paragraphStyle}>
            Sait Faik Abasıyanık, 18 Kasım 1906’da Adapazarı’nda doğdu. Babası ticaretle uğraşan bir bürokrat, annesi ise Adapazarı’nın köklü ailelerinden biriydi. İstanbul’da öğrenimini sürdürdü ve yazmaya olan ilgisi genç yaşlarda başladı.
          </p>
          <p style={paragraphStyle}>
            1939’da “Sarnıç”, 1940’ta “Şahmerdan” adlı kitapları yayımlandı. “Çelme” adlı öyküsü nedeniyle askeri mahkemede yargılandı ancak beraat etti. Eserlerinde insan ilişkileri ve sıradan insanların yaşamlarına odaklandı.
          </p>
          <p style={paragraphStyle}>
            1948’de siroz teşhisi konulunca yaşamı zorlaşmaya başladı. Alkolü bıraktı ve sağlığına dikkat etmeye çalıştı. 1950’de “Mahalle Kahvesi” kitabı yayımlandı.
          </p>
          <p style={paragraphStyle}>
            1954 yılında “Alemdağ’da Var Bir Yılan” adlı öykü kitabı çıktı. Aynı yıl geçirdiği bir iç kanama sonucu hastaneye kaldırıldı ve 11 Mayıs 1954’te hayatını kaybetti.
          </p>
        </div>
      </section>

      {/* 2. Başlık */}
      <section style={sectionStyle}>
        <h1 style={headerStyle}>Müze ve ada hakkında bilgiler</h1>
        <div style={paragraphContainerStyle}>
          <p style={paragraphStyle}>
            Burgazada, İstanbul’un Prens Adaları arasında yer alan, doğal güzellikleri ve sakin atmosferiyle öne çıkan bir adadır. Özellikle yazar ve sanatçılar için ilham verici bir mekandır.
          </p>
          <p style={paragraphStyle}>
            Sait Faik Abasıyanık Müzesi, yazarın Burgazada’daki evi restore edilerek 1959 yılında ziyarete açılmıştır. Müzede Sait Faik’e ait kişisel eşyalar, fotoğraflar ve notlar sergilenmektedir.
          </p>
        </div>
      </section>

      {/* 3. Başlık */}
      <section style={sectionStyle}>
        <h1 style={headerStyle}>Gezi yazısı</h1>
        <div style={paragraphContainerStyle}>
          <p style={paragraphStyle}>
            O gün sabah erkenden kalktım, duşa girdim, ardından tıraş oldum ve Kadıköy’e gitmek üzere evden çıkıp durağa geçtim. Otobüsüm gelince bindim ve yola koyulduk.
          </p>
          <p style={paragraphStyle}>
            Ardından kız arkadaşlarım makyajlarını tazeledi, takma kirpiklerini taktı ve bolca fotoğraf çektik. Yaklaşık 50 dakikalık yolculuk nasıl geçti anlamadık.
          </p>
          <p style={paragraphStyle}>
            Ben müze gezisi sırasında bol bol görüntü aldım ve bahçeye indim. Bahçede erik yiyen arkadaşlarımdan biraz erik aldıktan sonra oturdum ve sohbet ettim.
          </p>
          <p style={paragraphStyle}>
            Kadıköy’e vardık ve hemen kendimizi bir dönerciye attık. Siparişlerimizi verdik, beklerken vlog için kısa çekimler yaptık ve günü sonlandırdık.
          </p>
        </div>
      </section>

      {/* Video */}
      <section style={{ marginTop: '4rem' }}>
        <h2 style={videoHeaderStyle}>Videomuzu İzlemek İçin:</h2>
        <div style={videoWrapperStyle}>
          <iframe
            src="https://www.youtube.com/embed/tP_UtqYtyAQ"
            title="Edebiyat Projesi Videosu"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={iframeStyle}
          ></iframe>
        </div>
      </section>
    </main>
  );
};

// Stil tanımları
const mainStyle: React.CSSProperties = {
  padding: '2rem',
  maxWidth: '800px',
  margin: 'auto',
  fontFamily: 'Georgia, serif',
  lineHeight: '1.8',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(8px)',
  borderRadius: '12px',
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '3rem',
};

const headerStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  borderBottom: '2px solid #f5f5f5',
  paddingBottom: '0.5rem',
  marginBottom: '1rem',
};

const paragraphContainerStyle: React.CSSProperties = {
  backgroundColor: 'rgba(30, 30, 30, 0.4)', // Daha açık, yarı saydam koyu gri
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)', // Safari desteği
  padding: '1.5rem',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.1)', // Hafif kenar çizgisi
};


const paragraphStyle: React.CSSProperties = {
  fontSize: '1rem',
  marginBottom: '1rem',
};

const mobileParagraphStyle: React.CSSProperties = {
  fontSize: '0.9rem', // Mobilde daha küçük yazı
  marginBottom: '1rem',
};

const videoHeaderStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  borderBottom: '1px solid #f5f5f5',
  paddingBottom: '0.5rem',
};

const videoWrapperStyle: React.CSSProperties = {
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  borderRadius: '12px',
};

const iframeStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '12px',
};

export default EdebiyatProje;