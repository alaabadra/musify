const test = require('tape');
const supertest = require('supertest');

test('testing the tape', assert=>{
  const num = 1;
    assert.equal(num, 1, "pass");
    assert.end();
});

// test('testing / endpoint', assert=>{
//   assert.end();
// })

// test('testing statics endpoint', assert=>{
//   assert.end();
// })

// test('testing ', assert => {
//   assert.end();
// })

// test('testing login', assert => {
//   assert.end();
// })

// test('testing get songs', assert => {
//   assert.end();
// })

// test('testing add songs', assert => {
//   assert.end();
// })

// test('testing addfavs', assert => {
//   assert.end();
// });

// test('testing showfavs', assert => {
//   assert.end();
// });
