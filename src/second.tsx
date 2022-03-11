import './second.module.scss';

const users = [
  { name: 'Oby', age: 12 },
  { name: 'Heera', age: 32 },
];

var a = 3;

const w = () => a + 1;

const loggedInUser = users.find(u => u.name === 'Heera');
console.log(loggedInUser.age);

export default (a: any) => {
  console.log(a);
};
