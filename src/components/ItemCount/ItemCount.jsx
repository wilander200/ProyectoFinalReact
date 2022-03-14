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
    <div > 
        <div className="d-flex justify-content-around align-items-center m-1 p-1">
            <Button className="w-25 h-25" variant="outline-dark" onClick = { subtracktItem }>-</Button>
            <p>{count}</p>
            <Button className="w-25 h-25" variant="outline-dark" onClick = {addItem} >+</Button>
        </div>
        <div>
            <Card.Body className='d-flex justify-content-around'>
                {props.stock < 1 ? <p className="fw-bolder text-danger">AGOTADO</p> : <Button variant="outline-dark" onClick = {onAdd} >agregar</Button> }
                <Button variant="outline-dark" >detalle</Button>
            </Card.Body>
        </div>
    </div>
  )
}
