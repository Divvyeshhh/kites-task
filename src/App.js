import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Users from './components/Users';
import Price from './components/Price';
import Tax from './components/Tax';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> }/>
          <Route exact path='/products' element={ <Products />}/>
          <Route exact path='/users' element={ <Users />}/>
          <Route exact path='/price' element={ <Price />}/>
          <Route exact path='/tax' element={ <Tax />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
