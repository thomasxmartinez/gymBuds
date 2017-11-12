import React, { Component } from 'react';

import GymBud from './GymBud';
import api from '../api';

class GymBuddies extends Component {
  state = {
    gymBuddies: [],
    creatingGymBud: false,
    lazyEdit: null
  };

  async componentDidMount() {
    const { default: EditGymBud } = await import('./EditGymBud');

    let json = await api.get();

    this.setState({
      gymBuddies: json,
      lazyEdit: EditGymBud
    });
  }

  handleSelect = gymBud => {
    this.setState({ selectedGymBud: gymBud });
  };

  handleDelete = async (event, gymBud) => {
    event.stopPropagation();

    let json = await api.destroy(gymBud);

    let gymBuddies = this.state.gymBuddies;
    gymBuddies = gymBuddies.filter(h => h !== gymBud);
    this.setState({ gymBuddies: gymBuddies });

    if (this.selectedGymBud === gymBud) {
      this.setState({ selectedGymBud: null });
    }
  };

  handleEnableAddMode = () => {
    this.setState({
      addingGymBud: true,
      selectedGymBud: { id: '', name: '', saying: '' }
    });
  };

  handleCancel = () => {
    this.setState({ addingGymBud: false, selectedGymBud: null });
  };

  handleSave = async () => {
    let gymBuddies = this.state.gymBuddies;

    if (this.state.addingGymBud) {
      let result = await api.create(this.state.selectedGymBud);

      gymBuddies.push(this.state.selectedGymBud);
      this.setState({
        gymBuddies: gymBuddies,
        selectedGymBud: null,
        addingGymBud: false
      });
    } else {
      let result = await api.update(this.state.selectedGymBud);

      this.setState({ selectedGymBud: null });
    }
  };

  handleOnChange = event => {
    let selectedGymBud = this.state.selectedGymBud;
    selectedGymBud[event.target.name] = event.target.value;
    this.setState({ selectedGymBud: selectedGymBud });
  };

  render() {
    const EditGymBud = this.state.lazyEdit;
    return (
      <div>
        <ul className="gymBuddies">
          {this.state.gymBuddies.map(gymBud => {
            return (
              <GymBud
                key={gymBud.id}
                gymBud={gymBud}
                onSelect={this.handleSelect}
                onDelete={this.handleDelete}
                selectedGymBud={this.state.selectedGymBud}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddMode}>Add New GymBud</button>
          {EditGymBud ? (
            <EditGymBud
              addingGymBud={this.state.addingGymBud}
              onChange={this.handleOnChange}
              selectedGymBud={this.state.selectedGymBud}
              onSave={this.handleSave}
              onCancel={this.handleCancel}
            />
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    );
  }
}

export default GymBuddies;
