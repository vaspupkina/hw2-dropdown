import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DropdownList from './DropdownList';

function Dropdown({
                    label="",
                    icon="",
                    items=[]},
                    onItemSelected=null) {    
  const [state, setState] = useState("");

  const onButtonClick = (event) => {
    event.preventDefault();
    if (document.querySelector('[dataid=wrapper]').classList.toggle('open'))
    {
      setState(()=>{ return ""; });
    }
  };

  const onItemClick = (event, id) => {
    event.preventDefault();
    setState(()=>{
      if (onItemSelected instanceof(Function))
      {
        onItemSelected(id);
      }
      return id; 
    });    
  };

  return (
    <div dataid="wrapper" className="dropdown-wrapper">
      <button dataid="toggle" className="btn" onClick={onButtonClick}>
        <span>{label}</span>
        <i className="material-icons">{icon}</i>
        <DropdownList items={items} onClick={onItemClick} selection={state}/>
      </button>
    </div>
  )
}

Dropdown.propTypes = {
  label : PropTypes.string,
  icon : PropTypes.string,
  items : PropTypes.arrayOf(PropTypes.string),
  onItemSelected : PropTypes.func
}

export default Dropdown
