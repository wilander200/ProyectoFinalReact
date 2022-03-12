import Cards from "../Cards/Cards"

const ItemListContainer = (props) => {
    return ( 
<div>
<h2 className="Titulo"> {props.greatings}</h2>
<div className="d-flex justify-content-around m-2">
<Cards/>
<Cards/>
<Cards/>
</div>
</div>
    )}

export default ItemListContainer