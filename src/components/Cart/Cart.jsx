import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { Button } from "react-bootstrap"

export default function Cart() {

  const {cartList, erraseCart, erraseItem, totalPrice} = useContext(CartContext)
  const [id, setId] = useState(null)
  const [pay , setPay] = useState (true)
  const [dataForm, setDataForm] = useState({name:'', email:'', phone:'', address:'', rEmail: ' '})

  function newOrder (e) {
    e.preventDefault()
    let order = {}
    order.buyer = {name: dataForm.name, email: dataForm.email, phone: dataForm.phone, address: dataForm.address}

    order.items = cartList.map(cartItem => {
      const id = cartItem.id 
      const name = cartItem.name
      const price = cartItem.price
      const cantidad = cartItem.cantidad

      return {id, name, price, cantidad}
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
              <div >
                {cartList.map((prods) => 
                  <div className="row d-flex justify-content-around my-2" key={prods.id}>
                    <p className="col-2 ">{prods.name}</p>
                    <p className="col-2 ">{prods.price.toLocaleString("es-CL")} CLP</p>
                    <p className="col-2 ">{prods.cantidad}</p>
                    <p className="col-2 ">{(prods.cantidad*prods.price).toLocaleString("es-CL")} CLP</p>
                    { id === null &&
                      <Button className="col-2 h-75" variant="outline-danger" onClick={() => erraseItem(prods.id)} >Eliminar Item</Button>
                    }
                  </div>
                ) }
              </div>
            </div>

            { pay &&
            <div className="col-3 border border-secondary rounded">
              <form className="m-2" onSubmit={newOrder}>
                <label for="name" class="form-label m-1 fw-bold">Ingrese nombre y apellido:</label>
                <input className="m-1" type='text' name="name" placeholder="Nombre" value={dataForm.name} onChange={handleChange}/>
                <label for="phone" class="form-label m-1 fw-bold">Ingrese número de teléfono:</label>
                <input className="m-1" type='text' name="phone" placeholder="Telefono" value={dataForm.phone} onChange={handleChange}/>
                <label for="address" class="form-label m-1 fw-bold">Ingrese su direccion:</label>
                <input className="m-1" type='text' name="address" placeholder="Direccion" value={dataForm.address} onChange={handleChange}/>
                <label for="email" class="form-label m-1 fw-bold">Ingrese su correo electronico:</label>
                <input className="m-1" type='email' name="email" placeholder="e-mail" value={dataForm.email} onChange={handleChange}/>
                <label for="rEmail" class="form-label m-1 fw-bold">Repita su correo electronico:</label>
                <input className="m-1" type='email' name="rEmail" placeholder="repita e-mail" value={dataForm.rEmail} onChange={handleChange}/>
                <Button disabled= {dataForm.email!=dataForm.rEmail} className="m-2" variant="outline-success" onClick={newOrder}>Generar Orden</Button>
              </form>
            </div>
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
