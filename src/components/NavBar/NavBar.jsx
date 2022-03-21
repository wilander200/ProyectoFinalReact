import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import WidgetCar from '../Widget/WidgetCar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink, Link } from 'react-router-dom'

const BarraNavegacion = () => {
    return ( 

<Navbar bg="white" expand="md">
  <Container fluid>
    
      <Navbar.Brand>
        <NavLink to= '/'>
          <img className='imgLogo' src='/img/logoMarca.jpg'/>
        </NavLink>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 d-flex align-items-end"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <NavLink className="nav-link active" to='/'>INICIO</NavLink>
        <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown">
          <NavLink className="dropdown-item"  to='category/bikes'>
            BICICLETAS MTB
          </NavLink>
          <NavLink className="dropdown-item"  to='category/ebikes' >
            BICICLETAS ELECTRICAS
          </NavLink>
          <NavDropdown.Divider />
          {/*  hay que hacer un componente que trabaje estas cosas aparte */}
          <NavDropdown.Item href="ofertas.html">
            OFERTAS
          </NavDropdown.Item>
          <NavDropdown.Item href="guias.html">
            GUIA DE TALLAS
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="contacto.html">CONTACTO</Nav.Link>
        
      </Nav>
      <Form className="d-flex mx-2">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
      <NavLink to='cart'>
        <WidgetCar/>
      </NavLink>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )}

export default BarraNavegacion