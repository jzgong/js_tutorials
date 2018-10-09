function addition(a, b) {
  return a + b;
}
console.log(addition(1, 2), addition('a', 'b'));

const o = {
  name: 'Frank',
  speak() { return `My name is ${this.name}`; },
};
console.log(o.speak());

const f1 = () => 'hello';
const f2 = (a, b) => a + b;
console.log(f1(), f2(3, 4));

const bruce = { name: 'bruce' };
function greet() {
  return `Hello my name is ${this.name}`;
}
console.log(greet.call(bruce));

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(Math.min.apply(null, arr));
