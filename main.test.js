const {
  makeRoster,
  _makeStudent,
} = require('./main.js')


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

  it(`creates an array for the partnerCounts field`, () => {
    const studentPartners1 = _makeStudent().partnerCounts;

    expect(Array.isArray(studentPartners1)).toBe(true)
  })

  it(`begins the partnerCounts field as an empty array`, () => {
    const studentPartners1 = _makeStudent().partnerCounts;

    expect(studentPartners1.length).toBe(0);
  })
})


describe('makeRoster', () => {
  it(`returns an object`, () => {
    expect(typeof makeRoster()).toBe('object')
  })
})


describe('roster._students', () => {
  it(`is an array`, () => {
    const students = makeRoster()._students
    expect(Array.isArray(students)).toBe(true)
  })

  it(`begins as an empty array`, () => {
    const students = makeRoster()._students;
    expect(students.length).toBe(0);
  })
})


describe('roster._groups', () => {
  it(`is an array`, () => {
    const groups = makeRoster()._groups
    expect(Array.isArray(groups)).toBe(true)
  })

  it(`begins as an empty array`, () => {
    const groups = makeRoster()._groups;
    expect(groups.length).toBe(0);
  })
})


describe('roster.addStudent', () => {
  it(`is a method`, () => {
    const roster = makeRoster();
    expect(typeof roster.addStudent).toBe('function');
  })

  it(`adds a student with the given name to the roster`, () => {
    const roster = makeRoster();
    roster.addStudent('Colin');
    expect(typeof roster._students[0]).toBe('object')
    expect(roster._students[0].name).toBe('Colin');
  })

  it(`uses _makeStudent`, () => {
    const roster = makeRoster();
    roster.addStudent('Colin');
    expect(roster._students).toEqual([_makeStudent('Colin')]);
  })

  it(`adds the student at the end of the roster`, () => {
    const roster = makeRoster();
    roster.addStudent('Colin');
    expect(roster._students[0].name).toBe('Colin');
    roster.addStudent('Maya');
    expect(roster._students[1].name).toBe('Maya');
  })

  it(`refuses to add an identically-named student`, () => {
    const roster = makeRoster();
    roster.addStudent('Maya');
    expect(() => roster.addStudent('Maya')).toThrow();
  })

  it(`refuses to add an unnamed student`, () => {
    const roster = makeRoster();
    expect(() => roster.addStudent('')).toThrow();
  })
})


describe('roster.removeStudent', () => {
  it(`is a method`, () => {
    const roster = makeRoster();
    expect(typeof roster.removeStudent).toBe('function');
  })

  it(`refuses to remove a student who's not there`, () => {
    const roster = makeRoster();
    roster.addStudent('Ian');
    expect(() => roster.removeStudent('Sal')).toThrow();
  })

  it(`removes the student with the given name from the roster`, () => {
    const roster = makeRoster();
    roster.addStudent('Colin');
    roster.removeStudent('Colin');
    expect(roster._students).toEqual([]);

    roster.addStudent('Maya');
    roster.addStudent('Colin');
    roster.addStudent('Ian');
    roster.addStudent('Sal');
    roster.removeStudent('Colin');
    expect(roster._students).toEqual([
      _makeStudent('Maya'),
      _makeStudent('Ian'),
      _makeStudent('Sal'),
    ]);
    roster.removeStudent('Maya');
    roster.removeStudent('Sal');
    expect(roster._students).toEqual([_makeStudent('Ian')]);
  })
})
