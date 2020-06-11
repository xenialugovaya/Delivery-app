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
    title: 'pizza1',
    priceUSD: 9.5,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza.png`,
    section: 'Pizza',
  },
  {
    title: 'pizza2',
    priceUSD: 7,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza2.jpeg`,
    section: 'Pizza',
  },
  {
    title: 'pizza2',
    priceUSD: 5.5,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza2.jpeg`,
    section: 'Pizza',
  },
  {
    title: 'pizza2',
    priceUSD: 8,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza2.jpeg`,
    section: 'Pizza',
  },
  {
    title: 'pizza2',
    priceUSD: 6.5,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza2.jpeg`,
    section: 'Pizza',
  },
  {
    title: 'pizza2',
    priceUSD: 7,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza2.jpeg`,
    section: 'Pizza',
  },
  {
    title: 'pizza2',
    priceUSD: 6.5,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza2.jpeg`,
    section: 'Pizza',
  },
  {
    title: 'pizza2',
    priceUSD: 6,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza2.jpeg`,
    section: 'Pizza',
  },
  {
    title: 'drink1',
    priceUSD: 1,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: `${imagePath}pizza2.jpeg`,
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