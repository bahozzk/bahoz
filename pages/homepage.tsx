import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [updates, setUpdates] = useState<any>(null);

  const tabs = [
    { id: "about", label: "Hakkında" },
    { id: "updates", label: "Güncellemeler" },
    { id: "privacy", label: "Gizlilik" },
  ];

  // ✅ Hash desteği için eklenen useEffect
  useEffect(() => {
    if (window.location.hash) {
      const tab = window.location.hash.replace("#", "");
      if (tabs.some((t) => t.id === tab)) {
        setActiveTab(tab);
      }
    }
  }, []);

  useEffect(() => {
    fetch("/api/updates")
      .then((res) => res.json())
      .then((data) => setUpdates(data));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl shadow-2xl rounded-2xl p-8 border border-white/20"
      >
        {/* Üst Kısım: Logo + İsim + Geliştirici */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/logo.png"
            alt="App Logo"
            width={100}
            height={100}
            className="rounded-2xl shadow-lg"
          />
          <h1
            className="text-4xl font-bold text-white cursor-pointer hover:scale-105 transition-transform"
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
            className="text-white/70 cursor-pointer hover:text-white transition"
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
        <div className="flex justify-center space-x-4 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.location.hash = tab.id; // ✅ Hash güncelleme
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                activeTab === tab.id
                  ? "bg-transparent backdrop-blur-md border border-white/30 text-white shadow-lg ring-1 ring-white/40"
                  : "bg-transparent backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:backdrop-blur-md hover:border-white/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* İçerik */}
        <div className="mt-8 text-white">
          <AnimatePresence mode="wait">
            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p>
                  Klasik 2048 bulmaca oyunu şimdi modern bir tasarımla
                  karşınızda! Kaydır, birleştir ve en yüksek sayıya ulaşmaya
                  çalış. Zihnini zorlayan, reflekslerini geliştiren bu eğlenceli
                  sayı bulmacasında kendini test et.
                </p>

                <h3 className="text-xl font-semibold">📌 Nasıl Oynanır?</h3>
                <ul className="list-disc list-inside space-y-1 text-white/80">
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

                <h3 className="text-xl font-semibold">✨ Özellikler</h3>
                <ul className="list-disc list-inside space-y-1 text-white/80">
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

                <h3 className="text-xl font-semibold">🏆 Rekabet ve Eğlence</h3>
                <p>
                  Kendi rekorunu kır, arkadaşlarınla skorlarını kıyasla ve daha
                  yüksek sayılara ulaşmak için stratejini geliştir. Her oyun
                  yeni bir meydan okuma!
                </p>
                <p>
                  2048, hem hızlı oynanabilecek bir oyun arıyorsan hem de
                  strateji ve sabır gerektiren bir bulmaca istiyorsan tam sana
                  göre. İster boş zamanlarında birkaç hamle yap, ister saatlerce
                  oynayarak rekorunu geliştir.
                </p>
                <p>Şimdi indir, 2048 macerana başla!</p>
              </motion.div>
            )}

            {activeTab === "updates" && (
              <motion.div
                key="updates"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {updates ? (
                  <div className="space-y-2">
                    <p>
                      <strong>Son Güncelleme:</strong> {updates.lastUpdate}
                    </p>
                    <p>
                      <strong>Sürüm:</strong> {updates.version}
                    </p>
                    <p>{updates.changes}</p>
                  </div>
                ) : (
                  <p>Güncellemeler yükleniyor...</p>
                )}
              </motion.div>
            )}

            {activeTab === "privacy" && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold">Gizlilik Politikası</h2>
                <p>
                  Bu İnternet sitesini kullanarak kişisel verilerinizin
                  işlenmesini kabul etmiş olursunuz. Güvenliğiniz bizim için
                  önemli. Bu sebeple, bizimle paylaşacağınız kişisel
                  verileriniz hassasiyetle korunmaktadır.
                </p>

                <h4 className="text-xl font-semibold">🔹 Veri Sorumlusu</h4>
                <p>
                  Ben, Bahoz, veri sorumlusu olarak, bu gizlilik ve kişisel
                  verilerin korunması politikası ile ziyaret etmekte olduğunuz
                  İnternet sitesi kapsamında hangi kişisel verilerinizin hangi
                  amaçlarla işleneceği, işlenen verilerin kimlerle ve hangi
                  sebeplerle paylaşılabileceği, veri işleme yöntemimiz ve hukuki
                  sebepleri ile; işlenen verilerinize ilişkin haklarınızın neler
                  olduğu hususunda siz kullanıcılarımızı aydınlatmayı
                  amaçlıyorum.
                </p>

                <h4 className="text-xl font-semibold">
                  🔹 Toplanan Kişisel Veriler
                </h4>
                <ul className="list-disc list-inside space-y-1 text-white/80">
                  <li>Cihaz bilgileri</li>
                  <li>E-posta adresi</li>
                </ul>

                <h4 className="text-xl font-semibold">🔹 Kullanılan Servisler</h4>
                <p>
                  Analitik ve izleme: Google Analytics, ziyaretçi
                  davranışlarını ve site kullanımını analiz etmek için
                  kullanılmaktadır.
                </p>
                <p>
                  Sosyal medya: Google ile giriş, güvenli kimlik doğrulama için
                  kullanılmaktadır.
                </p>

                <h4 className="text-xl font-semibold">
                  🔹 Verilerin İşlenme Amaçları
                </h4>
                <p>
                  Kişisel verileriniz, bu İnternet sitesi tarafından amacına
                  uygun hizmet sunulabilmesi, yasal yükümlülüklerin yerine
                  getirilmesi, hizmet kalitesinin artırılması, iletişim,
                  güvenlik ve gerektiğinde yasal merciler ile bilgi
                  paylaşılabilmesi amaçları ile işlenmektedir.
                </p>

                <h4 className="text-xl font-semibold">🔹 Verilerin Aktarılması</h4>
                <p>
                  Toplanan kişisel verileriniz, yasal zorunluluklar haricinde
                  açık rızanız olmadan üçüncü kişiler ile paylaşılmaz.
                </p>

                <h4 className="text-xl font-semibold">🔹 Çerez Kullanımı</h4>
                <p>
                  Bu İnternet sitesi çerez kullanmaktadır. Çerezler, bir İnternet
                  sayfası ziyaret edildiğinde kullanıcılara ilişkin birtakım
                  bilgilerin depolanmasına izin verir.
                </p>

                <h4 className="text-xl font-semibold">
                  🔹 Yasal Haklarınız (KVKK & GDPR)
                </h4>
                <p>
                  KVKK ve GDPR kapsamında kişisel verilerinizle ilgili erişim,
                  düzeltme, silme, itiraz ve taşınabilirlik gibi haklara
                  sahipsiniz.
                </p>

                <h4 className="text-xl font-semibold">🔹 İletişim</h4>
                <p>Gizlilik veya veri talepleri için: bahozerkek21@gmail.com</p>
                <p>
                  Bu politika, 22 Eylül 2025 tarihinde yürürlüğe girmiştir ve
                  gerektiğinde güncellenir.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
