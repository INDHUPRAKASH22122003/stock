import './App.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Product from './Product';
import Register from './Register';
function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <Register/> */}
      <Product/>
    </div>
    // <Router>
    //   <Routes>
    //     <Route exact path="/login" element={ <Login/> } />
    //     <Route path="/register" element={ <Register/> } />
    //     {/* <Route exact path="/" element={ <LandingPage/> } /> */}
    //     {/* <Route path="/home" element={ <HomePage/> } /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;


