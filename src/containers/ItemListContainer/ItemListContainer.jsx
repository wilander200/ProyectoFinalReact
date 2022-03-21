import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { gFetch } from "../../helpers/productos";

function ItemListContainer () {
    const [products , setProducts] = useState ([])
    const [loading , setLoading] = useState (true)
    

    const {categoryId} = useParams ()

    useEffect(() => {
        if (categoryId) {
            gFetch
            .then((data)=> setProducts(data.filter(product => product.category === categoryId)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))
        } else {
            gFetch
            .then((data)=> setProducts(data))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))
        }
    }, [categoryId])
    

return ( 
    <>
        { loading ? <img className="w-25 mx-auto " src="/img/loading.gif" alt="loading" />
        :
            <ItemList products={products}/>
        }
    </>
    )}

export default ItemListContainer