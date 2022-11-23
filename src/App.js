import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContextProvider} from './Storage/CartContext';
import CartView from './components/CartView/CartView';
import OrderId from './components/CartView/OrderId';
import IdError from './components/IdError/IdError';
// import { exportItemsToFirestore } from './services/firebase';


function App() {
   
  return (   
    <div className="App">     
       <CartContextProvider>
         <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path="/category/:categoryid" element= {<ItemListContainer/>}/>
        <Route path="/detalle/:id" element= {<ItemDetailContainer />}/>
        <Route path="/cart" element= {<CartView />}/>
        <Route path="/checkout/:orderId" element= {<OrderId/>}/>
        <Route path="*" element={<h1>Error</h1>}/>
        <Route path="/notfound" element={<IdError/>} />
      </Routes>     
      </BrowserRouter>
        </CartContextProvider>    
        {/* <button onClick={exportItemsToFirestore}>Exportar items</button>   */}
    </div>
  );
}

export default App;