import {container} from 'tsyringe';

import TransactionsRepository from 'src/repositories/Transactions/TransactionRepository'
import ITransactionsRepository from 'src/repositories/Transactions/ITransactionsRepository'

import WalletRepository from 'src/repositories/Wallet/WalletRepository'
import IWalletRepository from 'src/repositories/Wallet/IWalletRepository'

container.registerSingleton<ITransactionsRepository>(
  "TransactionsRepository",
  TransactionsRepository
)

container.registerSingleton<IWalletRepository>(
  "WalletRepository",
  WalletRepository
)