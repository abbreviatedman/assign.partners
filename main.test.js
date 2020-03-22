const {
  makeRoster,
  _makeStudent,
} = require('./main.js')


describe('makeRoster', () => {
  it(`returns an object`, () => {
    expect(typeof makeRoster()).toBe('object')
  })
})

describe('roster.students', () => {
  it(`is an empty array`, () => {
    const students = makeRoster()._students
    expect(Array.isArray(students)).toBe(true)
  })

  it(`begins as an empty array`, () => {
    const students = makeRoster()._students;
    expect(students.length).toBe(0);
  })
})

describe('roster.addStudent', () => {
  it(`is a method`, () => {
    const roster = makeRoster();
    expect(typeof roster.addStudent).toBe('function');
  })

  it(`adds a student with the given name to the roster`, () => {
    const roster1 = makeRoster();
    roster1.addStudent('Colin');
    expect(typeof roster1._students[0]).toBe('object')
    expect(roster1._students[0].name).toBe('Colin');
  })

  it(`adds the student at the end of the roster`, () => {
    const roster1 = makeRoster();
    roster1.addStudent('Colin');
    expect(roster1._students[0].name).toBe('Colin');
    roster1.addStudent('Maya');
    expect(roster1._students[1].name).toBe('Maya');
  })
})

describe('_makeStudent', () => {
  it(`returns an object`, () => {
    expect(typeof _makeStudent()).toBe('object')
  })

  it(`populates the name field with the given string`, () => {
    const student1 = _makeStudent('Colin');
    const student2 = _makeStudent('Sarah');

    expect(student1.name).toBe('Colin');
    expect(student2.name).toBe('Sarah');
  })

  it(`creates an array for the partners field`, () => {
    const studentPartners1 = _makeStudent().partners;

    expect(Array.isArray(studentPartners1)).toBe(true)
  })

  it(`begins the partners field as an empty array`, () => {
    const studentPartners1 = _makeStudent().partners;

    expect(studentPartners1.length).toBe(0);
  })
})
