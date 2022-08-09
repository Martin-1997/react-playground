import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({onAdd, showAddTask}) => {
  return (
    <header className='header'>
      {/* <h1 style={{color : 'red', backgroundColor : 'black'}}>Fancy React Playground Drölf</h1>
      <h2 style = {heading2_style} >Random string received by the calling component: {props.random_string} </h2> */}
      {/* <Button color='green' text="Green Buttons"></Button> */}
      {/* <Button color='yellow' text="Yellow Button"></Button>
      <Button color='red' text="Red Button"></Button> */}
      <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Open"} onClick={onAdd}></Button>
    </header>
  );
}

// Header.defaultProps = {
//     random_string: "Default Random String",
// }

// Header.propTypes = {
//     random_string: PropTypes.string, // Throw error when other datatype is provided -> this does not prevent the page from loading by default
//     required_prop: PropTypes.string.isRequired //Throw an error, when prop is not provided -> this does not prevent the page from loading by default
// }

const heading2_style = {
    color : 'blue',
    backgroundColor : 'green',
}

export default Header;

// class App extends React.Component{
//     render() {
//         return <header>
//                <h1>Fancy React Playground</h1>
//              </header>
//     }
// }
// export default App;

