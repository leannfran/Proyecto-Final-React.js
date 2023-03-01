import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useCarritoContext } from "../../context/carritoContext";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import {errorApellido, errorName, errorTel,errorDirec,errorMailRepeat,} from "./validator";
import { createOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase";
const Checkout = () => {

  let navigate = useNavigate()

  const {register, formState: { errors },handleSubmit,getValues} = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset()
    const cliente = data;

    const aux = [...carrito];
    aux.forEach(prodCarrito => {
      getProducto(prodCarrito.id).then(prodBDD => {
          prodBDD.stock -= prodCarrito.cant //Descuento el stock
          updateProducto(prodCarrito.id, prodBDD)
      })
  });

    createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
        toast.success(`Su compra ya fue registrada!
         , en un plazo de 24hs recibira un link de pago a su celular`)
        emptyCart()
        navigate("/")
    })

  };

  const { carrito, emptyCart, totalPrice } = useCarritoContext();
  
  return (
    <>
      {carrito.length === 0 ? (
        <>
         <div className="flex flex-col justify-start items-center mt-10 min-h-[90vh] gap-10 ">
          <h3 className="text-3xl font-semibold"> Su carrito esta vacio</h3>
          <Link to={"/Productos"} className="flex items-center font-light border py-2 px-4 rounded-full border-primary">
            <BiArrowBack />Volver a comprar
          </Link>
        </div></>
      ) : (
        <div className="w-full  min-h-[90vh] flex items-center flex-col justify-center">
          <h4 className="text-4xl font-extralight">Rellena el formulario</h4>
          <form onSubmit={handleSubmit(onSubmit)}  className="mt-8">
            <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-white text-gray-800 group"
                placeholder="Nombre(s)"
                {...register("nombre", {
                  required: true,
                })}
              />
              {errors.nombre?.type === "required" && errorName()}
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-white text-gray-800 group"
                placeholder="Apellidos"
                {...register("apellido", {
                  required: true,
                })}
              />
              {errors.apellido?.type === "required" && errorApellido()}
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="email"
                name="email1"
                autoComplete="off"
                className="form-control w-full py-3 px-4 rounded-xl outline-none bg-white text-gray-800 group"
                placeholder="Correo electrónico"
                {...register("email1", { minLength: 3, required: true })}
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="email"
                name="email2"
                className="form-control w-full py-3 px-4 rounded-xl outline-none bg-white text-gray-800 group"
                placeholder="Repetir Correo electrónico"
                {...register("email2", {
                  minLength: 3,
                  required: true,
                  validate: {
                    equalMails: (mail2) => mail2 === getValues().email1,
                  },
                })}
              />
              {errors?.email2?.type === "equalMails" && errorMailRepeat()}
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="tel"
                autoComplete="off"
                className="w-full  py-3 px-4 rounded-xl outline-none bg-white text-gray-800 group"
                placeholder="Celular"
                {...register("celular", {
                  required: true,
                  minLength: 10,
                })}
              />
              {errors.celular?.type === "required" && errorTel()}
              {errors.celular?.type === "minLenght" && errorTel()}

            </div>
            <div className="max-w-lg mb-4">
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-white text-gray-800 group"
                placeholder="Direccion"
                {...register("direccion", {
                  required: true,
                })}
              />
              {errors.direccion?.type === "required" && errorDirec()}
            </div>

            <div className="  max-w-lg">
              <input
                className="lex items-center justify-center bg-none border-2 font-semibold border-primary text-primary w-full py-3 px-4 rounded-full hover:bg-primary hover:text-white transition-colors"
                type="submit"
                value="Finalizar Pago"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
