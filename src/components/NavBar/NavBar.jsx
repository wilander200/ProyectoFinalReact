import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import WidgetCar from '../Widget/WidgetCar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const BarraNavegacion = () => {
    return ( 

<Navbar bg="white" expand="md">
  <Container fluid>
  <Navbar.Brand href="index.html"><img className='imgLogo' src='./img/logoMarca.jpg'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 d-flex align-items-end"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="index.html">INICIO</Nav.Link>
        <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown">
          <NavDropdown.Item href="biciMTE.html">BICICLETAS MTB</NavDropdown.Item>
          <NavDropdown.Item href="eBikes.html">BICICLETAS ELECTRICAS</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="ofertas.html">
            OFERTAS
          </NavDropdown.Item>
          <NavDropdown.Item href="guias.html">
            GUIA DE TALLAS
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="contacto.html">CONTACTO</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
      <Nav.Link href="carrito.html"><WidgetCar></WidgetCar></Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )}

export default BarraNavegacion