import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { Button } from "react-bootstrap"
import CartForm from "./CartForm"
import CartList from "./CartList"

export default function Cart() {
  const [dataForm, setDataForm] = useState({name:'', email:'', phone:'', address:'', rEmail: ' '})
  const {cartList, erraseCart, erraseItem, totalPrice} = useContext(CartContext)
  const [id, setId] = useState(null)
  const [pay , setPay] = useState (true)

  function newOrder (e) {
    e.preventDefault()
    let order = {}
    order.buyer = {name: dataForm.name, email: dataForm.email, phone: dataForm.phone, address: dataForm.address}

    order.items = cartList.map(cartItem => {
      const id = cartItem.id 
      const name = cartItem.name
      const price = cartItem.price
      const quantity = cartItem.quantity

      return {id, name, price, quantity}
    })

    order.total = totalPrice()

    const dataBase = getFirestore()
    const queryCollection = collection(dataBase, "orders")
    addDoc(queryCollection, order)
    .then(({id}) => setId(id))
    .catch(error => console.log(error))
    .finally(() => setPay(false))

    return order
  }

  const handleChange = (e) => {
    setDataForm({...dataForm , [e.target.name]: e.target.value})
  }


  return (
    <div className="container">
      { (cartList.length === 0) ?
        <div>
          <h4 className="h4 m-5">Aun no tiene productos seleccionados...</h4>
          <Link to = '/'>
            <Button variant="outline-dark">Seleccione algún producto aquí</Button>
          </Link>
        </div>
        :        
        <div>
          { id &&
            <div className="row d-flex justify-content-center m-3">
              <h2 className="col-12 text-danger h5 m-1 d-flex justify-content-end align-items-center">EL ID DE SU ORDEN ES: <label className="border border-secondary border-1 rounded-pill p-1">{id}</label></h2>
              <h3 className="col-12 h6 m-1 d-flex">Muchas gracias por su compra, recuerde verificar el detalle de la orden de compra y sus datos antes de pagar.</h3>
              <div className="col-12 mt-4 d-flex justify-content-around"><p>{`Comprador: ${dataForm.name}`}</p> <p>{`Teléfono: ${dataForm.phone}`}</p> <p>{`Correo eléctronico: ${dataForm.email}`}</p> <p>{`Direccion: ${dataForm.address}`}</p>
              </div>              
          </div >  
          }
          <div className="d-flex justify-content-center">
            <div className="col-9">
              <div className="row d-flex justify-content-around">
                <h2 className="col-2 h6">PRODUCTO</h2>
                <h2 className="col-2 h6">PRECIO UNITARIO</h2>
                <h2 className="col-2 h6">CANTIDAD</h2>
                <h2 className="col-2 h6">PRECIO TOTAL</h2>
                { id === null &&
                  <h2 className="col-2 h6"></h2>
                }
              </div >
                <CartList cartList={cartList} erraseItem={erraseItem} id={id} />
            </div>

            { pay &&
              <CartForm dataForm={dataForm} newOrder={newOrder} handleChange = {handleChange}/>
            }
          </div>
          
          { id ? 
            <div>
            <h3 className="d-flex justify-content-end"> {`Monto total de la compra : ${totalPrice().toLocaleString("es-CL")} CLP`}</h3>
            <Link to = '/'>
            <Button className="m-3" variant="outline-success" onClick={erraseCart}>Confirmar Pedido</Button>
            </Link>
            </div>
            :
            <div>
              <h3 className="d-flex justify-content-center"> {`Monto total de la compra : ${totalPrice().toLocaleString("es-CL")} CLP`}</h3>
              <Button className="m-3" onClick={erraseCart} variant="outline-danger">Vaciar carrito</Button>
            </div>
          }
        </div>
      }
    </div>
  )
}
