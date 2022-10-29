import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">     
       <NavBar />       
       <ItemCount stock={6} />
       {/* <ItemListContainer/> */}
       <ItemDetailContainer />
       
    </div>
  );
}

export default App;