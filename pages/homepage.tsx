// pages/homepage.tsx
import Head from "next/head";
import Image from "next/image";

export default function Homepage(): JSX.Element {
  // Play Store linkleri (gerekirse kendine göre değiştir)
  const developerUrl =
    "https://play.google.com/store/apps/dev?id=7998220962786097995";
  const gameUrl =
    "https://play.google.com/store/apps/details?id=com.bahoz.game2048";

  return (
    <>
      <Head>
        <title>2048 — Bahoz</title>
        <meta
          name="description"
          content="2048 oyunu — klasik sayı bulmacası, modern tasarım. Bahoz tarafından geliştirildi."
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-[linear-gradient(180deg,_#0f172a_0%,_#071130_100%)]">
        <div className="w-full max-w-4xl">
          {/* Üst: Başlık + küçük açıklama */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
              2048
            </h1>
            <p className="mt-2 text-sm text-slate-200/80">
              Klasik 2048 bulmacası — modern tasarım ile.
            </p>
          </header>

          {/* İçerik 2 kolon: sola görsel + isim, sağda liquid glass panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* SOL: Logo + Başlık + Developer */}
            <div className="flex flex-col items-center md:items-start gap-6">
              {/* Kare görsel, köşeleri oval */}
              <div
                className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105"
                aria-hidden="false"
              >
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

              {/* Kısa Oyun Açıklaması - özet */}
              <div className="mt-4 text-sm text-slate-200/85 leading-relaxed max-w-sm">
                Klasik 2048 bulmaca oyunu şimdi modern bir tasarımla karşınızda!
                Kaydır, birleştir ve en yüksek sayıya ulaşmaya çalış. Zihnini
                zorlayan, reflekslerini geliştiren bu eğlenceli sayı
                bulmacasında kendini test et.
              </div>
            </div>

            {/* SAĞ: Liquid glass panel - içindeki bölümler hash ile */}
            <aside
              className="relative p-1 rounded-3xl"
              aria-label="Navigation panel"
            >
              {/* Liquid glass container */}
              <div
                className="backdrop-blur-md bg-white/6 border border-white/10 rounded-3xl p-6 shadow-glass"
                style={{
                  WebkitBackdropFilter: "blur(12px)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Sekme başlıkları */}
                <nav className="flex gap-3 mb-4" aria-label="Sections">
                  <a
                    href="#about"
                    className="px-3 py-1 rounded-full text-sm font-medium text-slate-200/90 bg-white/3 hover:bg-white/6 transition"
                  >
                    About
                  </a>
                  <a
                    href="#features"
                    className="px-3 py-1 rounded-full text-sm font-medium text-slate-200/90 bg-white/3 hover:bg-white/6 transition"
                  >
                    Features
                  </a>
                  <a
                    href="#privacy"
                    className="px-3 py-1 rounded-full text-sm font-medium text-slate-200/90 bg-white/3 hover:bg-white/6 transition"
                  >
                    Privacy
                  </a>
                </nav>

                {/* İçerik bölümleri */}
                <div className="space-y-6">
                  {/* ABOUT */}
                  <section id="about" aria-labelledby="about-heading">
                    <h3
                      id="about-heading"
                      className="text-lg font-semibold text-white/95"
                    >
                      Hakkında
                    </h3>
                    <p className="mt-2 text-sm text-slate-200/80 leading-relaxed">
                      Klasik 2048 bulmaca oyunu şimdi modern bir tasarımla
                      karşınızda! Kaydır, birleştir ve en yüksek sayıya ulaşmaya
                      çalış. Zihnini zorlayan, reflekslerini geliştiren bu
                      eğlenceli sayı bulmacasında kendini test et.
                    </p>
                  </section>

                  {/* FEATURES */}
                  <section id="features" aria-labelledby="features-heading">
                    <h3
                      id="features-heading"
                      className="text-lg font-semibold text-white/95"
                    >
                      Özellikler
                    </h3>
                    <ul className="mt-2 text-sm text-slate-200/80 list-disc ml-5 space-y-1">
                      <li>Basit ama bağımlılık yapan klasik 2048 deneyimi</li>
                      <li>Renkli ve modern tasarım</li>
                      <li>Kolay dokunmatik kontroller</li>
                      <li>Skor takibi ve offline oynanış</li>
                      <li>Sonsuz oynanış: 2048&apos;e ulaştıktan sonra devam edebilirsin</li>
                    </ul>
                  </section>

                  {/* PRIVACY */}
                  <section id="privacy" aria-labelledby="privacy-heading">
                    <h3
                      id="privacy-heading"
                      className="text-lg font-semibold text-white/95"
                    >
                      Gizlilik
                    </h3>

                    <p className="mt-2 text-sm text-slate-200/80 leading-relaxed">
                      Kullanıcı gizliliğine önem veriyoruz. Uygulama, kişisel
                      kimlik bilgilerinizi izinsiz toplamaz. Sadece anonim ve
                      kullanım amaçlı veri toplanabilir (ör. oyun oturum
                      istatistiği). Üçüncü taraf servisler (reklam, analiz vb.)
                      kullanılıyorsa, bu servislerin kendi gizlilik politikalarını
                      incelemenizi tavsiye ederiz.
                    </p>

                    <h4 className="mt-3 text-sm font-semibold text-white/90">
                      Toplanan veriler
                    </h4>
                    <ul className="mt-2 text-sm text-slate-200/80 list-disc ml-5">
                      <li>Anonim kullanım verileri (oyun süreleri, skorlar)</li>
                      <li>Cihaz tipi ve işletim sistemi bilgisi (genel amaçlı)</li>
                      <li>Konum verisi sadece açık onayla ve sınırlı olarak alınır</li>
                    </ul>

                    <h4 className="mt-3 text-sm font-semibold text-white/90">
                      İletişim
                    </h4>
                    <p className="mt-2 text-sm text-slate-200/80">
                      Gizlilik veya veri talepleri için:
                      <br />
                      <a
                        href="mailto:bahozerkek21@gmail.com"
                        className="text-sky-300 underline"
                      >
                        bahozerkek21@gmail.com
                      </a>
                    </p>
                  </section>
                </div>
              </div>

              {/* İnce alt gölge / accent bar */}
              <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 opacity-80" />
            </aside>
          </div>

          {/* ALT: Küçük footer / aksiyonlar */}
          <footer className="mt-10 text-center text-sm text-slate-300/85">
            <div className="inline-flex gap-4 items-center">
              <a
                href={gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition text-white/95"
              >
                Oyunu İndir
              </a>

              <a
                href={developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/8 hover:bg-white/6 transition text-white/95"
              >
                Geliştirici Sayfası
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              © {new Date().getFullYear()} Bahoz — Tüm hakları saklıdır
            </p>
          </footer>
        </div>
      </main>

      {/* Küçük stiller (Tailwind dışında bir şey gerekiyorsa buraya eklenir) */}
      <style jsx>{`
        /* Hafif floating animasyon ve glass gölgesi */
        .shadow-glass {
          box-shadow: 0 8px 30px rgba(2, 6, 23, 0.6);
        }
        a:focus {
          outline: 2px solid rgba(99, 102, 241, 0.6);
          outline-offset: 4px;
        }
        /* Smooth scroll for anchors */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
