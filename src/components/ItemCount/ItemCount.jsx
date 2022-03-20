import { Button } from "react-bootstrap"
import { useState } from "react"
import Card from 'react-bootstrap/Card'

export default function ItemCount(props) {
    const [count, setCount] = useState(props.initial)
        const addItem = () => {
            if (count<props.stock) {
                setCount(count + 1)
            }
        }
        const subtracktItem = () => {
            if (count > props.initial) {
                setCount(count - 1)
            }
        }
    
    const onAdd = () => {
        if (props.stock > 0) {
            alert(count)
        }
    }
return (
        <div className="d-flex justify-content-evenly align-items-center m-1 p-1">
            <div className="w-50 d-flex justify-content-center align-content-center">
                <Button className="w-25 h-25 mx-1" variant="outline-dark" onClick = { subtracktItem }>-</Button>
                <p className="mx-2">{count}</p>
                <Button className="w-25 h-25 mx-1" variant="outline-dark" onClick = {addItem} >+</Button>
            </div>
            <div className="w-50">
                <Card.Body>
                    {props.stock < 1 ? <p className="fw-bolder text-danger">AGOTADO</p> : <Button variant="outline-dark" onClick = {onAdd} >Agregar al Carrito</Button> }
                </Card.Body>
            </div>
        </div>
  )
}
