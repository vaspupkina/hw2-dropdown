import React from 'react'
import PropTypes from 'prop-types'

function DropdownItem({item="", isSelected=false, onClick=null}) {
  return (
    <li onClick={(event)=> {onClick(event, item)}} 
        className={ isSelected ? "active" : ""}>
        <a href="#">{item}</a>
    </li>
  )
}

DropdownItem.propTypes = {
    item : PropTypes.string,
    isSelected : PropTypes.bool,
    onClick : PropTypes.func
}

export default DropdownItem
