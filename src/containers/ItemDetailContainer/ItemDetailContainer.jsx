import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from "../../helpers/productos"


export default function ItemDetailContainer() {
  const [products , setProducts] = useState ([])
  const [loading , setLoading] = useState (true)
  
  const {detailId} = useParams ()

  useEffect(() => {
      gFetch.then((data)=> setProducts(data))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))
  }, [detailId])

const id = detailId -1 

return ( 
  <>
      { loading ? <img className="w-25 mx-auto " src="./img/loading.gif" alt="loading" />
      :
          <ItemDetail product={products[id]} name="will"/>
      }
  </>
  )
}
