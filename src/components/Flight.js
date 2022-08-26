
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

/*
This component represents a single flight item how it is displayed inside a FlightList container
*/
const Flight = ({ flight, currency_symbol }) => {
    return (
        <Link to={`/flightDetails/${flight.id}`}>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{flight.start_name} --> {flight.destination_name} on {flight.date}</div>
                    Airline: {flight.airline_name}
                </div>
                <Badge bg="primary" pill>
                    {flight.price} {currency_symbol}
                </Badge>

                {/* <p>{flight.start_name} --> {flight.destination_name} on {flight.date}</p>
            <p>Airline: {flight.airline_name}</p>
            <p>Price: {flight.price}</p> */}

            </ListGroup.Item >
        </Link>
    );
}

export default Flight;