import React from 'react';

function FourPillars() {
  const pillars = [
    {
      title: 'Ideation',
      description:
        'Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.',
      smallImage: 'src/assets/lamp.png', // Ganti dengan path gambar kecil Anda
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Creation',
      description:
        'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.',
      smallImage: 'src/assets/kunci.png', // Ganti dengan path gambar kecil Anda
      bgColor: 'bg-green-50',
    },
    {
      title: 'Collaboration',
      description:
        'Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.',
      smallImage: 'src/assets/org.png', // Ganti dengan path gambar kecil Anda
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Guidance & Support',
      description:
        'Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.',
      smallImage: 'src/assets/twisuda.png', // Ganti dengan path gambar kecil Anda
      bgColor: 'bg-pink-50',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Empat Pilar Ruang Ekspresi
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Komprehensif yang dirancang untuk mengembangkan potensi kreatif
          mahasiswa melalui pendekatan holistik
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.bgColor} rounded-3xl shadow-md p-6 flex flex-col items-center`}
            >
              <img
                src={pillar.smallImage} // Menampilkan gambar kecil
                alt={pillar.title}
                className="h-12 mb-2" // Ukuran gambar kecil
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-700 text-sm text-center">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FourPillars;