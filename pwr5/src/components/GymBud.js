import React from 'react';

const GymBud = props => {
  return (
    <li
      onClick={() => props.onSelect(props.gymBud)}
      className={props.gymBud === props.selectedGymBud ? 'selected' : ''}
    >
      <button className="delete-button" onClick={e => props.onDelete(e, props.gymBud)}>
        Delete
      </button>
      <div className="gymBuddies-element">
        <div className="badge">{props.gymBud.id}</div>
        <div className="name">{props.gymBud.name}</div>
        <div className="saying">{props.gymBud.saying}</div>
      </div>
    </li>
  );
};

export default GymBud;
