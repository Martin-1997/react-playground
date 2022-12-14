import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { React } from "react"
/*
The header contains the title of the web page as well as serveral buttons which are used as a menu. The user can click on the buttons to get to the different subpages which are dsiplayed in the Main container in the App.js component.
*/

const Header = () => {
  return (
      <nav className='navbar'>
        <h1> Sophisticated Flight Search Engine</h1>
        <div className="custom-btn-toolbar">
          {/* If we would use "a" instead of "Link", a new request would be sent to the server. With, "Link", React intercepts the request and handles everything locally */}
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
            <Link to="/admin" >
              <Button>Admin</Button>
            </Link>
          </div>
      </nav>
  )
}
export default Header
