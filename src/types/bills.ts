import { CATEGORIES } from "./categories";

export type BillType = {
  id?: string;
  name: string;
  amount: string;
  category: CATEGORIES;
  date: number;
};

export type BillsType = Array<BillType>;

export const BILL_EMPTY_STATE = {
  name: "",
  amount: "",
  category: CATEGORIES.empty,
  date: 0,
};
