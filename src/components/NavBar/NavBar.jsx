import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import WidgetCar from '../Widget/WidgetCar'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
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
          <NavLink className="dropdown-item"  to='/category/bikes'>
            BICICLETAS MTB
          </NavLink>
          <NavLink className="dropdown-item"  to='/category/ebikes' >
            BICICLETAS ELECTRICAS
          </NavLink>
          <NavDropdown.Divider />
          <NavLink className="dropdown-item" to='/guiaTalla'>
            GUIA DE TALLAS
          </NavLink>
        </NavDropdown>
        <NavLink className='nav-link active' to='/contacto'>CONTACTO</NavLink>       
      </Nav>
      <NavLink to='cart'>
        <WidgetCar/>
      </NavLink>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )}

export default NavigationBar