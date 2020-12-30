enum Category {
  INCOMING = 'Incoming',
  OUTGOING = 'Outgoing'
}

export default interface ITransactionsDTO {
  _id?: string
  walletId: string;
  amount: number;
  description: string;
  category: Category;
  date: Date
}