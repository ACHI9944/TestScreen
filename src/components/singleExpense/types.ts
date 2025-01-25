export type TransactionItem = {
  id: string | number;
  name: string;
  category: string;
  value: number;
  date: string;
};
export type SingleExpenseProps = {
  item: TransactionItem;
  categoryImage: string;
};
