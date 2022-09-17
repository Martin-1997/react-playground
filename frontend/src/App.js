import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Settings from './components/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import FlightPage from './components/FlightPage';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import FlightDetails from './components/FlightDetails';
import Admin from './components/Admin';
import NotFound from './components/NotFound';

function App() {
  /*
  All the data required is fetched and managed in the top level container (App). From there, the data is passed to the subcomponents.
  I am not sure if this is the best approach or if it is better to query the required data on the submodule level.
  */
  const [flights, setFlights] = useState(null)
  const [airports, setAirports] = useState(null)
  const [countries, setCountries] = useState(null)
  const [airlines, setAirlines] = useState(null)

  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  // Use custom hook
  // import useFetch from './useFetch';
  // const { data, isPending, Error} = useFetch(`http://localhost:2045/data`)

  // useEffect runs a function after every render of the component
  // If the state of the page is changed in useEffect, this triggers a rerender and then an infinite loop
  useEffect(() => {
   // Function to fetch the data from the API
    const fetchData = async (key) => {
      const res = await fetch(`http://localhost:5000/${key}`)
      const data = await res.json()
      return data
    }
    try{
    fetchData("airports").then((data) => {
      setAirports(data)
    })

    fetchData("flights").then((data) => {
      setFlights(data)
    })

    fetchData("countries").then((data) => {
      setCountries(data)
    })

    fetchData("airlines").then((data) => {
      setAirlines(data)
      //This does not work for multiple data stream which need to be loaded - either it needs to be check for each individual one or all the data is loaded in one statement
      setIsPending(false)
    })
    }
    catch(err) {
      setIsPending(false)
      setError(err.message)
      console.log(err)
    }
  }, []) // empty dependency array -> onl< runs the function after the initial rendering, additional variables which should be watched can be added to the array



  return (
    // Make Router available in the whole app
    <Router>
      <div className='app'>
        <Header></Header>
        {isPending && <div><br />Loading ...<br /><br /></div>}
        {error && <div><br />{ error }<br /><br /></div>}
        {/* Only load the elements when the data is loaded */}
        {(airports && flights && countries && airlines) &&
          <Container>
            {/* Switch component in earlier versions of React router. Here we can switch between different pages */}
            <Routes >
              <Route exact path="/" element={<Main />}>
              </Route>
              <Route exact path="/flights" element={<FlightPage flights={flights} airports={airports} countries={countries} airlines={airlines} ></FlightPage>}>
              </Route>
              {/* Use route parameters */}
              <Route exact path="/flightDetails/:id" element={<FlightDetails></FlightDetails>}>
              </Route>
              <Route exact path="/settings" element={<Settings></Settings>}>
              </Route>
              <Route exact path="/about" element={<About></About>}>
              </Route>
              <Route exact path="/admin" element={<Admin></Admin>}>
              </Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
          </Container>
        }
        <Footer></Footer>
      </div >
    </Router >
  );
}

export default App;
