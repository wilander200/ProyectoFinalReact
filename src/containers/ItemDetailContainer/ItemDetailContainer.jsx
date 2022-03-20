import { useState , useEffect } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from "../../helpers/productos"


export default function ItemDetailContainer() {
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
          <ItemDetail product={products[4]} name="will"/>
      }
  </>
  )
}
