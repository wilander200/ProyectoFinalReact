import React , { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { gFetch } from "../../helpers/productos";

function ItemListContainer () {
    const [products , setProducts] = useState ([])
    const [loading , setLoading] = useState (true)
    

    useEffect(() => {
        gFetch.then((data)=> setProducts(data))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    })



return ( 
    <>
        { loading ? <img className="w-25 mx-auto " src="./img/loading.gif" alt="loading" />
        :
            <ItemList products={products}/>
        }
    </>
    )}

export default ItemListContainer