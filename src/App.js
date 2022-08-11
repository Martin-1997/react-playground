import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Main from './components/Main';

function App() {
  return (
    <Router>
      {/* Java Script Syntax Extension Language */}
      <div className='app'>
        <Header ></Header>


        {/* <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div> */}

        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Main />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
