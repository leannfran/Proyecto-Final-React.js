import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ItemList from "../ItemList/ItemList";
import { useCarritoContext } from "../../context/carritoContext";
const Cart = () => {
  const {carrito, totalPrice, emptyCart } = useCarritoContext()
  return (
    <>
      {carrito.length === 0 ? <>
        <div className="flex flex-col justify-start items-center mt-10 min-h-[90vh] gap-10 ">
          <h3 className="text-3xl font-semibold"> Su carrito esta vacio</h3>
          <Link to={"/Productos"} className="flex items-center font-light border py-2 px-4 rounded-full border-primary">
            <BiArrowBack />Volver a comprar
          </Link>
        </div>
      </> : <>
        <div className="flex flex-col items-center justify-center min-h-[95vh]">
          {<ItemList products={carrito} plantilla={'itemCart'}/>}
          <div className="px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
          <p className="text-2xl font-semibold">Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
            <button className="border border-black text-black py-2 px-4 hover:bg-black hover:text-white rounded-full transition-colors w-full md:w-auto" onClick={()=> emptyCart()}>Vaciar Carrito</button>
            <Link to={"/Productos"}>
              <button className="border border-black text-black w-full md:w-auto py-2 px-4 hover:bg-black hover:text-white rounded-full transition-colors">continuar Comprando</button>
            </Link>
            <Link to={"/Checkout"}>
            <button className="border border-black text-black w-full md:w-auto py-2 px-4 hover:bg-black hover:text-white rounded-full transition-colors" >Finalizar Compra</button>
            </Link>
          </div>
        </div>
      </>}
    </>
  );
};

export default Cart;
