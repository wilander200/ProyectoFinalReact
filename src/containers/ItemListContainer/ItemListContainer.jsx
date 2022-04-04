import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function ItemListContainer () {
    const [products , setProducts] = useState ([])
    const [loading , setLoading] = useState (true)
    

    const {categoryId} = useParams ()
    
    // Lo usaré despues cuando se acabe la prueba de la base de datos del firestore

    /*  useEffect(() => {
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
    }, [categoryId])*/
    

    //usando la base de datos del firestore


    useEffect(() => {
        const dataBase = getFirestore()
        const queryCollection = collection(dataBase, 'productos' )
        const queryFilter = categoryId ? query(queryCollection, where('category', '==' , categoryId )) : queryCollection
        getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

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