// This component is used whenever a user needs to select one or multiple values from a list
import { React } from "react"
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap"
import PropTypes from "prop-types"

const ListSelector = ({ name, items, optionKey, optionLabel, onChange }) => {
  return (
  // https://github.com/kfrancikowski/react-multiselect-dropdown-bootstrap

        <DropdownMultiselect name={name} options={items} optionKey={optionKey} optionLabel={optionLabel}
        handleOnChange={(selected) => {
          onChange(selected)
        }} >
        </DropdownMultiselect>
  )
}

ListSelector.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
  optionKey: PropTypes.number,
  optionLabel: PropTypes.string,
  onChange: PropTypes.func,
}

export default ListSelector
