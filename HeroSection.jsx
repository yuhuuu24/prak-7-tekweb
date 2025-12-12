import React from 'react';

function HeroSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              RUANG EKSPRESI: <br />
              <span className="text-blue-600">
                Wadah kreatif & Kompetitif Mahasiswa
              </span>
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="bg-yellow-200 text-yellow-700 px-4 py-2 rounded-full font-medium text-sm">
                Ideation
              </span>
              <span className="bg-green-200 text-green-700 px-4 py-2 rounded-full font-medium text-sm">
                Creation
              </span>
              <span className="bg-blue-200 text-blue-700 px-4 py-2 rounded-full font-medium text-sm">
                Collaboration
              </span>
              <span className="bg-pink-200 text-pink-700 px-4 py-2 rounded-full font-medium text-sm">
                Guidance & Support
              </span>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* TAMBAHKAN GAMBAR HERO DI SINI */}
            <img
              src="src/assets/hero.png" // Ganti dengan path gambar Anda
              alt="Hero Image"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;