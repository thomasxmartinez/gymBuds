import React from 'react';

const EditGymBud = props => {
  if (props.selectedGymBud) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>id: </label>
            {props.addingGymBud ? (
              <input
                type="number"
                name="id"
                placeholder="id"
                value={props.selectedGymBud.id}
                onChange={props.onChange}
              />
            ) : (
              <label className="value">{props.selectedGymBud.id}</label>
            )}
          </div>
          <div>
            <label>name: </label>
            <input name="name" value={props.selectedGymBud.name} placeholder="name" onChange={props.onChange} />
          </div>
          <div>
            <label>saying: </label>
            <input name="saying" value={props.selectedGymBud.saying} placeholder="saying" onChange={props.onChange} />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditGymBud;
