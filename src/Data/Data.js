const EXCHANGE_RATE_USD_TO_EUR = 0.88;

export function formatUSDPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export function formatEURPrice(price) {
  return convertToEUR(price).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  });
}

function convertToEUR(priceUSD) {
  return priceUSD * EXCHANGE_RATE_USD_TO_EUR;
}

export const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
];

export const deliveryCost = 5;

const imagePath = process.env.PUBLIC_URL + '/images/';

export const foodItems = [{
    title: 'Neapolitan',
    priceUSD: 9.5,
    shortDescription: 'The original pizza',
    description: 'The dough is made from Tipo 00 wheat flour (Italian milled) and the crust is thin, crunchy, and baked in a wood-fired oven. The pizza should have minimal toppings—perhaps San Marzano tomato sauce, buffalo mozzarella cheese, and basil—because too much sauce or cheese will weigh down the crust and make it soggy.',
    image: `${imagePath}pizza-neapolitan.jpg`,
    section: 'Pizza',
  },
  {
    title: 'California Style',
    priceUSD: 7,
    shortDescription: 'Unusual ingredients',
    description: 'California style pizza uses a dough base similar to the Neapolitan or New York style pizza and jazzes up the base with unusual and uncommon ingredients.',
    image: `${imagePath}pizza-california.jpg`,
    section: 'Pizza',
  },
  {
    title: 'Chicago Deep Dish',
    priceUSD: 5.5,
    shortDescription: 'A deep-dish pizza',
    description: 'In the 1940s, Pizzeria Uno in Chicago developed the deep-dish pizza, which has a deep crust that lines a deep dish, similar to a large metal cake or pie pan. Though the entire pizza is quite thick, the crust itself is only of thin to medium thickness, and the pizza has a very thick, large layer of toppings.',
    image: `${imagePath}chicago-deep-dish.jpg`,
    section: 'Pizza',
  },
  {
    title: 'Chicago Thin Crust',
    priceUSD: 8,
    shortDescription: 'Thin crust with large amounts of meat',
    description: 'The Chicago thin crust is crispier and crunchier than the New York style and normally cut into squares (or tavern cut) rather than diagonal slices. ',
    image: `${imagePath}chicago-thin-crust.jpg`,
    section: 'Pizza',
  },
  {
    title: 'Detroit Style',
    priceUSD: 6.5,
    shortDescription: 'A deep-dish crust and marinara sauce',
    description: 'The Detroit style pizza is a square pizza, similar to Sicilian-style pizza, with a deep-dish crust and marinara sauce sometimes served on top. The crust is usually baked in a well-oiled pan to develop caramelized crunchy edges. ',
    image: `${imagePath}detroit-style.jpg`,
    section: 'Pizza',
  },
  {
    title: 'New England Greek Style',
    priceUSD: 7,
    shortDescription: 'Typical Greek toppings',
    description: 'Greek-style pizza generally refers to the pizza served at Houses of Pizza, run by Greek immigrants in New England. The pizza crust lies in between the crunchy New York-style pizza and its thicker Sicilian cousin and it is baked in a heavily greased cake or cast iron pan, which results in a thick and golden crunchy crust. ',
    image: `${imagePath}greek-style.jpg`,
    section: 'Pizza',
  },
  {
    title: 'New York Thin Crust',
    priceUSD: 6.5,
    shortDescription: 'Modification of the Neapolitan pizza',
    description: 'New York-style pizza originated in New York City in the early 1900s and is a modification of the Neapolitan pizza. The pizza has a thin and crunchy crust that is soft and pliable on the interior, so you can fold the pizza while eating. Typical toppings are a perfect balance of thin tomato sauce and lots of grated mozzarella cheese, plus a type of meat or vegetable if you desire.',
    image: `${imagePath}thin-crust.jpg`,
    section: 'Pizza',
  },
  {
    title: 'St. Louis Style',
    priceUSD: 6,
    shortDescription: 'Topped with Provel cheese',
    description: 'St. Louis-style pizza, a unique take on New York-style pizza, originated in the 1960s by Ed and Margie Imo of Imo\'s Pizzeria. The pizza has a thin cracker-like crust made without yeast, and is topped with Provel cheese, rather than mozzarella.',
    image: `${imagePath}louis-style.jpg`,
    section: 'Pizza',
  },
  {
    title: 'Classic Burger',
    priceUSD: 10,
    shortDescription: 'Classic Burger',
    description: '',
    image: `${imagePath}classic-burger.jpg`,
    section: 'Burgers',
  },
  {
    title: 'Cheese Burger',
    priceUSD: 10.99,
    shortDescription: 'Cheese Burger',
    description: '',
    image: `${imagePath}bison-burger.jpg`,
    section: 'Burgers',
  },
  {
    title: 'Best Bison Burger',
    priceUSD: 10.99,
    shortDescription: 'With the typical ground beef',
    description: 'With the typical ground beef for leaner ground bison, a splash of Worcestershire sauce and a few shakes of Tabasco for a spicy, deep flavor',
    image: `${imagePath}bison-burger.jpg`,
    section: 'Burgers',
  },
  {
    title: 'Pepsi',
    priceUSD: 1,
    shortDescription: 'Pepsi',
    description: '',
    image: `${imagePath}pepsi.jpg`,
    section: 'Drinks',
  },
  {
    title: 'Coca-Cola',
    priceUSD: 1,
    shortDescription: 'coca-cola',
    description: '',
    image: `${imagePath}coca-cola.jpg`,
    section: 'Drinks',
  },
  {
    title: 'Mirinda',
    priceUSD: 1,
    shortDescription: 'Mirinda',
    description: '',
    image: `${imagePath}mirinda.jpg`,
    section: 'Drinks',
  },
]

export const menuItems = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});