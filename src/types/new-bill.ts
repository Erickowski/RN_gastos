import { CATEGORIES } from "@src/types";

export type NewBillType = {
  name: string;
  amount: string;
  category: CATEGORIES;
};
