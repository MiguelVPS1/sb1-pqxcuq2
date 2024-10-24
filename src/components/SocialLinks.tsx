import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        <a 
          href="https://www.instagram.com/pasteleriaelpaseo21/?hl=es" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-full hover:bg-white/10 transform hover:scale-110 transition-all duration-200 hover:text-yellow-300"
          aria-label="Síguenos en Instagram"
        >
          <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a 
          href="https://www.facebook.com/p/Pasteleria-El-paseo-100063818359889/?locale=es_LA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-full hover:bg-white/10 transform hover:scale-110 transition-all duration-200 hover:text-yellow-300"
          aria-label="Síguenos en Facebook"
        >
          <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
        <a 
          href="mailto:pasteleriaelpaseo21@gmail.com" 
          className="p-2 rounded-full hover:bg-white/10 transform hover:scale-110 transition-all duration-200 hover:text-yellow-300"
          aria-label="Envíanos un correo"
        >
          <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
      
      <div className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200">
        <a href="mailto:pasteleriaelpaseo21@gmail.com" className="hover:underline">
          Para consultas: pasteleriaelpaseo21@gmail.com
        </a>
      </div>
    </>
  );
};

export default SocialLinks;