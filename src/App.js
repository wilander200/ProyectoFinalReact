import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BarraNavegacion from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
   <div className='container'>
     <div className='row d-flex justify-content-between align-items-end'>
      <div className='col'>
      <BarraNavegacion/>
      </div>
      </div>
      <h1 className='Titulo'>Gustavo Velazco Design</h1>
      <div className='row'>
        <ItemListContainer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
