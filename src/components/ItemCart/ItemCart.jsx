import { useCarritoContext } from "../../context/carritoContext";
import { toast } from "react-toastify";

const ItemCart = ({ item }) => {
  const { removeItem } = useCarritoContext();
  const deleteItem = () => {
    removeItem(item.id);
    toast("Producto eliminado !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className=" flex flex-col  items-center w-full ">
      <div className="mt-10 border-t border-primary bg-white p-4 flex flex-col md:flex-row shadow-2xl min-w-[80%] md:max-h-[15rem] mx-auto rounded-lg ">
        <img
          className="md:max-w-[50%] object-contain"
          src={item.img}
          alt={`imagen de ${item.nombre}`}
        />
        <div className=" md:w-[50%] flex flex-col items-center md:items-start gap-2">
          <h5 className="text-xl font-semibold">{item.nombre}</h5>
          <p className=" font-light text-gray-700">serv: {item.cantidad}</p>
          <p className=" font-light text-gray-700">cantidad: {item.cant}</p>
          <p className="font-semibold text-gray-900">
            Precio unitario: $
            {new Intl.NumberFormat("de-DE").format(item.precio)}
          </p>
          
          <p className="font-semibold text-gray-900">
            Sub total: $
            {new Intl.NumberFormat("de-DE").format(item.precio * item.cant)}
          </p>
          <div className="mb-10">
            <button
              onClick={() => deleteItem()}
              className="border text-sm font-light border-black text-black py-2 px-6 hover:bg-black hover:text-white rounded transition-colors"
            >
              {" "}
              eliminar producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
