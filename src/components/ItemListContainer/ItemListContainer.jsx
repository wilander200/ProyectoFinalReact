import React , { useEffect, useState } from "react";
import Productos from "../Productos/Productos"
import ItemList from "./ItemList";

const gFetch = new Promise ((resolve , reject)=>{
   let condition = true
    if (condition) {
        setTimeout (() => {
        resolve(Productos())
        }, 2000);
   } 
    else {
        reject('Error 404')   
   }
})
const ItemListContainer = () => {

    const [loading , setLoading] = useState (true)
    const [products , setProducts] = useState ([])

    useEffect(() => {
        gFetch.then((data)=> setProducts(data))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    })



return ( 
    <>
        { loading ? <img className="w-50 mx-auto " src="./img/loading.gif" alt="loading" />
        :
            <ItemList/>
        }
    </>
    )}

export default ItemListContainer