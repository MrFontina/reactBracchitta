import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">     
       <NavBar />       
       <ItemCount stock={6} />
       <ItemListContainer/>
       
    </div>
  );
}

export default App;