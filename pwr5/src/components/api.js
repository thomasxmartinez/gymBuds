const baseAPI = '/api';

const gymBudAPI = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/gymBuddies`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(gymBud) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/gymBud`, {
        method: 'PUT',
        body: JSON.stringify(gymBud),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(gymBud) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/gymBud`, {
        method: 'POST',
        body: JSON.stringify(gymBud),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(gymBud) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/gymBud/${gymBud.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default gymBudAPI;
