import { CATEGORIES } from "@src/types";

export type Bill = {
  id: string;
  name: string;
  amount: string;
  category: CATEGORIES;
};

export type BillType = Array<Bill>;
