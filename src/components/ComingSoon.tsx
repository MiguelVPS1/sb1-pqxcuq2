import React from 'react';
import { Clock } from 'lucide-react';

const ComingSoon = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
        <p className="text-xl sm:text-2xl md:text-3xl text-yellow-300 font-semibold">
          Próximamente
        </p>
      </div>
      
      <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto px-4">
        Estamos preparando algo delicioso para ti.
        <br className="hidden sm:block" />
        Muy pronto te traeremos los pasteles más exquisitos de la ciudad.
      </p>
    </>
  );
};

export default ComingSoon;