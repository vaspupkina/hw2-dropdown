import React from 'react'
import PropTypes from 'prop-types'
import DropdownItem from './DropdownItem';

function DropdownList({items=[], selection="", onClick=null}) {
  return (
    <ul dataid="dropdown" className="dropdown">
        {
            items.map((item) => {
                return <DropdownItem key={item} item={item} isSelected={item === selection} onClick={onClick} />;
            })
        }
  </ul>
  )
}

DropdownList.propTypes = {
    items : PropTypes.arrayOf(PropTypes.string),
    selection : PropTypes.string,
    onClick : PropTypes.func
}

export default DropdownList
