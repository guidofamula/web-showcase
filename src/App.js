import { Download, SectionWrapper, Features } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title='Contoh Aplikasi Untuk Marketplace NFT'
        description='System database belum diberikan, hanya sample tampilan UI menggunakan lintas platform react native'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />

      <SectionWrapper
        title='Tampilan Pintar Untuk Sebuah Marketplace'
        description='Nikmati pengalaman antarmuka UI yang bersih, minimalis dan modern'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title='Deployment Testing'
        description='ProNef Testing dibangun menggunakan Expo yang berjalan secara native di semua perangkat pengguna.'
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title='Mengusung konsep modern dan kreatifitas'
        description='Contoh aplikasi ini memiliki dua layar tampilan, layar pertama mencantumkan semua NFT, sedangkan yang kedua menampilkan detail dari masing-masing NFT tersebut'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />

      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by{" "}
          <span className='bold'>
            <a
              className='hover:text-black hover:font-bold'
              href='https://guidofamula.com/'
              target='_blank'
              rel='noreferrer'
            >
              Guido Famula
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default App;
