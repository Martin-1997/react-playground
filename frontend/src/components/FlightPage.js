import React from 'react';
import FlightList from './FlightList';
import ListSelector from './ListSelector';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

/*
The Flight Page displays a FlightList Container and multiple other containers which allow filtering the Flights provided in the FlightList container.
*/

export default function FlightPage({ flights, airports, countries, airlines }) {

    //const [airportNames, setAirportNames] = useState([])

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
                    <ListSelector name={"Start Airport"} items={airports} optionKey={"id"} optionLabel={"name"} onChange={setStartAirports}></ListSelector>
                    <ListSelector name={"Destination Airports"} items={airports} optionKey={"id"} optionLabel={"name"} onChange={setDestAirports}></ListSelector>
                </Col>
                <Col xs={10}>
                    <FlightList flights={flights}></FlightList>
                    {/* <FlightList flights={ flights.filter((flight) => {flight.destination_name === filter_dest_airport})}></FlightList> */}
                    {

                        //   if !(flights === null) ? <FlightList flights={ flights.filter((flight) => {flight.destination_name === filter_dest_airport})}></FlightList> : "No flights available"
                    }
                </Col>
                {/* <Col>3 of 3</Col> */}
            </Row>
        </Container>
    );
}

// "flight_id" : 1,
//             "destination_id" : 1,
//             "destination_name" : "Berlin Brandenburg Airport",
//             "start_id" : 3,
//             "start_name" : "Charles de Gaulle Airport",
//             "airline_id" : 3,
//             "airline_name" : "Air France",
//             "date" : "25-05-2022",
//             "price" : 235
