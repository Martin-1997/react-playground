import ListGroup from "react-bootstrap/ListGroup"
import Flight from "./Flight"
import { React } from "react"
import PropTypes from "prop-types"
/*
The FlightList container is a list view which displays multiple Flight Containers. Each Flight Container displays the information for one available flight.
*/
const FlightList = ({ flights }) => {
  return (
        <ListGroup variant="">
            {/* key is only used by the list, but it is not forwarded to the list component https://reactjs.org/warnings/special-props.html */}
            {flights.map((flight, key) =>
                    <Flight flight={flight} key={key} currency_symbol={"€"}></Flight>,
            )}
        </ListGroup>
  )
}

FlightList.propTypes = {
  flights: PropTypes.array,
}

// {props.tasks.map((task, index) => <Task task={task} key={index} onDelete={props.onDelete} switchTaskReminder={props.switchTaskReminder}></Task>)}

export default FlightList
