// pages/privacy.tsx
import React from "react";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {/* Uygulamanın logosu */}
      <div>
        <Image
          src="/assets/images/app-logo.png" // Logo dosyasını public/assets/images içinde saklıyoruz
          alt="Uygulama Logo"
          width={150} // Logonun genişliği
          height={150} // Logonun yüksekliği
        />
      </div>

      {/* Uygulamanın ismi */}
      <h1>Çapraz Geçiş</h1>

      {/* Gizlilik Politikası Başlığı */}
      <p><strong>Son Güncelleme: 8.12.2024</strong> [Tarih]</p>
      <p>
        Mobil oyun uygulamamız, çocukların gizliliğini korumayı taahhüt eder. Bu gizlilik politikası, topladığımız bilgileri, bu bilgileri nasıl kullandığımızı ve kullanıcıların haklarını açıklar.
      </p>
      
      {/* Gizlilik Politikası İçeriği */}
      <h2>1. Topladığımız Bilgiler</h2>
      <ul>
        <li>
          <strong>Kişisel Bilgiler:</strong> Uygulama, isim, adres, telefon numarası gibi kişisel bilgileri toplamaz.
        </li>
        <li>
          <strong>Otomatik Veriler:</strong> Uygulama kullanım istatistikleri, cihaz türü, işletim sistemi gibi anonim veriler toplanabilir.
        </li>
      </ul>
      
      <h2>2. Bilgilerin Kullanımı</h2>
      <p>
        Toplanan veriler yalnızca uygulamanın performansını artırmak, hata raporlarını çözmek ve kullanıcı deneyimini geliştirmek için kullanılır. Veriler hiçbir şekilde üçüncü taraflarla paylaşılmaz.
      </p>
      
      <h2>3. Çocukların Gizliliği</h2>
      <p>
        Uygulama, 13 yaş altı çocuklara yönelik olarak tasarlanmıştır ve Çocukların Çevrimiçi Gizliliğini Koruma Yasası&apos;na (COPPA) uygundur. Çocuklardan bilerek kişisel bilgi toplamıyoruz.
      </p>
      
      <h2>4. Reklam ve Satın Alma</h2>
      <ul>
        <li>
          Uygulama içi reklamlar, çocuk dostu içerik politikalarına uygundur.
        </li>
        <li>
          Reklam ortaklarımızın gizlilik politikalarını incelemenizi öneririz.
        </li>
        <li>
          Satın alma işlemleri yalnızca ebeveyn onayı ile gerçekleştirilebilir.
        </li>
      </ul>
      
      <h2>5. Haklarınız</h2>
      <p>
        Verilerinizin silinmesini talep edebilir veya uygulama içindeki veri toplama seçeneklerini devre dışı bırakabilirsiniz.
      </p>
      
      <h2>İletişim</h2>
      <p>
        Herhangi bir sorunuz veya endişeniz varsa, bize şu adresten ulaşabilirsiniz: <strong>[email@example.com]</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
