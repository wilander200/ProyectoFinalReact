import Item from '../Item/Item'

export default function ItemList({products}) {
  return (
    <div className="d-flex flex-wrap justify-content-around m-2">
        {products.map((product) =>
            <Item key={product.id} product={product}/>)
        }
    </div>
  )
}
