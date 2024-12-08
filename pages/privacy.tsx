import React from "react";
import Image from "next/image";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="page-container">
      {/* Uygulama Bilgileri Kartı */}
      <div className="app-info-container">
        <div className="info-card">
          <div className="app-logo">
            <Image
              src="/assets/images/app-logo.png"
              alt="App Logo"
              width={60}
              height={60}
              className="logo-image"
            />
          </div>
          <div>
            <h1 className="app-name">Çapraz Geçiş</h1>
            <p className="developer">
              Geliştirici: <a href="https://www.example.com">Bahoz</a>
            </p>
            <p className="app-description">
              Android platformunda geliştirilmiş eğlenceli bir mobil oyun.
            </p>
          </div>
        </div>
      </div>

      {/* Gizlilik Politikası */}
      <div className="privacy-policy">
        <h2>Gizlilik Politikası</h2>
        <p>
          Çapraz Geçiş uygulaması, kullanıcı gizliliğine saygı gösterir. Bu
          gizlilik politikası, uygulama kullanıcılarının gizliliğini nasıl
          koruduğumuzu açıklar.
        </p>
        <h3>Topladığımız Bilgiler</h3>
        <ul>
          <li>Uygulama kullanım verileri</li>
          <li>Cihaz bilgileri</li>
          <li>Konum verileri (isteğe bağlı)</li>
        </ul>
        <h3>Bilgilerin Kullanımı</h3>
        <p>
          Topladığımız bilgiler, uygulama içi deneyimi iyileştirmek, kullanıcı
          geri bildirimlerini analiz etmek ve güvenlik sağlamak amacıyla
          kullanılmaktadır.
        </p>

        <h3>Gizliliğin Korunması</h3>
        <p>
          Kişisel bilgilerinizi üçüncü taraflarla paylaşmamaktayız. Ancak,
          uygulama hizmet sağlayıcılarıyla gerekli veri paylaşımını yapabiliriz.
        </p>
        <h3>İletişim</h3>
        <p className="contact-info">
          Bize ulaşın:{" "}
          <a href="mailto:bahozerkek21@gmail.com">bahozerkek21@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
