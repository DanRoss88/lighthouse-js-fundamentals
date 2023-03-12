const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};
// Write a for loop that prints out the contents of ingredients:
for (let x; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
const newArr = [];
for (let y = 0; y < ingredients.length; y++) {
  newArr[y] = ingredients[ingredients.length - y - 1];
}
console.log(newArr);