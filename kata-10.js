const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Intialize parameters to store matching ingredients
  let bakeryAMatches = [];
  let bakeryBMatches = [];
  // Function to check if a bakery has the ingredients in the recipe. If so, push it to the approriate array
  const ingredientCheck = bakery => {
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        if (bakery.includes(recipes[i].ingredients[j])) {
          bakery === bakeryA ? bakeryAMatches.push(recipes[i].name) : bakeryBMatches.push(recipes[i].name);
        }
      }
    }
  }
  // Run the functions to populate the arrays
  ingredientCheck(bakeryA);
  ingredientCheck(bakeryB);
  // Check which names are the same in each array and print the name
  for (let i = 0; i < bakeryBMatches.length; i++) {
    if (bakeryAMatches.includes(bakeryBMatches[i])) {
      return bakeryBMatches[i]
    }
  }

}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));