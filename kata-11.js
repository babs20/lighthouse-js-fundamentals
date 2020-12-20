const calculateChange = function(total, cash) {
  // Find out the change and initialize the object to store the change values in
  let change = cash - total;
  let changeObject = {};

  // Function to calculate how many of each bill / coin to give back
  // Init the key in the object if the value is less than or equal to the change
  // While loop will add to the value (bill / coin) of the key (amount of each) until the change is less than the value
  const changeMaker = (key, value) => {
    if (change >= value) {
      changeObject[key] = 0;
      while (change >= value) {
        change -= value;
        changeObject[key] ++;
      }
    }
  }

  changeMaker('twentyDollar', 2000);
  changeMaker('tenDollar', 1000);
  changeMaker('fiveDollar', 500);
  changeMaker('twoDollar', 200);
  changeMaker('oneDollar', 100);
  changeMaker('quarter', 25);
  changeMaker('dime', 10);
  changeMaker('nickel', 5);
  changeMaker('penny', 1);
  
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// Twenty dollars = 2000
// Ten dollars = 1000
// Five dollars = 500
// Two dollars = 200
// One dollar = 100 
// Quarter = 25
// Dime = 10
// Nickel = 5 
// Penny = 1