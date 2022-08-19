// This component is used whenever a user needs to select one or multiple values from a list
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const ListSelector = ({ name, items }) => {
    return (
        <DropdownMultiselect
            options={items}
            name={name}
        />
        // <DropdownMultiselect
        //     as={ButtonGroup}
        //     drop="end"
        //     variant="secondary"
        //     title={name}
        //   >
        //     {items.map((item, key) => <Dropdown.Item key={key} as="checkbox">{item.name}</Dropdown.Item>)}
        //   </DropdownMultiselect>
    );
}

export default ListSelector;