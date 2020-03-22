const _makeStudent = (name) => ({
  name,
  partners: [],
});


const makeRoster = () => ({
  _students: [],

  addStudent: function(name) {
    this._students.push(_makeStudent(name));
  }
})


module.exports = {
  makeRoster,
  _makeStudent,
}
