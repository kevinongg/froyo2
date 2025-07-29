//prompt user and input the flavors for user
const userPrompt = prompt(
  ` `,
  `vanilla,vanilla,vanilla,strawberry,coffee,coffee`
);
// console.log(userPrompt);

//convert string into an array
const flavorArr = userPrompt.split(`,`);
// console.log(flavorArr);

//make an object to store flavors
const flavorObj = {};
//use a for loop to iterate through the array
for (const flavor of flavorArr) {
  if (!flavorObj[flavor]) {
    flavorObj[flavor] = 1;
  } else {
    flavorObj[flavor] += 1;
  }
}
console.log(flavorObj);
