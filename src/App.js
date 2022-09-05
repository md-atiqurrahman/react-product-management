import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProducts from './components/ManageProducts/ManageProducts';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/addproducts' element={<AddProducts></AddProducts>}></Route>
        <Route path='/manage' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='/update/:productId' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
