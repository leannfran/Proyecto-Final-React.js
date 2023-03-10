import ItemCount from "../ItemCount/ItemCount";
import {  MdOutlineShoppingCart } from "react-icons/md";
import { useCarritoContext } from "../../context/carritoContext";
import { Link } from "react-router-dom";
const Itemdetail = ({ item }) => {
  const { addItem } = useCarritoContext();
  const onAdd = (cantidad) => {
    addItem(item, cantidad);
  };
  return (
    <div className="border border-gray-300 flex-col md:flex-row w-full h-full flex  rounded-xl ">
      <div className="min-w-full md:border-r border-gray-300 md:min-w-[50%] max-w-[50%] flex flex-col items-center justify-center bg-">
        <h5 className="text-2xl  md:text-4xl font-semibold mt-10 md:mt-20 md:hidden">
          {item.nombre}
        </h5>
        <p className="text-xl font-light text-blackss md:hidden">
          {item.marca} <span className="text-gray-700">{item.cantidad}</span> 
        </p>
        <img className=" object-contain" src={item.img} alt={`imagen de ${item.nombre}`} />
      </div>



      <div className="flex flex-col justify-center items-center md:ml-10 md:items-start">
        <h5 className="text-4xl font-semibold hidden md:inline-block ">
          {item.nombre}
        </h5>
        <p className="text-xl font-light text-black my-10 hidden md:inline-block">
          {item.marca} {item.cantidad}
        </p>


        <p className="text-xl font-bold text-black ">
          ${new Intl.NumberFormat("de-DE").format(item.precio)}
        </p>
        <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
       
        <Link to={"/Carrito"}>
          <button className="flex justify-center items-center  md:w-64 font-bold  border border-gray-900 text-gray-900 py-2 px-16 md:px-4 hover:bg-black hover:text-white rounded-xl transition-colors mb-10 ">
            <MdOutlineShoppingCart className="text-xl mr-2 font-bold" />
            Finalizar Compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Itemdetail;
