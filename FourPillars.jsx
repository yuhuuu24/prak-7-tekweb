import React from 'react';

function FourPillars() {
  const pillars = [
    {
      title: 'Ideation',
      description:
        'Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.',
      icon: '/assets/ideation-icon.svg', // Ganti dengan path icon Anda
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700',
    },
    {
      title: 'Creation',
      description:
        'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.',
      icon: '/assets/creation-icon.svg', // Ganti dengan path icon Anda
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
    },
    {
      title: 'Collaboration',
      description:
        'Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.',
      icon: '/assets/collaboration-icon.svg', // Ganti dengan path icon Anda
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
    },
    {
      title: 'Guidance & Support',
      description:
        'Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.',
      icon: '/assets/guidance-icon.svg', // Ganti dengan path icon Anda
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Komprehensif yang dirancang untuk mengembangkan potensi kreatif
          mahasiswa melalui pendekatan holistik.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col items-center ${pillar.bgColor}`}
            >
              <img src={pillar.icon} alt={pillar.title} className="h-12 mb-2" />
              <h3 className={`text-xl font-semibold text-center mb-2 ${pillar.textColor}`}>{pillar.title}</h3>
              <p className="text-gray-700 text-center">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FourPillars;