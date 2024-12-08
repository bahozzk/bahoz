import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 saniye sonra yükleme animasyonunu kaldır
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.loader}>
        <div className="spinner"></div>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <Image
            src="/assets/images/app-logo.png"
            alt="Uygulama Logo"
            width={100}
            height={100}
          />
        </div>
        <div style={styles.titleContainer}>
          <h1 style={styles.appName}>Çapraz Geçiş</h1>
          <p style={styles.developer}>
            Geliştirici:{" "}
            <Link href="https://www.developer-website.com">
              <a target="_blank" style={styles.link}>Geliştirici İsmi</a>
            </Link>
          </p>
        </div>
      </div>

      <div style={styles.content}>
        <p><strong>Son Güncelleme:</strong> 8.12.2024</p>
        <p>
          Mobil oyun uygulamamız, çocukların gizliliğini korumayı taahhüt eder. Bu gizlilik politikası, topladığımız bilgileri, bu bilgileri nasıl kullandığımızı ve kullanıcıların haklarını açıklar.
        </p>
        
        <h2 style={styles.heading}>1. Topladığımız Bilgiler</h2>
        <ul>
          <li><strong>Kişisel Bilgiler:</strong> Uygulama, isim, adres, telefon numarası gibi kişisel bilgileri toplamaz.</li>
          <li><strong>Otomatik Veriler:</strong> Uygulama kullanım istatistikleri, cihaz türü, işletim sistemi gibi anonim veriler toplanabilir.</li>
        </ul>

        <h2 style={styles.heading}>2. Bilgilerin Kullanımı</h2>
        <p>
          Toplanan veriler yalnızca uygulamanın performansını artırmak, hata raporlarını çözmek ve kullanıcı deneyimini geliştirmek için kullanılır. Veriler hiçbir şekilde üçüncü taraflarla paylaşılmaz.
        </p>

        <h2 style={styles.heading}>3. Çocukların Gizliliği</h2>
        <p>
          Uygulama, 13 yaş altı çocuklara yönelik olarak tasarlanmıştır ve Çocukların Çevrimiçi Gizliliğini Koruma Yasası&apos;na (COPPA) uygundur. Çocuklardan bilerek kişisel bilgi toplamıyoruz.
        </p>

        <h2 style={styles.heading}>4. Reklam ve Satın Alma</h2>
        <ul>
          <li>Uygulama içi reklamlar, çocuk dostu içerik politikalarına uygundur.</li>
          <li>Reklam ortaklarımızın gizlilik politikalarını incelemenizi öneririz.</li>
          <li>Satın alma işlemleri yalnızca ebeveyn onayı ile gerçekleştirilebilir.</li>
        </ul>

        <h2 style={styles.heading}>5. Haklarınız</h2>
        <p>Verilerinizin silinmesini talep edebilir veya uygulama içindeki veri toplama seçeneklerini devre dışı bırakabilirsiniz.</p>

        <h2 style={styles.heading}>İletişim</h2>
        <p>Herhangi bir sorunuz veya endişeniz varsa, bize şu adresten ulaşabilirsiniz: <strong><a href="mailto:bahozerkek21@gmail.com">bahozerkek21@gmail.com</a></strong></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "left" as "left",  // Doğru tip ataması
    lineHeight: "1.6",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  logoContainer: {
    marginRight: "20px",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column" as "column",  // Doğru tip ataması
  },
  appName: {
    fontSize: "24px",
    margin: 0,
  },
  developer: {
    fontSize: "16px",
    marginTop: "5px",
  },
  link: {
    color: "#0070f3", 
    textDecoration: "underline", 
  },
  content: {
    marginTop: "20px",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column" as "column", // Doğru tip ataması
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
  },
};

export default PrivacyPolicy;
