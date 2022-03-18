var utils  = require('course-utilities');
var hello = utils.load('./greet.js', 'hello');

//return hello name
test('outputs the correct string', () => {
  const name = 'Elizabeth';
  expect(Greet()).toBe("Hello Elizabeth");
});

//null becomes there
test('outputs the correct string', () => {
  const name = '';
  expect(Greet()).toBe("Hello there");
});

//NAME returns HELLO NAME
test('outputs the correct string', () => {
  const name = 'ELIZABETH';
  expect(Greet()).toBe("HELLO ELIZABETH");
});

//name1 and name2 returned as hello name1, name2
test('outputs the correct string', () => {
  const name = ['Jose','Pep'];
  expect(Greet()).toBe("Hello Jose, Pep");
});

//multiple names return as hello and the names
test('outputs the correct string', () => {
  const name = ['Alex','Arsene','Jose','Zidane'];
  expect(Greet()).toBe("Hello Alex, Arsene, Jose, Zidane");
});