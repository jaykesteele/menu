const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  addDishToCourse(courseName, dishName, dishPrice, courses) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName, courses) {
    const dishes = courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(courses) {
    const appetizer = menu.getRandomDishFromCourse('appetizers', courses);
    const main = menu.getRandomDishFromCourse('mains', courses);
    const dessert = menu.getRandomDishFromCourse('desserts', courses);
    
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}, Total Price: $${totalPrice}`;
  }
};


menu.addDishToCourse('appetizers', ' Salad', 4, menu.courses);
menu.addDishToCourse('appetizers', ' Bread', 3, menu.courses);
menu.addDishToCourse('appetizers', ' chips ', 5., menu.courses);

menu.addDishToCourse('mains', 'Spaghetti ', 10, menu.courses);
menu.addDishToCourse('mains', ' Salmon', 13, menu.courses);
menu.addDishToCourse('mains', 'Chicken Alfredo', 5, menu.courses);

menu.addDishToCourse('desserts', 'ice cream', 3, menu.courses);
menu.addDishToCourse('desserts', 'Cheesecake', 6, menu.courses);
menu.addDishToCourse('desserts', 'cookie pan', 10, menu.courses);


const meal = menu.generateRandomMeal(menu.courses);
console.log(meal);
