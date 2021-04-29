const products = [
  {
    id: 1,
    name: 'SMALL RECIPIENT',
    price: 100,
    creationDate: '2020-09-23',
    category: 1,
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2021-01-07-at-2-40-32-pm1-3434cae9e0674099a116100414441842-240-0.jpeg',
  },
  {
    id: 2,
    name: 'DECORATIVE MIRROR',
    price: 350,
    creationDate: '2019-05-10',
    category: 4,
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2021-03-22-at-11-25-36-am1-dc4baad963e522fc4316164232696025-240-0.jpeg',
  },
  {
    id: 3,
    name: 'SMALL FLOWERPOT',
    price: 670,
    creationDate: '2021-01-15',
    category: 3,
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2020-05-07-at-1-52-22-pm1-bacdb5f804d84a3c2815888728452211-240-0.jpeg',
  },
  {
    id: 4,
    name: 'BIG FLOWERPOT',
    price: 290,
    creationDate: '2018-03-02',
    category: 3,
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2021-03-22-at-2-22-55-pm1-928a4ac07a0b18448516164338363785-240-0.jpeg',
  },
  {
    id: 5,
    name: 'WOOD MATE',
    price: 799,
    creationDate: '2020-10-24',
    category: 2,
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2020-04-28-at-23-11-521-28cf1a4292f346099a15881264066046-240-0.jpeg',
  },
  {
    id: 6,
    name: 'VINTAGE FLOWERPOT',
    price: 450,
    creationDate: '2020-09-23',
    category: 3,
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2020-03-18-at-15-34-461-05cfd54f3f8c6bc3a415845589253933-240-0.jpeg',
  },
];

const categories = [
  {
    id: 0,
    description: 'ALL PRODUCTS',
  },
  {
    id: 1,
    description: 'RECIPIENTS',
  },
  {
    id: 2,
    description: 'MATES',
  },
  {
    id: 3,
    description: 'FLOWERPOTS',
  },
  {
    id: 4,
    description: 'DECORATION',
  },
];

const sortingOptions = [
  {
    id: 1,
    description: '[A-Z]',
  },
  {
    id: 2,
    description: '[Z-A]',
  },
  {
    id: 3,
    description: 'Price: Low to Hight',
  },
  {
    id: 4,
    description: 'Price: Hight to Low',
  },
];

function sortAZ(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

const sortZA = (a, b) => {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
  return 0;
};

const sort19 = (a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
};

const sort91 = (a, b) => {
  if (a.price > b.price) {
    return -1;
  }
  if (a.price < b.price) {
    return 1;
  }
  return 0;
};
console.log(products);
export const hardcodedClientApi = {
  getProducts: (filter, type, sortby) => {
    switch (type) {
      case 'category':
        return new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                success: true,
                content: {
                  products:
                    sortby === 1
                      ? products
                          .filter(
                            (product) =>
                              product.category === filter || filter === 0,
                          )
                          .sort(sortAZ)
                      : sortby === 2
                      ? products
                          .filter(
                            (product) =>
                              product.category === filter || filter === 0,
                          )
                          .sort(sortZA)
                      : sortby === 3
                      ? products
                          .filter(
                            (product) =>
                              product.category === filter || filter === 0,
                          )
                          .sort(sort19)
                      : sortby === 4
                      ? products
                          .filter(
                            (product) =>
                              product.category === filter || filter === 0,
                          )
                          .sort(sort91)
                      : products.filter(
                          (product) =>
                            product.category === filter || filter === 0,
                        ),
                },
              }),
            1500,
          ),
        );
      case 'text':
      default:
        var regex = new RegExp(filter, 'gi');

        return new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                success: true,
                content: {
                  products: filter
                    ? products.filter((product) => product.name.match(regex))
                    : products,
                },
              }),
            1500,
          ),
        );
    }
  },

  getCategories: () => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            success: true,
            content: {
              categories: categories,
            },
          }),
        1500,
      ),
    );
  },

  getSortingOptions: () => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            success: true,
            content: {
              sortingOptions: sortingOptions,
            },
          }),
        0,
      ),
    );
  },
};
