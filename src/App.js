import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BarraNavegacion from './components/NavBar/NavBar';


function App() {
  return (
   <div className='container'>
     <div className='row d-flex justify-content-between align-items-end'>
      <div className='col'>
      <BarraNavegacion/>
      </div>
      </div>
      <h1 className='Titulo'>Gustavo Velazco Design</h1>
      <div className='row'>
        <ItemListContainer greatings = {'Bienvenidos a mi tienda!!!'}/>
      </div>
    </div>
    
  );
}

export default App;
