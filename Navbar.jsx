import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white py-2">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="src/assets/logoo.png" alt="Ruang Ekspresi" className="h-10 mr-2" />
          <div className="flex flex-col">
  <span className="text-xl font-semibold text-blue-700 leading-tight">ruang</span>
  <span className="text-xl font-semibold text-blue-700 leading-tight">ekspresi</span>
</div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Program</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Project</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Testimonials</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;