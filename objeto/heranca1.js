const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.__proto__); //__proto__ para objects
console.log(ferrari.__proto__ === Object.prototype); //.prototype para functions
console.log(volvo.__proto__ === Object.prototype);
