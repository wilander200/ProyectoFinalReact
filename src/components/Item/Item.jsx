import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'


function Item({product}) {
    return (
      
        <Card className='m-2 w-25 border my-5'>
        <Card.Img className='h-75 w-75 mx-auto my-1 ' variant="top" src={`${product.image}`} />
        <Card.Body>
          <Card.Title className='mx-auto d-flex justify-content-center fs-3'>
            {`${product.name}`}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <ListGroupItem className='d-flex justify-content-center fs-5 border-white'>{`Precio: ${product.price.toLocaleString("es-CL")}`}</ListGroupItem>
          <Link to={`/detail/${product.id}`}>
            <Button className="w-50 mx-auto my-2" variant="outline-dark">DETALLE</Button>
          </Link>
        </ListGroup>
        </Card> 
        )}

export default Item