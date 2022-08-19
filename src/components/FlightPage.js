import React from 'react';
import FlightList from './FlightList';
import ListSelector from './ListSelector';
import { useState } from 'react';

export default function FlightPage({ flights, airports, countries, airlines }) {
    const [airportNames, setAirportNames] = useState([])

    // useEffect?
    // setAirportNames([airports.map((airport) => airport.name)][0])
    // // console.log([airports.map((airport) => airport.name)][0])
    // console.log(airportNames)


    const filter_dest_airport = (filtered_dest_airports) => {
        setAirportNames(airportNames.filter((airportName) => filtered_dest_airports.includes(airportName)))
    }

    // var filter_dest_airport = "Berlin Brandenburg Airport"
    return (
        <div>
            {/* <ListSelector name={"Start Airport"} items={airportNames} ></ListSelector> */}
            {/* <ListSelector name={"Destination Airports"} items={airportNames} filter_dest_airport={filter_dest_airport}></ListSelector> */}
            {
                if !(flights === null) ? <FlightList flights={ flights.filter((flight) => {flight.destination_name === filter_dest_airport})}></FlightList> : "No flights available"
            }
            
        </div>
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
