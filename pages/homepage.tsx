import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "Hakkında" },
    { id: "features", label: "Özellikler" },
    { id: "privacy", label: "Gizlilik" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      {/* Kart - Liquid Glass */}
      <div className="relative w-full max-w-3xl p-6 rounded-2xl 
    bg-transparent backdrop-blur-xl 
    shadow-2xl 
    border border-white/20 
    ring-1 ring-white/40">
        {/* Üst Kısım: Logo + İsim + Geliştirici */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/assets/images/app-logo.png"
            alt="App Logo"
            width={120}
            height={120}
            className="rounded-2xl shadow-lg"
          />
          <h1
            className="mt-4 text-3xl font-bold text-white cursor-pointer hover:underline"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.yourgameid",
                "_blank"
              )
            }
          >
            2048 Puzzle
          </h1>
          <p
            className="mt-1 text-lg text-white/90 cursor-pointer hover:underline"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/dev?id=YOUR_DEV_ID",
                "_blank"
              )
            }
          >
            Bahoz
          </p>
        </div>

        {/* Sekmeler */}
        <div className="flex justify-center gap-6 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95
  ${activeTab === tab.id
    ? "bg-transparent backdrop-blur-md border border-white/30 text-white shadow-lg ring-1 ring-white/40"
    : "bg-transparent backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:backdrop-blur-md hover:border-white/40"}
`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* İçerik */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-white/90 leading-relaxed space-y-4"
              >
                <p>
                  Klasik 2048 bulmaca oyunu şimdi modern bir tasarımla
                  karşınızda!  
                  Kaydır, birleştir ve en yüksek sayıya ulaşmaya çalış. Zihnini
                  zorlayan, reflekslerini geliştiren bu eğlenceli sayı
                  bulmacasında kendini test et.
                </p>

                <h3 className="text-xl font-semibold">🎮 Nasıl Oynanır?</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Tahtadaki kutucukları kaydırarak aynı sayıları birleştir.
                  </li>
                  <li>2+2 = 4, 4+4 = 8... derken hedefin 2048&apos;e ulaşmak!</li>
                  <li>
                    Her hamlede yeni bir kutucuk belirir. Stratejini iyi
                    kurmalısın.
                  </li>
                  <li>
                    Oyun tahtası dolmadan en yüksek puanı yapmaya çalış.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold">✨ Özellikler:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Basit ama bağımlılık yapan klasik 2048 deneyimi</li>
                  <li>Renkli ve modern tasarım</li>
                  <li>Kolay dokunmatik kontroller</li>
                  <li>İlerlemeni takip eden skor sistemi</li>
                  <li>
                    Sonsuz oynanış: 2048&apos;e ulaştığında oyun bitmez, daha
                    yüksek sayılara devam edebilirsin
                  </li>
                  <li>İnternetsiz oynanabilir (offline mod)</li>
                </ul>

                <h3 className="text-xl font-semibold">🏆 Rekabet ve Eğlence:</h3>
                <p>
                  Kendi rekorunu kır, arkadaşlarınla skorlarını kıyasla ve daha
                  yüksek sayılara ulaşmak için stratejini geliştir. Her oyun yeni
                  bir meydan okuma!
                </p>

                <p>
                  2048, hem hızlı oynanabilecek bir oyun arıyorsan hem de
                  strateji ve sabır gerektiren bir bulmaca istiyorsan tam sana
                  göre. İster boş zamanlarında birkaç hamle yap, ister saatlerce
                  oynayarak rekorunu geliştir.
                </p>

                <p className="font-semibold">
                  Şimdi indir, 2048 macerana başla!
                </p>
              </motion.div>
            )}

            {activeTab === "features" && (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-white/90 leading-relaxed space-y-4"
              >
                <h2 className="text-2xl font-bold">Features</h2>
                <p>
                  Oyunun teknik detaylarını, grafiklerini ve sürüm notlarını
                  buraya ekleyebilirsin.
                </p>
              </motion.div>
            )}

            {activeTab === "privacy" && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-white/90 leading-relaxed space-y-4"
              >
                <h2 className="text-2xl font-bold">Gizlilik Politikası</h2>
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
                {/* Buraya senin uzun gizlilik politikası metnini ekle */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
