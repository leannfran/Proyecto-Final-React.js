import { toast } from "react-toastify";

 export const errorName = () => {
    toast.error("el campo nombre es requerido!", {
      position: "top-center",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  export const errorApellido = () => {
    toast.error("el campo apellido es requerido!", {
      position: "top-center",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  export const errorMail = () => {
    toast.error("el campo email es requerido!", {
      position: "top-center",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  export const errorMailRepeat = () => {
    toast.error("los emails deben ser iguales!", {
      position: "top-center",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  export const errorTel= () => {
    toast.error("el campo telefono es requerido!", {
      position: "top-center",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
 export  const errorDirec = () => {
    toast.error("el campo direccion es requerido!", {
      position: "top-center",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
 
