import {useContext, createContext, useState} from 'react';

const CarritoContext = createContext();

export const useCarritoContext = ()=> useContext(CarritoContext);

export const CarritoProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

//agregar producto
const addItem = (producto,cantidad) => {
    if(isInCart(producto.id)) {//remplazo la cantidad de productos
        const indice = carrito.findIndex(prod => prod.id === producto.id)
        const aux = [...carrito]
        aux [indice].cant = cantidad
        setCarrito(aux)
    }else {
        const prodCart ={ //creo el objeto producto en carrito con los datos ingresados
        ...producto,
        cant: cantidad
    }
    setCarrito([...carrito, prodCart])
    }
}
//eliminar producto
const removeItem = (id) => {
    setCarrito(carrito.filter(prod => prod.id !== id))
}
//precio total de la compra
const totalPrice = () => {
    return carrito.reduce((acum,prod) => acum += (prod.cant * prod.precio),0)
}

//cantidad total 
const getItemQuantity = () => {
    return carrito.reduce((acum, prod) => acum += prod.cant, 0)
}
//si existe en el carrito
const isInCart = (id) => {
    return carrito.find(prod => prod.id === id)
}
//vaciar carrito
const emptyCart = () => {
    setCarrito([])
}

console.log(carrito);

return (
    <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }}>
        {props.children}
    </CarritoContext.Provider>
)

}