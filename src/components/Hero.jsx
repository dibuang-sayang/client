import backgroundVideo from '../assets/tes.mp4';

export default function Hero() {
  return (
    <div className="mt-16 relative overflow-y-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 right-0 w-screen z-0"
      >
        <source
          src={backgroundVideo}
          type="video/webm"
          alt="HTML5 background video"
        />
      </video>
      <div className="z-20 relative bg-indigo-500 bg-opacity-25">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="z-20 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
              <img
                src="https://cdn.discordapp.com/attachments/801791591927775257/802085643224088586/logo.png"
                alt="logo"
              />
            </h2>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-indigo-500 bg-opacity-25 h-1/2" />
        <div
          className="absolute bg-white -bottom-1 w-full"
          style={{ height: '55%' }}
        />
        <div className="flex flex-wrap px-20">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <img
                    alt="..."
                    src="https://cdn.discordapp.com/attachments/803847554725838858/803848160191053824/anggota.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '200px' }}
                  />
                </div>
                <h6 className="text-xl font-semibold">Anggota</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Menjadi bagian dari kami merupakan sebuah kehormatan, kami
                  menganggap komunitas ini adalah bagian dari keluarga kami
                  sendiri, untuk mengubah dunia kita perlu untuk bekerja sama!
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <img
                    alt="..."
                    src="https://cdn.discordapp.com/attachments/803847554725838858/803849026327150602/pengepul.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '200px' }}
                  />
                </div>
                <h6 className="text-xl font-semibold">Pengepul</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Kami menyadari setiap sampah yang kita pikir tidak memiliki
                  daya jual, ternyata memiliki nilai jual dan juga dapat menjadi
                  resource baru untuk menjadi bahan untuk produk upcycle.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <img
                    alt="..."
                    src="https://cdn.discordapp.com/attachments/803847554725838858/803851214751006770/pengrajin.png"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '200px' }}
                  />
                </div>
                <h6 className="text-xl font-semibold">Pengrajin</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Apabila kalian dapat mengubah nilai sampah yang dari tidak
                  ternilai menjadi sesuatu yang lebih bermanfaat bergabunglah
                  bersama kami sebagai pengrajin! disini kalian juga dapat
                  menjual produk upcycling anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
