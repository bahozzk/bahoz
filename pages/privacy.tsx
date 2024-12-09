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
              width={100} // Logo boyutunu büyütme
              height={100}
              className="logo-image"
            />
          </div>
          <div>
            <h1 className="app-name">Kim Bu Ünlü?</h1>
            <p className="developer">
              Geliştirici: <a href="https://play.google.com">Bahoz</a>
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
          Çapraz Geçiş uygulaması, kullanıcı gizliliğine büyük önem verir. Bu
          gizlilik politikası, kullanıcı bilgilerinin nasıl toplandığını, nasıl
          kullanıldığını ve nasıl korunduğunu açıklar. Uygulamamızı kullanarak,
          aşağıdaki koşulları kabul etmiş olursunuz.
        </p>

        <h3>Topladığımız Bilgiler</h3>
        <p>
          Biz, kullanıcıların kimlik bilgilerini, iletişim bilgilerini veya
          ödeme bilgilerini toplamayız. Ancak aşağıdaki bilgileri topluyoruz:
        </p>
        <ul>
          <li>Uygulama kullanım verileri (hangi özelliklerin kullanıldığı)</li>
          <li>Cihaz bilgileri (model, işletim sistemi versiyonu, vs.)</li>
          <li>Konum verileri (isteğe bağlı, kullanıcı onayı gerektirir)</li>
        </ul>

        <h3>Bilgilerin Kullanımı</h3>
        <p>
          Topladığımız bilgiler, aşağıdaki amaçlarla kullanılmaktadır:
        </p>
        <ul>
          <li>Uygulama performansını izlemek ve iyileştirmek</li>
          <li>Kullanıcı deneyimini kişiselleştirmek</li>
          <li>Uygulama güvenliğini sağlamak</li>
          <li>Yazılım hatalarını düzeltmek</li>
        </ul>

        <h3>Veri Güvenliği</h3>
        <p>
          Kişisel bilgilerinizi, üçüncü şahıslarla paylaşmamaktayız. Ancak,
          uygulama performansını iyileştirmek amacıyla güvenilir üçüncü taraf
          hizmet sağlayıcıları kullanabiliriz. Bu hizmet sağlayıcılar yalnızca
          belirli işlemleri gerçekleştirmek için verilere erişebilir.
        </p>

        <h3>Çocukların Gizliliği</h3>
        <p>
          Çapraz Geçiş uygulaması, 13 yaşından küçük çocuklardan bilerek
          kişisel bilgi toplamaz. Eğer bir çocuğun kişisel bilgilerini
          topladığımızı fark ederseniz, lütfen bizimle iletişime geçin ve
          verileri derhal silmemiz için yardımcı olalım.
        </p>

        <h3>Gizlilik Politikası Değişiklikleri</h3>
        <p>
          Gizlilik politikamızda zaman zaman değişiklikler yapabiliriz. Tüm
          değişiklikler bu sayfada yayınlanacaktır ve yayınlandıktan sonra
          geçerliliğe girecektir. Bu sayfayı düzenli olarak kontrol etmeniz
          önemlidir.
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
