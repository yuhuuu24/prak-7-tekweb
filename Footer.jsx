import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo dan Deskripsi */}
          <div>
            <img src="src/assets/logo bawah.png" 
            alt="RUANG EKSPRESI" className="h-10 mb-4" />
            <p className="text-sm mb-4">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
              mengembangkan potensi melalui ideation, creation,
              collaboration, dan guidance.
            </p>
            <p className="text-sm">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.75 14.25a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191
            </p>
            <p className="text-sm">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.224 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              ruang_ekspresi@webmail.uad.ac.id
            </p>
            <p className="text-sm">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              (0274) 511830
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="list-none pl-0">
              <li><a href="#" className="text-sm hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Program</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Projects</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Testimonials</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="list-none pl-0">
              <li><a href="#" className="text-sm hover:text-gray-300">Career Talks</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Extra Classes</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Project Work</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300">Mentoring</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 my-4" />
        <p className="text-center text-sm">© 2025 Ruang Ekspresi | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;