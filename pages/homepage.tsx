import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası - Bahoz</title>
        <meta name="description" content="Mobil oyunumuz için gizlilik politikası" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <header className="mb-10 text-center">
            <img
              src="/assets/images/app-logo.png"
              alt="App Logo"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-xl shadow-md"
            />
            <h1 className="text-3xl font-bold">Gizlilik Politikası</h1>
            <p className="text-gray-600 mt-2">
              Bahoz mobil oyunu için gizlilik politikası
            </p>
          </header>

          <section className="space-y-6 text-base leading-relaxed">
            <p>
              Bahoz olarak gizliliğinize önem veriyoruz. Bu gizlilik politikası,
              mobil oyunumuzu kullanırken hangi bilgilerin toplandığını, nasıl
              saklandığını ve hangi amaçlarla kullanıldığını açıklar.
            </p>

            <h2 className="text-xl font-semibold">Toplanan Bilgiler</h2>
            <p>
              Uygulamamız kişisel verilerinizi izinsiz toplamaz. Sadece oyun
              deneyimini geliştirmek amacıyla anonim kullanım verileri
              toplanabilir.
            </p>

            <h2 className="text-xl font-semibold">Üçüncü Taraf Servisler</h2>
            <p>
              Google Play Games ve reklam sağlayıcıları gibi üçüncü taraf
              servisler kullanılabilir. Bu servislerin kendi gizlilik
              politikalarını incelemenizi tavsiye ederiz.
            </p>

            <h2 className="text-xl font-semibold">Veri Güvenliği</h2>
            <p>
              Kişisel verileriniz korunur ve yalnızca belirtilen amaçlar
              doğrultusunda kullanılır.
            </p>

            <h2 className="text-xl font-semibold">İletişim</h2>
            <p>
              Gizlilik politikamızla ilgili sorularınız için bizimle şu adresten
              iletişime geçebilirsiniz:{" "}
              <a
                href="mailto:contact@bahoz.dev"
                className="text-blue-600 underline"
              >
                contact@bahoz.dev
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
