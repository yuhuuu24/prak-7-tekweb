import React from 'react';

function Showcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Showcase <span className="text-blue-600">Student Projects</span>
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program
          Ruang Ekspresi
        </p>
        <div className="bg-white rounded-3xl shadow-md p-8 flex items-center relative">
          {/* Tombol Navigasi Kiri */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Left Side */}
          <div className="w-1/2 pr-8">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium inline-block mb-4">
              UI/UX Design
            </span>
            <h3 className="text-2xl font-bold mb-2">Creative Portfolio Platform</h3>
            <p className="text-gray-600 mb-4">
              Platform showcase karya mahasiswa dengan sistem rating dan feedback
              komunitas
            </p>

            {/* Tim Pembuat */}
            <h4 className="font-semibold mb-2">Tim Pembuat:</h4>
            <ul className="list-none pl-0 mb-4">
              {/* Anggota Tim 1 */}
              <li className="flex items-center mb-2">
                <img src="src/assets/budi 1.png" alt="Budi Santoso" className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <span>Budi Santoso</span>
                  <p className="text-gray-600 text-sm">Frontend Developer</p>
                </div>
              </li>
              {/* Anggota Tim 2 */}
              <li className="flex items-center mb-2">
                <img src="src/assets/budi 1.png" alt="Rani Dewi" className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <span>Budi Santoso</span>
                  <p className="text-gray-600 text-sm">UI Designer</p>
                </div>
              </li>
              {/* Anggota Tim 3 */}
              <li className="flex items-center mb-2">
                <img src="src/assets/budi 1.png" alt="Doni Setiawan" className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <span>Budi Santoso</span>
                  <p className="text-gray-600 text-sm">Backend Developer</p>
                </div>
              </li>
            </ul>

            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0H5m7 8v5m-1-.5h2"></path>
              </svg>
              Live Demo
            </a>
          </div>

          {/* Right Side */}
          <div className="w-1/2">
            <img
              src="src/assets/showcase.png" // Ganti dengan path gambar Anda
              alt="Showcase Image"
              className="rounded-3xl shadow-lg"
            />
          </div>

          {/* Tombol Navigasi Kanan */}
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Showcase;