import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavigationBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import SizeGuide from './components/SizeGuide/SizeGuide';
import Contact from './components/Contact/Contact';
import CartContextProvider from './context/CartContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className='container App'>
          <div className='row d-flex justify-content-between align-items-end'>
            <div className='col'>
              <NavigationBar/>
            </div>
          </div>
          <h1 className='titulo my-3'>ALL MOUNTAIN BIKE</h1>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/guiaTalla' element={<SizeGuide/>} />
              <Route path='/contacto' element={<Contact/>} />
              <Route path="/*" element={<Navigate to='/'/>}/>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
