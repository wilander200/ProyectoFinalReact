import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Button } from "react-bootstrap"


function Item({product}) {
    return (
      <Card className='m-2' style={{ width: '18rem' }}>
      <Card.Img className='h-75 w-75 mx-auto my-1' variant="top" src={`${product.image}`} />
      <Card.Body>
        <Card.Title className='mx-auto d-flex justify-content-center fs-3'>
            {`${product.name}`}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className='d-flex justify-content-center fs-5'>{`Precio: ${product.price}`}</ListGroupItem>
        <Button className="d-flex justify-content-center" variant="outline-dark">DETALLE</Button>
      </ListGroup>
    </Card>
    
        )}

export default Item