let alcohol = {
  jimBeam: "100 грн",
  jagermeister: "280 грн",
  makersmark: "70 грн",
};

function addDrink(obj, name, price) {
  obj[name] = price;
}

addDrink(alcohol, "jameson", "400 грн");

function totalPrice(obj) {
  let totalPrice = 0;

  for (let key in obj) {
    totalPrice += parseInt(obj[key]);
  }

  return totalPrice;
}
console.log("Загальна сума замовлення: " + totalPrice(alcohol) + " грн");

function minPrice(obj) {
  let minPrice = parseInt(alcohol.jimBeam);

  for (let key in obj) {
    let value = parseInt(obj[key]);
    if (value < minPrice) {
      minPrice = value;
    }
  }

  return minPrice;
}

console.log("Мінімальна сума: " + minPrice(alcohol));

function maxPrice(obj) {
  let maxPrice = parseInt(alcohol.jimBeam);

  for (let key in obj) {
    let value = parseInt(obj[key]);
    if (value > maxPrice) {
      maxPrice = value;
    }
  }

  return maxPrice;
}

console.log("Максимальна сума: " + maxPrice(alcohol));