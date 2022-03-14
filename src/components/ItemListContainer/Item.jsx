import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ItemCount from '../ItemCount/ItemCount'


function Item({product}) {
    return (
      <Card className='m-2' style={{ width: '18rem' }}>
      <Card.Img className='w-75 mx-auto my-1' variant="top" src={`${product.image}`} />
      <Card.Body>
        <Card.Title className='mx-auto d-flex justify-content-center'>
            {`${product.name}`}
        </Card.Title>
        <Card.Text>
          {`${product.description}`}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className='d-flex justify-content-center'>{`Stock ${product.stock}`}</ListGroupItem>
        <ListGroupItem className='d-flex justify-content-center'>{`Precio ${product.price}`}</ListGroupItem>
      </ListGroup>
      <ItemCount initial = {1} stock = {`${product.stock}`} onAdd={" "}/>
    </Card>
    
        )}

export default Item