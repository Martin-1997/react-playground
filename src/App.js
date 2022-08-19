import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import FlightPage from './components/FlightPage';
import { useState, useEffect } from 'react';

function App() {
  const [flights, setFlights] = useState(null)
  const [airports, setAirports] = useState(null)
  const [countries, setCountries] = useState(null)
  const [airlines, setAirlines] = useState(null)


  const fetchData = async (key) => {
    const res = await fetch(`http://localhost:2045/${key}`)
    const data = await res.json()
    return data
  }
  // useEffect runs a function after every render of the component
  // If the state of the page is changed in useEffect, this triggers a rerender and then an infinite loop
  useEffect(() => {
    const getFlights = async () => {
      setFlights(await fetchData("flights"))
    }
    getFlights()

    const getAirports = async () => {
      setAirports(await fetchData("airports"))
    }
    getAirports()

    const getCountries = async () => {
      setCountries(await fetchData("countries"))
    }
    getAirports()

    const getAirlines = async () => {
      setAirlines(await fetchData("airlines"))
    }
    getAirlines()
  }, []) // empty dependency array -> onl< runs the function after the initial rendering, additional variables which should be watched can be added to the array

  return (
    <Router>
      <div className='app'>
        <Header></Header>
        <div className='container'>
          <FlightPage flights={flights} airports={airports} countries={countries} airlines={airlines} ></FlightPage>
        </div>
        <Footer></Footer>
      </div >
    </Router>

  );
}

export default App;
