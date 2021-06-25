export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface IFilterState {
  filter: { currentFilter: { type: string; filter: string } };
}

export interface IProductsState {
  products: {
    list: IProduct[];
    loading: boolean;
  };
}
