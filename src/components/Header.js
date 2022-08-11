import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div className='header'>
      <h1>Task management app</h1>
      {/* <h1 style={{color : 'red', backgroundColor : 'black'}}>Fancy React Playground Drölf</h1>
      <h2 style = {heading2_style} >Random string received by the calling component: {props.random_string} </h2>  */}
    </div>
  );
}

Header.defaultProps = {
    random_string: "Default Random String",
}

Header.propTypes = {
    random_string: PropTypes.string, // Throw error when other datatype is provided -> this does not prevent the page from loading by default
    //required_prop: PropTypes.string.isRequired //Throw an error, when prop is not provided -> this does not prevent the page from loading by default
}

const heading2_style = {
    color : 'blue',
    backgroundColor : 'green',
}

export default Header;