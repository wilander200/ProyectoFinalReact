import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
   <div className='container'>
     <div className='row d-flex justify-content-between align-items-end'>
      <a className='col-3' href='index.html'>
        <img className='imgLogo' src='./img/logoMarca.jpg'/>
      </a>
      <div className='col-5'>
      <NavBar/>
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
