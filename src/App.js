import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import BarraNavegacion from './components/NavBar/NavBar';
import './App.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
   <div className='container'>
     <div className='row d-flex justify-content-between align-items-end'>
      <div className='col'>
      <BarraNavegacion/>
      </div>
      </div>
      <h1 className='Titulo my-3'>ALL MOUNTAIN BIKE</h1>
      <div className='row'>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
