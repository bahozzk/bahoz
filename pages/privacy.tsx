import React from 'react';
import Image from 'next/image'; // Image bileşenini ekleyin
import Head from 'next/head';

const PrivacyPage = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Çapraz Geçiş - Gizlilik Politikası</title>
        <meta name="description" content="Uygulama Gizlilik Politikası" />
      </Head>

      {/* Uygulama Bilgileri Kısmı */}
      <div className="app-info">
        <div className="app-info-container">
          {/* Uygulama logosu, ismi ve geliştirici bilgisinin bulunduğu şeffaf kart */}
          <div className="info-card">
            {/* Uygulama logosu */}
            <div className="app-logo">
              <Image 
                src="/assets/images/app-logo.png" // Logo dosyasının yolu
                alt="Çapraz Geçiş Logo" 
                width={120} // Logo genişliği
                height={120} // Logo yüksekliği
                className="logo-image"
              />
            </div>
            <h1 className="app-name">Çapraz Geçiş</h1>
            <p className="developer">Geliştirici: Bahoz</p>
            <p className="app-description">Bu uygulama, kullanıcı deneyimini geliştirmek için minimal veriler toplar.</p>
          </div>
        </div>
      </div>

      {/* Gizlilik Politikası Kısmı */}
      <div className="privacy-policy">
        <h2>Gizlilik Politikası</h2>
        <p>Çapraz Geçiş uygulaması, kullanıcıların gizliliğine büyük önem verir ve yalnızca gerekli olan verileri toplar.</p>
        <p>Uygulama, yalnızca aşağıdaki verileri toplar:</p>
        <ul>
          <li>Uygulama içi kullanım verileri (uygulama performansını iyileştirmek için anonimleştirilmiş veriler).</li>
          <li>Kullanıcı kimlik bilgileri (e-posta adresi, yalnızca kullanıcı hesabı oluşturma amacıyla kullanılır).</li>
        </ul>
        <p>Bu veriler yalnızca uygulamanın sağlıklı çalışması ve kullanıcı deneyimini iyileştirmek amacıyla toplanır. Kişisel bilgileriniz hiçbir şekilde üçüncü şahıslarla paylaşılmayacaktır.</p>
        
        <h3>Veri Güvenliği</h3>
        <p>Toplanan veriler, yüksek güvenlik önlemleri altında saklanır. Güvenlik duvarları ve şifreleme teknolojileri kullanılarak kullanıcı verileri korunur.</p>

        <h3>Çerezler</h3>
        <p>Çapraz Geçiş uygulaması, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanabilir. Çerezler, uygulamanın kullanımını izlemek ve performansını artırmak için kullanılır.</p>

        <h3>Gizlilik Politikası Güncellemeleri</h3>
        <p>Bu gizlilik politikası zaman zaman güncellenebilir. Politikadaki değişiklikler uygulama üzerinden duyurulacak ve kullanıcılar bilgilendirilecektir.</p>

        <h3>İletişim</h3>
        <p>Bu gizlilik politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:</p>
        <p>Email: bahozerkek21@gmail.com</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
