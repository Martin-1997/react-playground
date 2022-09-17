import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

/*
This component represents a single flight item how it is displayed inside a FlightList container
*/
const Flight = ({ flight, currency_symbol }) => {
  const date = new Date(Date.parse(flight.date));
  return (
    <Link to={`/flightDetails/${flight.id}`}>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {flight.StartAirport.name} --> {flight.DestinationAirport.name} on{" "}
            {date.toLocaleDateString("en-de", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          Airline: {flight.airline.name}
        </div>
        <Badge bg="primary" pill>
          {flight.price} {currency_symbol}
        </Badge>
      </ListGroup.Item>
    </Link>
  );
};

export default Flight;
