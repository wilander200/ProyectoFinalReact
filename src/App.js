import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import BarraNavegacion from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import GuiaTalla from './components/GuiaTalla/GuiaTalla';
import Contacto from './components/Contacto/Contacto';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className='container App'>
        <div className='row d-flex justify-content-between align-items-end'>
          <div className='col'>
            <BarraNavegacion/>
          </div>
        </div>
        <h1 className='Titulo my-3'>ALL MOUNTAIN BIKE</h1>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/guiaTalla' element={<GuiaTalla/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path="/*" element={<Navigate to='/'/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
