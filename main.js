const _makeStudent = (name) => ({
  name,
  partnerCounts: [],
});


const makeRoster = () => ({
  _students: [],
  _groups: [],

  addStudent: function(newName) {
    if (this._students.some(({name}) => name === newName)) {
      throw new Error();
    }

    if (newName === '') {
      throw new Error();
    }

    this._students.push(_makeStudent(newName));
  },

  removeStudent: function(nameToRemove) {
    if (this._students.every(({name}) => name !== nameToRemove)) {
      throw new Error();
    }

    this._students = this._students.filter(({name}) => name !== nameToRemove);
  },
})


module.exports = {
  makeRoster,
  _makeStudent,
}
