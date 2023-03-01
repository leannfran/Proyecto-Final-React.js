import { BsInstagram, BsWhatsapp, BsTwitch } from "react-icons/bs";
const Contacto = () => {
  return (
    <div className=" hero2 bg-cover min-h-[90vh] bg-no-repeat flex flex-col justify-center items-center">
      <div className="  gap-4 flex flex-col justify-start items-center bg-gradient-to-br from-black w-full min-h-[90vh]">
        <h4 className="text-6xl mt-10 text-white font-extralight  ">
          Encontrame en{" "}
        </h4>
        <div className="flex flex-col gap-3">
          <a href="https://www.instagram.com/julifrontino/?hl=es">
            {" "}
            <div className="flex items-center ">
              {" "}
              <BsInstagram className="text-white text-4xl mr-2 hover:text-gray-200" />
              <p className="text-white text-xl font-extralight hover:text-gray-200">
                {" "}
                @julifrontino
              </p>
            </div>
          </a>
          <a href="https://api.whatsapp.com/message/ISA5KHCQWPUXJ1?autoload=1&app_absent=0">
            {" "}
            <div className="flex items-center ">
              {" "}
              <BsWhatsapp className=" hover:text-gray-200 text-white text-4xl mr-2" />
              <p className="text-white text-xl font-extralight hover:text-gray-200">
                {" "}
                +54 9 11 2470-6144
              </p>
            </div>
          </a>

          <div className="flex items-center ">
            {" "}
            <BsTwitch className=" hover:text-gray-200 text-white text-4xl mr-2" />
            <p className="text-white text-xl font-extralight hover:text-gray-200">
              {" "}
              Juli Frontino
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
