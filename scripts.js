const storeApp = {};

storeApp.totalInventory = [
  {
    title: 'Bowie Tee',
    url: 'images/bowie.jpg',
    price: 19.99,
    stock: 4,
  },
  {
    title: 'Don\'t Know Tee',
    url: 'images/dontevenknow.jpg',
    price: 22.50,
    stock: 8,
  },
  {
    title: 'Doughnut Jean Jacket',
    url: 'images/doughnut.jpg',
    price: 59.00,
    stock: 5,
  },
  {
    title: 'Journey Tee',
    url: 'images/journey.jpg',
    price: 22.99,
    stock: 6,
  },
  {
    title: 'Skeleton Jean Jacket',
    url: 'images/someurl.jpg',
    price: 30.00,
    stock: 0,
  },
  {
    title: 'Skeleton Hand Tee',
    url: 'images/skeleton.jpg',
    price: 30.00,
    stock: 10,
  },
  {
    title: 'HackerYou Hoodie',
    price: 50.00,
    stock: 4,
  },
]

storeApp.currencies = {
  usd: {
    exchange: 1,
    symbol: `$`,
    displayName: `USD`,
    flag: `images/USD-flag.png`
  },
  cad: {
    exchange: 1.28,
    symbol: `$`,
    displayName: `CAD`,
    flag: `images/CAD-flag.png`
  },
  gbp: {
    exchange: 0.76,
    symbol: `£`,
    displayName: `GBP`,
    flag: `images/GBP-flag.png`
  }
}

storeApp.currentStock = storeApp.totalInventory.filter((item) => {
  return item.url && item.stock;
});

storeApp.displayItems = (inventory, currency) => {
  inventory.forEach((item) => {
    const listItem = document.createElement('li');

    const title = document.createElement('h2');
    title.textContent = item.title;

    const image = document.createElement('img');
    image.src = item.url;

    const price = document.createElement('p')
    price.textContent = (item.price * currency.exchange).toFixed(2);

    listItem.append(title, image, price);

    document.querySelector('.inventory').append(listItem);
  });
}


storeApp.init = function () {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const currency = this.id;
      document.querySelector('.inventory').innerHTML = '';
      storeApp.displayItems(storeApp.currentStock, storeApp.currencies[currency]);

      const currentFlag = document.querySelector('#flag');
      currentFlag.src = storeApp.currencies[currency].flag;
      currentFlag.alt = storeApp.currencies[currency].displayName

      document.querySelector('#currency').textContent = storeApp.currencies[currency].displayName;
    })
  })
  storeApp.displayItems(storeApp.currentStock, storeApp.currencies.usd);
}

storeApp.init();