const products = [
  {
    name: 'PRODUCT 1',
    price: 100,
    creationDate: '2020-09-23',
  },
  {
    name: 'PRODUCT 2',
    price: 350,
    creationDate: '2019-05-10',
  },
  {
    name: 'PRODUCT 3',
    price: 670,
    creationDate: '2021-01-15',
  },
  {
    name: 'PRODUCT 4',
    price: 290,
    creationDate: '2018-03-02',
  },
  {
    name: 'PRODUCT 5',
    price: 799,
    creationDate: '2020-10-24',
  },
  {
    name: 'PRODUCT 6',
    price: 450,
    creationDate: '2020-09-23',
  },
];

export function getProducts() {
  return new Promise((resolve) =>
    setTimeout(
      resolve({
        success: true,
        content: {
          products: products,
        },
      }),
      1500,
    ),
  );
}
