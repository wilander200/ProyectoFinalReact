import React, { createContext , useState } from 'react'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer';

export default function CartContext({children}) {
    const contextCart = createContext ([]);
    const [cartList, setcartList] = useState([])

    const addToCart = (item) => {
        setcartList([...cartList, item])
    }

  return (
    <contextCart.Provider value={ {cartList} }> 
        {children}
    </contextCart.Provider>
  )
}
