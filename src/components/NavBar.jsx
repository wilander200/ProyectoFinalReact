import WidgetCar from './WidgetCar'

const NavBar = () => {
    return ( 
<ul>
    <li>
       <a className="linkNavBar" href="inicio">Inicio</a> 
    </li>
    <li>
        <a className="linkNavBar" href="quienesSomos">Quienes somos </a> 
    </li>
    <li>
        <a className="linkNavBar" href="productos">Productos</a> 
    </li>
    <li>
    <WidgetCar/>    
    </li>
</ul>
    )}

export default NavBar