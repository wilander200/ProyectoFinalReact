import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const NavBar = () => {
    const {totalCant} = useContext(CartContext)

    return ( 
    <button className='btn btnCarrito position-relative' type="button"> 
        <img className='imgCarrito' src='/img/car.png' alt="carritoCompra"/>   
        { (totalCant()!==0) &&
            <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {`${totalCant()}`}
            </div>
        }
    </button>
    )}

export default NavBar