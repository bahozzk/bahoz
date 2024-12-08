import React from 'react';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

const PrivacyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black p-6 text-white">
      {/* Uygulama Bilgileri Kartı */}
      <div className="flex items-center justify-start w-full max-w-screen-sm p-4 bg-black bg-opacity-60 rounded-lg mb-4">
        <Image
          src="/assets/images/app-logo.png"
          alt="App Logo"
          width={150}  // Logo boyutunu büyütme
          height={100} // Geçerli bir sayı kullanıldı
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Çapraz Geçiş</h1>
          <p className="text-lg">Geliştirici: <a href="https://www.example.com" className="text-blue-500 underline">Bahoz</a></p>
        </div>
      </div>

      {/* Gizlilik Sözleşmesi Kartı */}
      <div className="w-full max-w-screen-sm p-6 bg-black bg-opacity-60 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Gizlilik Sözleşmesi</h2>
        <p>
          Çapraz Geçiş uygulaması, kullanıcıların gizliliğini ciddiye alır. Bu gizlilik politikası, uygulamayı kullanırken topladığımız bilgileri nasıl kullandığımızı ve koruduğumuzu açıklar.
          <br /><br />
          1. **Toplanan Bilgiler**: Uygulamayı kullanırken, cihazınıza ve kullanım alışkanlıklarınıza dair bazı anonim veriler toplanabilir. Bu veriler, yalnızca uygulamanın iyileştirilmesi ve kullanıcı deneyiminin geliştirilmesi için kullanılacaktır.
          <br /><br />
          2. **Bilgilerin Kullanımı**: Toplanan bilgiler, uygulama içi performansı analiz etmek ve size daha iyi bir deneyim sunmak için kullanılacaktır. Hiçbir kişisel veriniz üçüncü taraflarla paylaşılmayacaktır.
          <br /><br />
          3. **Çerezler ve İzleme**: Uygulama, kullanıcı deneyimini iyileştirmek için çerezler kullanabilir. Çerezler, web siteniz ile uygulama arasında verilerin aktarılmasını sağlayarak, kullanım bilgilerinizi toplayabilir.
          <br /><br />
          4. **Güvenlik**: Kullanıcı verileri, güvenli sunucularda saklanır ve sadece yetkilendirilmiş kişilerin erişimine açıktır. Verilerin korunması için endüstri standartlarında güvenlik önlemleri alınmıştır.
          <br /><br />
          5. **Değişiklikler**: Gizlilik politikası, zaman zaman güncellenebilir. Bu tür değişiklikler, uygulama içerisinde duyurulacaktır. Gizlilik politikamızda yapılan herhangi bir değişiklik, uygulamayı kullandığınızda geçerli olacaktır.
          <br /><br />
          6. **İletişim**: Gizlilik politikamız hakkında sorularınız varsa, bizimle <a href="mailto:bahozerkek21@gmail.com" className="text-blue-500 underline">bahozerkek21@gmail.com</a> adresinden iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
