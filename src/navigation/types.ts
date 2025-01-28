export type RootTabParamList = {
  Main: undefined;
  Finances: undefined;
};

export type MainStackParamList = {
  MainScreen: undefined;
};

export type FinancesStackParamList = {
  MyFinances: undefined;
  SingleDetailedTransaction: {
    id: number | string;
  };
};
