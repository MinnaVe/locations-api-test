let locations = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

module.exports = {
  findAll: () => {
    return locations;
  },
  findById: (id) => {
    return locations.find((location) => location.id === id);
  },
  deleteById: (id) => {
    let newDatabase = locations.filter((location) => location.id !== id);
    if (newDatabase.length !== locations.length) {
      locations = newDatabase;
      return true;
    } else {
      return false;
    }
  },
};
