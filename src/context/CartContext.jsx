import React, { createContext , useState } from 'react'


export const CartContext = createContext([]) 


 function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
      const repeatProduct = cartList.find(List => List.id === product.id)  
      if (repeatProduct) {
        repeatProduct.cantidad = repeatProduct.cantidad + product.cantidad
        setCartList([...cartList])
      }else {
        
        setCartList([...cartList, product])
        };
      }

    const erraseCart = () => {
        setCartList([])
    }

    const erraseItem = (productId) => {
      setCartList(cartList.filter(errase => errase.id !== productId))
    }

    const totalPrice = () => {
      return cartList.reduce((acumulado, prods) => acumulado = acumulado + (prods.price*prods.cantidad) , 0)
    }

    const totalCant = () => {
      return cartList.reduce((guardado, prod) => guardado += prod.cantidad, 0)
    }


  return (
    <CartContext.Provider value={ {
        cartList,
        addToCart,
        erraseCart,
        erraseItem,
        totalPrice,
        totalCant
      } }> 
        {children}
    </CartContext.Provider>
  )
    }

export default CartContextProvider