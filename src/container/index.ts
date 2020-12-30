import {container} from 'tsyringe';

import TransactionsRepository from '../repositories/Transactions/TransactionRepository'
import ITransactionsRepository from '../repositories/Transactions/ITransactionsRepository'

import WalletRepository from '../repositories/Wallet/WalletRepository'
import IWalletRepository from '../repositories/Wallet/IWalletRepository'

import ClientRepository from '../repositories/Client/ClientRepository'
import IClientRepository from '../repositories/Client/IClientRepository'

container.registerSingleton<ITransactionsRepository>(
  "TransactionsRepository",
  TransactionsRepository
)

container.registerSingleton<IWalletRepository>(
  "WalletRepository",
  WalletRepository
)

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
)