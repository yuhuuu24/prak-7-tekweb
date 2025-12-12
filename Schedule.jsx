import React from 'react';

function Schedule() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Jadwal & Program Kegiatan
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan
          pengembangan skill Setiap Sabtu
        </p>

        {/* Jadwal Sesi */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-4">
            <svg
              className="w-6 h-6 inline-block mr-1 align-middle"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Setiap Sabtu
          </h3>
          <div className="flex justify-center flex-wrap gap-4">
            {/* Sesi Pagi */}
            <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-3xl p-6">
              <h4 className="text-lg font-semibold mb-2">Sesi Pagi</h4>
              <div className="flex items-center mb-1">
                <img
                  src="src/assets/jam.png" // Ganti dengan path gambar jam pagi Anda
                  alt="Jam Pagi"
                  className="w-5 h-5 mr-1"
                />
                <span>09.00 - 12.00 WIB</span>
              </div>
              <p className="text-gray-700 text-sm">
                Workshop, Career Talks, dan Extra Classes intensif
              </p>
            </div>

            {/* Sesi Sore */}
            <div className="bg-gradient-to-r from-yellow-100 to-green-100 rounded-3xl p-6">
              <h4 className="text-lg font-semibold mb-2">Sesi Sore</h4>
              <div className="flex items-center mb-1">
                <img
                  src="src/assets/jam.png" // Ganti dengan path gambar jam sore Anda
                  alt="Jam Sore"
                  className="w-5 h-5 mr-1"
                />
                <span>16.00 - 19.00 WIB</span>
              </div>
              <p className="text-gray-700 text-sm">
                Project Work, Mentoring, dan Collaboration Session
              </p>
            </div>
          </div>
        </div>

        {/* Program Unggulan */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-4">
            Program Unggulan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Career Talks */}
            <div className="bg-yellow-50 rounded-3xl shadow-md p-6 flex flex-col items-center">
              <img
                src="src/assets/chat.png" // Ganti dengan path gambar Anda
                alt="Career Talks"
                className="w-8 h-8 mb-2"
              />
              <h4 className="text-lg font-semibold text-center mb-2">
                Career Talks
              </h4>
              <p className="text-gray-700 text-sm text-center">
                Sesi sharing dari praktisi industri dan alumni sukses
              </p>
            </div>

            {/* Extra Classes */}
            <div className="bg-green-50 rounded-3xl shadow-md p-6 flex flex-col items-center">
              <img
                src="src/assets/book.png" // Ganti dengan path gambar Anda
                alt="Extra Classes"
                className="w-8 h-8 mb-2"
              />
              <h4 className="text-lg font-semibold text-center mb-2">
                Extra Classes
              </h4>
              <p className="text-gray-700 text-sm text-center">
                Kelas tambahan skill development dan workshop teknis 
              </p>
            </div>

            {/* Mentoring */}
            <div className="bg-blue-50 rounded-3xl shadow-md p-6 flex flex-col items-center">
              <img
                src="src/assets/mingcute.png" // Ganti dengan path gambar Anda
                alt="Mentoring"
                className="w-8 h-8 mb-2"
              />
              <h4 className="text-lg font-semibold text-center mb-2">Mentoring</h4>
              <p className="text-gray-700 text-sm text-center">
                mengerjakan project nyata dengan bimbingan mentor 
              </p>
            </div>

            {/* Collaboration Session */}
            <div className="bg-purple-50 rounded-3xl shadow-md p-6 flex flex-col items-center">
              <img
                src="src/assets/org2.png" // Ganti dengan path gambar Anda
                alt="Collaboration Session"
                className="w-8 h-8 mb-2"
              />
              <h4 className="text-lg font-semibold text-center mb-2">
                Collaboration Session
              </h4>
              <p className="text-gray-700 text-sm text-center">
                Sesi konsultasi personal dengan mentor berpengalaman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;