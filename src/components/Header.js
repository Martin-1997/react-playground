import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from './About'

const Header = (props) => {
  return (
      <nav className='navbar'>
        <h1>Sophisticated Flight Search Engine</h1>
        <div className="custom-btn-toolbar">
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/flights">
              <Button>Flights</Button>
            </Link>
            <Link to="/settings">
              <Button>Settings</Button>
            </Link>
            <Link to="/about" >
              <Button>About</Button>
            </Link>
          </div>
        {/* <h1 style={{color : 'red', backgroundColor : 'black'}}>Fancy React Playground Drölf</h1>
      <h2 style = {heading2_style} >Random string received by the calling component: {props.random_string} </h2>  */}
      </nav>
  );
}

Header.defaultProps = {
  random_string: "Default Random String",
}

Header.propTypes = {
  random_string: PropTypes.string, // Throw error when other datatype is provided -> this does not prevent the page from loading by default
  //required_prop: PropTypes.string.isRequired //Throw an error, when prop is not provided -> this does not prevent the page from loading by default
}

const heading2_style = {
  color: 'blue',
  backgroundColor: 'green',
}

export default Header;

