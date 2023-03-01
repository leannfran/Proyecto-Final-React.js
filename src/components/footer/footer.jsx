import React from 'react';

const Footer = React.memo(() => {
    return (
      <div className="bg-black flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-4">
      <div>
        <p className="text-gray-200 text-center md:text-left">
          &copy; 2022
          <span className="text-gray-100 font-bold"> FronFitnes.</span> Todos
          los derechos reservados.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-2">
        <a
          href="#"
          className="text-gray-300 hover:text-gray-100 transition-colors"
        >
          Terminos y condiciones
        </a>
        <span className="hidden xl:flex">|</span>
        <a
          href="#"
          className="text-gray-300 hover:text-gray-100 transition-colors"
        >
          Política de privacidad
        </a>
      </div>
    </div>
    );
})

export default Footer;
