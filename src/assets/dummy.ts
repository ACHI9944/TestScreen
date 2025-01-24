export const DummyExpenses = [
  {value: 430, color: '#bc438a'},
  {value: 123, color: '#00c0b3'},
  {value: 185, color: '#fec100'},
  {value: 321, color: '#00b0f8'},
];

export const DummyIncomeList = [
  {
    id: 1,
    name: 'პირადი გადარიცხვა',
    category: 'პირადი გადარიცხვა',
    value: 500,
    date: '10 სექ, 2024, 12:20PM',
  },
  {
    name: 'ხელფასი',
    category: 'ხელფასი',
    value: 2000,
    id: 2,
    date: '10 სექ, 2024, 12:20PM',
  },
];
export const DummyExpensesList = [
  {
    name: 'რონის პიცა',
    category: 'კვება',
    value: -100,
    id: 3,
    date: '10 სექ, 2024, 12:20PM',
  },
  {
    name: 'მანქანის დაზღვევა',
    category: 'ფინანსები',
    value: -500,
    id: 4,
    date: '10 სექ, 2024, 12:20PM',
  },
];

export const DummyCategories = [
  {
    category: 'კვება',
    img: 'https://img.icons8.com/?size=100&id=Q2fre4pbJjTx&format=png&color=000000',
  },
  {
    category: 'ფინანსები',
    img: 'https://img.icons8.com/?size=100&id=VbL8v3mm1qyp&format=png&color=000000',
  },
  {
    category: 'პირადი გადარიცხვა',
    img: 'https://img.icons8.com/?size=100&id=w9CgCGrxafL1&format=png&color=000000',
  },
  {
    category: 'ხელფასი',
    img: 'https://img.icons8.com/?size=100&id=HNZ1FY24twH0&format=png&color=000000',
  },
];

export const getCategoryImage = (category: string) => {
  const foundCategory = DummyCategories.find(
    item => item.category === category,
  );
  return foundCategory
    ? foundCategory.img
    : 'https://img.icons8.com/?size=100&id=dF4LRqsPnaM1&format=png&color=000000';
};
