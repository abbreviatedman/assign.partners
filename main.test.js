const {
  makeRoster,
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

  it(`adds the given value to the student roster`, () => {
    const roster1 = makeRoster();
    const roster2 = makeRoster();
    roster1.addStudent('Colin');
    roster2.addStudent('Maya');
    expect(roster1._students).toEqual(['Colin']);
    expect(roster2._students).toEqual(['Maya']);
  })
})
