const makeRoster = () => ({
  _students: [],

  addStudent: function(student) {
    this._students.push(student);
  }
})


module.exports = {
  makeRoster,
}
