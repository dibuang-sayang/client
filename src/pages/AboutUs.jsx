export default function AboutUs() {
  return (
    <>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: '75vh',
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.discordapp.com/attachments/803847554725838858/803864301638909962/bg-2.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    About us.
                  </h1>
                  <h5 className="mt-4 text-md text-gray-300">
                    Dibuang Sayang memiliki visi untuk mengubah pola pikir
                    masyarakat terhadap sampah plastik. Mulai dari menciptakan
                    gerakan berbasis komunitas, dimana masyarakat dapat belajar
                    lebih banyak tentang pengelolaan sampah plastik, daur ulang
                    dan pembuatan produk upcycling. Kami melihat masalah serta
                    potensinya. Seiring berjalannya waktu kami percaya kita
                    semua dapat membangun dunia yang lebih baik.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3
                h3
                className="mt-4 text-xl text-left font-semibold leading-relaxed text-gray-600"
              >
                Masalah plastik sudah sangat jelas sekarang. Jika Anda berada di
                halaman web ini, kemungkinan Anda sudah mengetahuinya. Dan
                pahami gravitasinya.
              </h3>
              <h3
                h3
                className="mt-4 text-xl font-semibold text-right leading-relaxed text-gray-600"
              >
                dibuang sayang hadir dengan misi untuk mengurangi sampah plastik
                yang berada di sekitar kita. dengan membuat komunitas seperti
                ini kami berharap semua orang dapat belajar bersama dan juga
                termotivasi untuk mengadopsi gaya hidup zero waste.
              </h3>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white-600 rounded-lg ">
                <img
                  alt="..."
                  src="https://cdn.discordapp.com/attachments/803847554725838858/803854184076017674/recycle.png"
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src="https://cdn.discordapp.com/attachments/803847554725838858/803898802368544778/artwork_8.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="mt-4 text-xl font-semibold leading-relaxed text-gray-600">
                    dibuang sayang adalah kombinasi dari manusia, mesin,
                    platform, dan pengetahuan untuk menciptakan sistem daur
                    ulang secara alternatif Setiap orang dapat bergabung dengan
                    dibuang sayang (ya, Kamu juga bisa kok!). Anda dapat
                    register dan juga menerapkan prinsip hidup zero waste dalam
                    hidup anda.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-gray-100 py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: '80px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto  px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="mt-4 text-xl font-semibold leading-relaxed text-gray-600">
                    Solusi kami melihat orang-orang sebagai kunci untuk
                    memperbaiki kacaunya limbah plastik di dunia ini. Pendekatan
                    dibuang sayang mengandalkan orang lain untuk mewujudkan
                    perubahan yang diperlukan. Langkah kecil, dikalikan jutaan.
                    Di situlah kita bisa memenangkan pertempuran kita.
                  </h3>
                </div>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src="https://cdn.discordapp.com/attachments/803847554725838858/803896703861260328/apa_aja_lah_ini.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Tentang Kami!</h2>
                <h5 className="text-lg leading-relaxed m-4 text-gray-600">
                  Kami adalah siswa Hacktiv8 Batch Remote - 006, memiliki daya
                  juang tingi dalam belajar pemrograman, dalam waktu 4 bulan
                  kami belajar untuk membuat website / aplikasi. dan mengerjakan
                  website ini dalam waktu 5 hari! Hire us! 😎
                </h5>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://media.discordapp.net/attachments/801791591927775257/803844812054593536/wicak.png?width=670&height=670"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '300px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Wicaksana Pratama</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      FullStack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() =>
                          window.open('https://github.com/wypratama')
                        }
                      >
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://media.discordapp.net/attachments/801791591927775257/803844842597777418/tio.png?width=670&height=670"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '300px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Tio Rizky</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      FullStack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() =>
                          window.open('https://github.com/tiorzal')
                        }
                      >
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://media.discordapp.net/attachments/801791591927775257/803844861551443968/icanq.png?width=670&height=670"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '300px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ichsan Natawijaya</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      FullStack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => window.open('https://github.com/icanq')}
                      >
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://media.discordapp.net/attachments/801791591927775257/803844820225228860/hapis.png?width=670&height=670"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '300px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Hafis Tafsani</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      FullStack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() =>
                          window.open('https://github.com/hafis915')
                        }
                      >
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
