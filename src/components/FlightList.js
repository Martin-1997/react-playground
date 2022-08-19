import ListGroup from 'react-bootstrap/ListGroup';
import Flight from './Flight';

const FlightList = ({ flights }) => {
    return (
        <ListGroup variant="">
            {/* key is only used by the list, but it is not forwarded to the list component https://reactjs.org/warnings/special-props.html */}
            {flights.map((flight, key) => <Flight flight={flight} key={key}></Flight>)}
        </ListGroup>
    );
}

// {props.tasks.map((task, index) => <Task task={task} key={index} onDelete={props.onDelete} switchTaskReminder={props.switchTaskReminder}></Task>)}

export default FlightList;