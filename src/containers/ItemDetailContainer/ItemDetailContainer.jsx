import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"


export default function ItemDetailContainer() {
  const [products , setProducts] = useState ([])
  const [loading , setLoading] = useState (true)
  
  const {detailId} = useParams ()

  // para usar cuando se acabe la base de datos de firestore

  /* 
  useEffect(() => {
    if (detailId) {
      setTimeout (() => {
        gFetch
        .then((data)=> setProducts(data.find((d)=>d.id===detailId)))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
      }, 2000);
    } 
  }, [detailId])
  */

  // para usar con la base de datos de firestore

  useEffect(() => {
    setTimeout(() => {
      const dataBase = getFirestore()
      const queryDoc = doc(dataBase , 'productos' , detailId)
      getDoc(queryDoc)
      .then(resp => setProducts({id: resp.id, ...resp.data()}))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))
    }, 2000)
  }, [detailId])


return ( 
  <>
      { loading ? <img className="w-25 mx-auto " src="/img/loading.gif" alt="loading" />
      :
          <ItemDetail product={products}/>
      }
  </>
  )
}
