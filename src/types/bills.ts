import { CATEGORIES } from "@src/types";

export type BillType = {
  id: string;
  name: string;
  amount: string;
  category: CATEGORIES;
};

export type BillsType = Array<BillType>;
