let backsooObj = {
  name : '남동길',
  age : '29',
  hasJob : false,
  [Symbol.for('one')]:10
};
console.log(Reflect.ownKeys(backsooObj));
