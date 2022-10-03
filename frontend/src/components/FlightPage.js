/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import FlightList from "./FlightList"
import ListSelector from "./ListSelector"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import PropTypes from "prop-types"

/*
The Flight Page displays a FlightList Container and multiple other containers which allow filtering the Flights provided in the FlightList container.
*/

export default function FlightPage ({ flights, airports, countries, airlines }) {
  // const [airportNames, setAirportNames] = useState([])

  // useEffect?
  // setAirportNames([airports.map((airport) => airport.name)][0])
  // // console.log([airports.map((airport) => airport.name)][0])
  // console.log(airportNames)

  // const filter_dest_airport = (filtered_dest_airports) => {
  //     setAirportNames(airportNames.filter((airportName) => filtered_dest_airports.includes(airportName)))
  // }
  const [startAirports, setStartAirports] = useState(airports)
  const [destAirports, setDestAirports] = useState(airports)

  return (
        <Container>
            <Row>
                <Col>
                    <label htmlFor="start_airport_selector">Start Airport</label>
                    <ListSelector id="start_airport_selector" name={"Start Airport"} items={airports} optionKey={"id"} optionLabel={"name"} onChange={setStartAirports}></ListSelector>
                    <br></br>
                    <label htmlFor="destination_airport_selector">Destination Airport</label>
                    <ListSelector id="destination_airport_selector" name={"Destination Airports"} items={airports} optionKey={"id"} optionLabel={"name"} onChange={setDestAirports}></ListSelector>
                </Col>
                <Col xs={10}>
                    {(flights != null) ? <FlightList flights={flights}></FlightList> : "No flights available"}
                    {/* <FlightList flights={ flights.filter((flight) => {flight.destination_name === filter_dest_airport})}></FlightList> */}
                    {
                        /* .filter((flight) => {flight.destination_name === filter_dest_airport}) */

                    }
                </Col>
                {/* <Col>3 of 3</Col> */}
            </Row>
        </Container>
  )
}

FlightPage.propTypes = {
  flights: PropTypes.array,
  airports: PropTypes.array,
  countries: PropTypes.array,
  airlines: PropTypes.array,
}
