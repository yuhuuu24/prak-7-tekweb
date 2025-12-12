import React from 'react';

function Testimonials() {
  const testimonial = { // Hanya satu testimonial
    name: 'Budi Santoso',
    major: 'Mahasiswa Sistem Informasi',
    comment:
      'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.',
    image: 'src/assets/budi2.png', // Ganti dengan path foto profil Anda
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center flex-wrap"> {/* flex-wrap untuk membuat baris baru */}
          {Array(6).fill(null).map((_, index) => ( // Membuat 6 card
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6 w-1/2 md:w-1/3 lg:w-1/4 mx-4 mb-8" // w-1/2 di layar kecil, w-1/3 di layar medium, w-1/4 di layar besar
            >
              <div className="flex items-start"> {/* items-start untuk tata letak yang benar */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4" // Foto profil
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.major}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-2">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;