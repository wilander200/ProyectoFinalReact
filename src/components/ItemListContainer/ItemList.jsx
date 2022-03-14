import Productos from '../Productos/Productos'

import Item from './Item'

export default function ItemList() {
const products = Productos()
  return (
    <div className="d-flex flex-wrap justify-content-around m-2">
        {products.map((product) =>
            <Item key={product.id} product={product}/>)
        }
    </div>
  )
}
