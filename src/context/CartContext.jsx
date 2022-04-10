import React, { createContext , useState } from 'react'


export const CartContext = createContext([]) 


 function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
      const repeatProduct = cartList.find(list => list.id === product.id)  
      if (repeatProduct) {
        repeatProduct.quantity = repeatProduct.quantity + product.quantity
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
      return cartList.reduce((accumulated, prods) => accumulated = accumulated + (prods.price*prods.quantity) , 0)
    }

    const totalQuantity = () => {
      return cartList.reduce((accumulated, prod) => accumulated += prod.quantity, 0)
    }


  return (
    <CartContext.Provider value={ {
        cartList,
        addToCart,
        erraseCart,
        erraseItem,
        totalPrice,
        totalQuantity
      } }> 
        {children}
    </CartContext.Provider>
  )
    }

export default CartContextProvider