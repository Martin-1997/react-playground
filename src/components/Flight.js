
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Flight = ({ flight }) => {
    return (
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{flight.start_name} --> {flight.destination_name} on {flight.date}</div>
                Airline: {flight.airline_name}
            </div>
            <Badge bg="primary" pill>
                {flight.price}
            </Badge>

            {/* <p>{flight.start_name} --> {flight.destination_name} on {flight.date}</p>
            <p>Airline: {flight.airline_name}</p>
            <p>Price: {flight.price}</p> */}

        </ListGroup.Item >
    );
}

export default Flight;