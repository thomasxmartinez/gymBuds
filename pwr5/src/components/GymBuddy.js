import React, { Component } from 'react';
import GymBud from './GymBud';
import EditGymBud from './EditGymBud';
import gymBudAPI from './api';

class GymBuddies extends Component {
  constructor() {
    super();

    this.state = {
      gymBuddies: [],
      creatingGymBud: false
    };

    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    gymBudAPI.get().then(json => this.setState({ gymBuddies: json }));
  }

  handleSelect(gymBud) {
    this.setState({ selectedGymBud: gymBud });
  }

  handleDelete(event, gymBud) {
    event.stopPropagation();

    gymBudAPI.destroy(gymBud).then(() => {
      let gymBuddies = this.state.gymBuddies;
      gymBuddies = gymBuddies.filter(h => h !== gymBud);
      this.setState({ gymBuddies: gymBuddies });

      if (this.selectedGymBud === gymBud) {
        this.setState({ selectedGymBud: null });
      }
    });
  }

  handleEnableAddMode() {
    this.setState({
      addingGymBud: true,
      selectedGymBud: { id: '', name: '', saying: '' }
    });
  }

  handleCancel() {
    this.setState({ addingGymBud: false, selectedGymBud: null });
  }

  handleSave() {
    let gymBuddies = this.state.gymBuddies;

    if (this.state.addingGymBud) {
      gymBudAPI
        .create(this.state.selectedGymBud)
        .then(result => {
          console.log('Successfully created!');

          gymBuddies.push(this.state.selectedGymBud);
          this.setState({
            gymBuddies: gymBuddies,
            selectedGymBud: null,
            addingGymBud: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      gymBudAPI
        .update(this.state.selectedGymBud)
        .then(() => {
          this.setState({ selectedGymBud: null });
        })
        .catch(err => {});
    }
  }

  handleOnChange(event) {
    let selectedGymBud = this.state.selectedGymBud;
    selectedGymBud[event.target.name] = event.target.value;
    this.setState({ selectedGymBud: selectedGymBud });
  }

  render() {
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
          <EditGymBud
            addingGymBud={this.state.addingGymBud}
            onChange={this.handleOnChange}
            selectedGymBud={this.state.selectedGymBud}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

export default GymBuddies;
