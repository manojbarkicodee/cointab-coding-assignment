import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Page1/>}></Route>
      <Route path="/userdetails" element={<Page2/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
