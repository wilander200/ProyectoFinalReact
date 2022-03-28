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
      console.log(cartList)

    const erraseCart = () => {
        setCartList([])
    }

    const erraseItem = (product) => {
      const erraseProduct = cartList.find(item => item.id === product)
      if (erraseProduct) {
        const idx = cartList.indexOf(erraseProduct)
        cartList.splice(idx,1)
        setCartList([...cartList])
      }
    }

  return (
    <CartContext.Provider value={ {
        cartList,
        addToCart,
        erraseCart,
        erraseItem
      } }> 
        {children}
    </CartContext.Provider>
  )
    }

export default CartContextProvider