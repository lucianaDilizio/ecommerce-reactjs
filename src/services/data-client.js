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

export const hardcodedClientApi = {
  getProducts: (filter, type, sortby) => {
    let url = '';
    switch (type) {
      case 'category':
        switch (sortby) {
          case 1:
            url = `https://60b6edcd17d1dc0017b889b5.mockapi.io${
              filter ? `/categories/${filter}/` : '/'
            }products?sortBy=name&order=asc`;
            break;
          case 2:
            url = `https://60b6edcd17d1dc0017b889b5.mockapi.io${
              filter ? `/categories/${filter}/` : '/'
            }products?sortBy=name&order=desc`;
            break;
          case 3:
            url = `https://60b6edcd17d1dc0017b889b5.mockapi.io/${
              filter ? `/categories/${filter}/` : '/'
            }products?sortBy=price&order=asc`;
            break;
          case 4:
            url = `https://60b6edcd17d1dc0017b889b5.mockapi.io/${
              filter ? `/categories/${filter}/` : '/'
            }products?sortBy=price&order=desc`;
            break;
          default:
            url = `https://60b6edcd17d1dc0017b889b5.mockapi.io/products`;
            break;
        }
        return fetch(url)
          .then((response) => response.json())
          .then((products) => {
            return {
              success: true,
              content: {
                products: products,
              },
            };
          });
      case 'text':
      default:
        return fetch(
          'https://60b6edcd17d1dc0017b889b5.mockapi.io/products?name=' + filter,
        )
          .then((response) => response.json())
          .then((products) => {
            return {
              success: true,
              content: {
                products: products,
              },
            };
          });
    }
  },

  getCategories: () => {
    return fetch('https://60b6edcd17d1dc0017b889b5.mockapi.io/categories')
      .then((response) => response.json())
      .then((categories) => {
        return {
          success: true,
          content: {
            categories: [{ id: 0, description: 'ALL PRODUCTS' }, ...categories],
          },
        };
      });
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
