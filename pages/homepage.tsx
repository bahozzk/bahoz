// pages/homepage.tsx
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Homepage(): JSX.Element {
  const developerUrl =
    "https://play.google.com/store/apps/dev?id=7998220962786097995";
  const gameUrl =
    "https://play.google.com/store/apps/details?id=com.bahoz.game2048";

  const [activeTab, setActiveTab] = useState("about");

  // Hash değişimini izle
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveTab(hash);
      } else {
        setActiveTab("about");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>2048 — Bahoz</title>
        <meta
          name="description"
          content="2048 oyunu — klasik sayı bulmacası, modern tasarım. Bahoz tarafından geliştirildi."
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl">
          {/* Üst header */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
              2048
            </h1>
            <p className="mt-2 text-sm text-slate-200/80">
              Klasik 2048 bulmacası — modern tasarım ile.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Sol kısım: logo + bilgiler */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/app-logo.png"
                  alt="2048 App Logo"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="text-center md:text-left">
                <a
                  href={gameUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-2xl font-semibold text-white hover:underline"
                >
                  2048
                </a>
                <div className="mt-2">
                  <span className="text-sm text-slate-300 mr-2">Geliştirici</span>
                  <a
                    href={developerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/90 underline"
                  >
                    Bahoz
                  </a>
                </div>
              </div>
            </div>

            {/* Sağ kısım: liquid glass panel */}
            <aside
              className="relative p-1 rounded-3xl"
              aria-label="Navigation panel"
            >
              <div
                className="backdrop-blur-md bg-white/6 border border-white/10 rounded-3xl p-6 shadow-glass"
                style={{
                  WebkitBackdropFilter: "blur(12px)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Sekmeler */}
                <nav className="flex gap-3 mb-6" aria-label="Sections">
                  <a
                    href="#about"
                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                      activeTab === "about"
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    About
                  </a>
                  <a
                    href="#features"
                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                      activeTab === "features"
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    Features
                  </a>
                  <a
                    href="#privacy"
                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                      activeTab === "privacy"
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    Privacy
                  </a>
                </nav>

                {/* İçerik */}
                <div className="text-sm text-slate-200/85 leading-relaxed max-h-[500px] overflow-y-auto pr-2">
                  {activeTab === "about" && (
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Hakkında
                      </h3>
                      <p>
                        Klasik 2048 bulmaca oyunu şimdi modern bir tasarımla
                        karşınızda! Kaydır, birleştir ve en yüksek sayıya ulaşmaya
                        çalış. Zihnini zorlayan, reflekslerini geliştiren bu
                        eğlenceli sayı bulmacasında kendini test et.
                      </p>
                    </section>
                  )}

                  {activeTab === "features" && (
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Özellikler
                      </h3>
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Basit ama bağımlılık yapan klasik 2048 deneyimi</li>
                        <li>Renkli ve modern tasarım</li>
                        <li>Kolay dokunmatik kontroller</li>
                        <li>Skor takibi ve offline oynanış</li>
                        <li>
                          Sonsuz oynanış: 2048&apos;e ulaştıktan sonra devam
                          edebilirsin
                        </li>
                      </ul>
                    </section>
                  )}

                  {activeTab === "privacy" && (
                    <section>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Gizlilik Politikası
                      </h3>
                      <div className="space-y-4 text-sm text-slate-200/85">
                        <p>
                          Bu İnternet sitesini kullanarak kişisel verilerinizin
                          işlenmesini kabul etmiş olursunuz. Güvenliğiniz bizim için
                          önemli. Bu sebeple, bizimle paylaşacağınız kişisel
                          verileriniz hassasiyetle korunmaktadır.
                        </p>
                        <h4 className="font-semibold text-white">
                          Veri Sorumlusu
                        </h4>
                        <p>
                          Ben, Bahoz, veri sorumlusu olarak, bu gizlilik ve kişisel
                          verilerin korunması politikası ile ziyaret etmekte
                          olduğunuz İnternet sitesi kapsamında hangi kişisel
                          verilerinizin hangi amaçlarla işleneceği, işlenen
                          verilerin kimlerle ve hangi sebeplerle paylaşılabileceği,
                          veri işleme yöntemimiz ve hukuki sebepleri ile; işlenen
                          verilerinize ilişkin haklarınızın neler olduğu hususunda
                          siz kullanıcılarımızı aydınlatmayı amaçlıyorum.
                        </p>
                        <h4 className="font-semibold text-white">
                          Toplanan Kişisel Veriler
                        </h4>
                        <ul className="list-disc ml-5">
                          <li>Cihaz bilgileri</li>
                          <li>E-posta adresi</li>
                        </ul>
                        <h4 className="font-semibold text-white">
                          Kullanılan Servisler
                        </h4>
                        <p>
                          <strong>Analitik ve izleme:</strong> Google Analytics, ziyaretçi
                          davranışlarını ve site kullanımını analiz etmek için
                          kullanılmaktadır.
                          <br />
                          <strong>Sosyal medya:</strong> Google ile giriş, güvenli kimlik
                          doğrulama için kullanılmaktadır.
                        </p>
                        <h4 className="font-semibold text-white">
                          Verilerin İşlenme Amaçları
                        </h4>
                        <p>
                          Kişisel verileriniz, bu İnternet sitesi tarafından
                          amacına uygun hizmet sunulabilmesi, yasal yükümlülüklerin
                          yerine getirilmesi, hizmet kalitesinin artırılması,
                          iletişim, güvenlik ve gerektiğinde yasal merciler ile
                          bilgi paylaşılabilmesi amaçları ile işlenmektedir.
                        </p>
                        <h4 className="font-semibold text-white">
                          Verilerin Aktarılması
                        </h4>
                        <p>
                          Toplanan kişisel verileriniz, yasal zorunluluklar haricinde
                          açık rızanız olmadan üçüncü kişiler ile paylaşılmaz.
                        </p>
                        <h4 className="font-semibold text-white">
                          Çerez Kullanımı
                        </h4>
                        <p>
                          Bu İnternet sitesi çerez kullanmaktadır. Çerezler, bir
                          İnternet sayfası ziyaret edildiğinde kullanıcılara ilişkin
                          birtakım bilgilerin depolanmasına izin verir.
                        </p>
                        <h4 className="font-semibold text-white">
                          Yasal Haklarınız (KVKK & GDPR)
                        </h4>
                        <p>
                          KVKK ve GDPR kapsamında kişisel verilerinizle ilgili erişim,
                          düzeltme, silme, itiraz ve taşınabilirlik gibi haklara
                          sahipsiniz.
                        </p>
                        <h4 className="font-semibold text-white">İletişim</h4>
                        <p>
                          Gizlilik veya veri talepleri için:{" "}
                          <a
                            href="mailto:bahozerkek21@gmail.com"
                            className="text-sky-300 underline"
                          >
                            bahozerkek21@gmail.com
                          </a>
                        </p>
                        <p>
                          Bu politika, 22 Eylül 2025 tarihinde yürürlüğe girmiştir ve
                          gerektiğinde güncellenir.
                        </p>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <style jsx>{`
        .shadow-glass {
          box-shadow: 0 8px 30px rgba(2, 6, 23, 0.6);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
