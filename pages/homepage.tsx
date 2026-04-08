import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Bu kısım homepage fonksiyonu içinde olmalı
  const [updates, setUpdates] = useState<any>(null);

  useEffect(() => {
    fetch("/api/updates")
      .then((res) => res.json())
      .then((data) => setUpdates(data))
      .catch((err) => console.error("Güncellemeler yüklenemedi:", err));
  }, []);

  // ✅ Hash desteği
  useEffect(() => {
    if (window.location.hash) {
      const tab = window.location.hash.replace("#", "");
      if (["about", "updates"].includes(tab)) {
        setActiveTab(tab);
      }
    }
  }, []);

  const tabs = [
    { id: "about", label: "Hakkında" },
    { id: "updates", label: "Güncellemeler" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      {/* Kart - Liquid Glass */}
      <div
        className="relative w-full max-w-3xl p-6 rounded-2xl
    bg-transparent backdrop-blur-xl
    shadow-2xl
    border border-white/20
    ring-1 ring-white/40"
      >
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
              onClick={() => {
                setActiveTab(tab.id);
                window.location.hash = tab.id; // ✅ Hash güncelleme
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95
  ${activeTab === tab.id
    ? "bg-transparent backdrop-blur-md border border-white/30 text-white shadow-lg ring-1 ring-white/40"
    : "bg-transparent backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:backdrop-blur-md hover:border-white/40"
  }`}
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
                  karşınızda! Kaydır, birleştir ve en yüksek sayıya ulaşmaya
                  çalış. Zihnini zorlayan, reflekslerini geliştiren bu eğlenceli
                  sayı bulmacasında kendini test et.
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
                  <li>Oyun tahtası dolmadan en yüksek puanı yapmaya çalış.
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
                  Kendi rekorunu kır, arkadaşlarınla skorlarını kıyasla ve
                  daha yüksek sayılara ulaşmak için stratejini geliştir. Her oyun
                  yeni bir meydan okuma!
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

            {activeTab === "updates" && (
              <motion.div
                key="updates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-2 text-white/80"
              >
                {updates ? (
                  <>
                    <p>
                      <strong>Son Güncelleme:</strong> {updates.lastUpdate}
                    </p>
                    <p>
                      <strong>Sürüm:</strong> {updates.version}
                    </p>
                    <p>{updates.changes}</p>
                  </>
                ) : (
                  <p>Güncellemeler yükleniyor...</p>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
