import React from 'react';
import { Cake } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8">
      <Cake className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Pastelería El Paseo
      </h1>
    </div>
  );
};

export default Header;