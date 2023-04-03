import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDelete from './EmpDelete';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React Js CRUP Operations</h1>
      <BrowserRouter>
    <Routes>
        <Route path='/' element={<EmpListing/>}></Route>
        <Route path='/employee/create' element={<EmpCreate/>}></Route>
        <Route path='/employee/delete/:empid' element={<EmpDelete/>}></Route>
        <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>
        <Route path='/employee/details/:empid' element={<EmpDetails/>}></Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
