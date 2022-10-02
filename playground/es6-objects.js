//Object property shorthand

const name = "ANuja";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Oxford",
};

console.log(user);

//Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  rating: 4.2,
  salePrice: undefined,
};

const { label: ll, stock, rating = 5 } = product;
console.log(ll);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};
transaction("order", product);
