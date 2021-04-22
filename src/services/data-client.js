const products = [
  {
    id: 1,
    name: 'BOLS MEDIANO',
    price: 100,
    creationDate: '2020-09-23',
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2021-01-07-at-2-40-32-pm1-3434cae9e0674099a116100414441842-240-0.jpeg',
  },
  {
    id: 2,
    name: 'ESPEJO DECORATIVO',
    price: 350,
    creationDate: '2019-05-10',
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2021-03-22-at-11-25-36-am1-dc4baad963e522fc4316164232696025-240-0.jpeg',
  },
  {
    id: 3,
    name: 'MASETA PEQUEÑA',
    price: 670,
    creationDate: '2021-01-15',
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2020-05-07-at-1-52-22-pm1-bacdb5f804d84a3c2815888728452211-240-0.jpeg',
  },
  {
    id: 4,
    name: 'MASETA GRANDE',
    price: 290,
    creationDate: '2018-03-02',
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2021-03-22-at-2-22-55-pm1-928a4ac07a0b18448516164338363785-240-0.jpeg',
  },
  {
    id: 5,
    name: 'MATE DE MADERA',
    price: 799,
    creationDate: '2020-10-24',
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2020-04-28-at-23-11-521-28cf1a4292f346099a15881264066046-240-0.jpeg',
  },
  {
    id: 6,
    name: 'MASETA VINTAGE',
    price: 450,
    creationDate: '2020-09-23',
    imgUrl:
      'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/054/973/products/whatsapp-image-2020-03-18-at-15-34-461-05cfd54f3f8c6bc3a415845589253933-240-0.jpeg',
  },
];

export const hardcodedClientApi = {
  getProducts: (filter) => {
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
  },
};
