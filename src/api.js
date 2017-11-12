const baseAPI = '/api';

const gymBudAPI = {
  async get() {
    let response = await fetch(`${baseAPI}/gymBuddies`);
    let json = await response.json();

    return json;
  },

  async create(gymBud) {
    let response = await fetch(`${baseAPI}/gymBud`, {
      method: 'PUT',
      body: JSON.stringify(gymBud),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    let json = response.json();

    return json;
  },

  async update(gymBud) {
    let response = await fetch(`${baseAPI}/gymBud`, {
      method: 'POST',
      body: JSON.stringify(gymBud),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    let json = response.json();

    return json;
  },

  async destroy(gymBud) {
    let response = await fetch(`${baseAPI}/gymBud/${gymBud.id}`, {
      method: 'DELETE'
    });
    let json = await response.json();

    return json;
  }
};

export default gymBudAPI;
