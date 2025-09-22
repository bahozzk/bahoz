import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const PrivacyPolicyPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>2048</title>
        <meta
          name="description"
          content="2048 oyununun gizlilik politikası: hangi verileri topluyoruz, nasıl kullanıyoruz ve güvenliği nasıl sağlıyoruz?"
        />
      </Head>

      <div className="max-w-3xl mx-auto sm:px-4 md:px-6 py-8">
        {/* Oyun Bilgileri */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/app-logo.png"
              alt="App Logo"
              width={100}
              height={100}
              className="rounded-xl"
            />
            <div>
              <h1 className="text-3xl font-bold">2048</h1>
              <p className="text-gray-600">
                Geliştirici:{" "}
                <a
                  href="https://play.google.com/store/apps/dev?id=7998220962786097995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Bahoz
                </a>
              </p>
            </div>
          </div>

          {/* Oyun Açıklaması */}
          <div className="mt-4 text-gray-800 leading-relaxed">
            <p>
              Klasik 2048 bulmaca oyunu şimdi modern bir tasarımla karşınızda!
              Kaydır, birleştir ve en yüksek sayıya ulaşmaya çalış. Zihnini
              zorlayan, reflekslerini geliştiren bu eğlenceli sayı bulmacasında
              kendini test et.
            </p>

            <h2 className="text-xl font-semibold mt-4">🎮 Nasıl Oynanır?</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Tahtadaki kutucukları kaydırarak aynı sayıları birleştir.</li>
              <li>2+2 = 4, 4+4 = 8... derken hedefin 2048&apos;e ulaşmak!</li>
              <li>
                Her hamlede yeni bir kutucuk belirir. Stratejini iyi kurmalısın.
              </li>
              <li>Oyun tahtası dolmadan en yüksek puanı yapmaya çalış.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">✨ Özellikler</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Basit ama bağımlılık yapan klasik 2048 deneyimi</li>
              <li>Renkli ve modern tasarım</li>
              <li>Kolay dokunmatik kontroller</li>
              <li>İlerlemeni takip eden skor sistemi</li>
              <li>Sonsuz oynanış: 2048&apos;e ulaştığında oyun bitmez</li>
              <li>İnternetsiz oynanabilir (offline mod)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">🏆 Rekabet ve Eğlence</h2>
            <p>
              Kendi rekorunu kır, arkadaşlarınla skorlarını kıyasla ve daha
              yüksek sayılara ulaşmak için stratejini geliştir. Her oyun yeni
              bir meydan okuma!
            </p>
          </div>
        </div>

        {/* Gizlilik Politikası Accordion */}
        <div className="bg-white rounded-2xl shadow">
          <button
            type="button"
            className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            Gizlilik Politikası
            {isOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="policy-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 text-gray-800 space-y-4 overflow-hidden"
              >
                <p>
                  Bahoz olarak kullanıcı gizliliğine önem veriyoruz. Bu politika,
                  hangi verileri topladığımızı, nasıl kullandığımızı ve nasıl
                  koruduğumuzu açıklar.
                </p>

                <h3 className="text-lg font-semibold">Toplanan Veriler</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Uygulama kullanım verileri</li>
                  <li>Cihaz bilgileri (model, işletim sistemi vb.)</li>
                  <li>Konum verileri (sadece kullanıcı onayı ile)</li>
                </ul>

                <h3 className="text-lg font-semibold">Verilerin Kullanımı</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Performansı izlemek ve iyileştirmek</li>
                  <li>Kullanıcı deneyimini geliştirmek</li>
                  <li>Uygulama güvenliğini sağlamak</li>
                  <li>Yazılım hatalarını gidermek</li>
                </ul>

                <h3 className="text-lg font-semibold">Veri Güvenliği</h3>
                <p>
                  Kişisel bilgilerinizi üçüncü şahıslarla paylaşmıyoruz. Ancak
                  performans analizleri için güvenilir üçüncü taraf hizmetleri
                  kullanılabilir.
                </p>

                <h3 className="text-lg font-semibold">Çocukların Gizliliği</h3>
                <p>
                  13 yaş altındaki çocuklardan bilerek bilgi toplamıyoruz. Eğer
                  böyle bir durum fark ederseniz bizimle iletişime geçin.
                </p>

                <h3 className="text-lg font-semibold">Değişiklikler</h3>
                <p>
                  Gizlilik politikası zaman zaman güncellenebilir.
                  Güncellenmiş politika bu sayfada yayınlandığı anda geçerlidir.
                </p>

                <h3 className="text-lg font-semibold">İletişim</h3>
                <p>
                  Bize ulaşın:{" "}
                  <a
                    href="mailto:bahozerkek21@gmail.com"
                    className="text-blue-600 underline"
                  >
                    bahozerkek21@gmail.com
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
