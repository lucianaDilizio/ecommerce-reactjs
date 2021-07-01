export interface IProduct {
  id: number;
  name: string;
  price: number;
  image?: string;
  amount: number;
}

export interface IFilter {
  type: string;
  filter: string | number;
}

export interface IFilterState {
  filter: { currentFilter: IFilter };
}

export interface IProductsState {
  products: {
    list: IProduct[];
    loading: boolean;
  };
}

export interface ICart {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export interface ICartState {
  currentCart: ICart[];
}
