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

export const pizzas = [{
    title: 'pizza1',
    priceUSD: 9.5,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: '/images/pizza.png'
  },
  {
    title: 'pizza2',
    priceUSD: 7,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: '/images/pizza2.jpeg'
  },
  {
    title: 'pizza2',
    priceUSD: 5.5,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: '/images/pizza2.jpeg'
  },
  {
    title: 'pizza2',
    priceUSD: 8,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: '/images/pizza2.jpeg'
  },
  {
    title: 'pizza2',
    priceUSD: 6.5,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: '/images/pizza2.jpeg'
  },
  {
    title: 'pizza2',
    priceUSD: 7,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: '/images/pizza2.jpeg'
  },
  {
    title: 'pizza2',
    priceUSD: 6.5,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: '/images/pizza2.jpeg'
  },
  {
    title: 'pizza2',
    priceUSD: 6,
    shortDescription: 'amazing pizza',
    description: 'amazing pizza',
    image: '/images/pizza2.jpeg'
  },
]