import { CATEGORIES } from "@src/types";

export type BillType = {
  id: string;
  name: string;
  amount: string;
  category: CATEGORIES;
  date: number;
};

export type BillsType = Array<BillType>;
