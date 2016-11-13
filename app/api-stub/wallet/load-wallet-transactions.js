// @flow
import sinon from 'sinon';
import moment from 'moment';

const mainWalletArguments = { address: '13GvjwDkz8s8ZmGQjwVLNUXrNXdSmQa72x' };
const houseRentWalletArguments = { address: '1GrT8upXQCR4mzPpAeMfxqwZh2LF7PXsyn' };
const miningWalletArguments = { address: '1LYYdFD4RGLsYJT5tVQoLQEvfr7hJXHRuv' };
const transportingWalletArguments = { address: '1MKY9oAriyXvUKRBRsbrrT2JDHA8S9T2sf' };
const pocketMoneyWalletArguments = { address: 'fd17fda6410ac905447840e33c1851a5' };

export const loadWalletTransactions = sinon.stub();

loadWalletTransactions.withArgs(mainWalletArguments).yieldsAsync(null, [
  {
    id: 't-id-1',
    title: 'McDonalds 9059098 Luna',
    type: 'card',
    amount: -502.40,
    currency: '$',
    date: new Date(),
    description: ''
  },
  {
    id: 't-id-2',
    title: 'Money to Darko',
    type: 'adaExpend',
    amount: 500,
    currency: 'ada',
    date: new Date(),
    exchange: '502.40 ADA for 3.20 USD',
    conversionRate: '1 USD = 157 ADA',
    transactionId: '4f43b64ec9009ded75cc353f301d9f23a3c936d9b306af8fbb59f43e95244fe8',
    description: 'for invoice 1023'
  },
  {
    id: 't-id-3',
    title: 'Money from Dominik',
    type: 'adaIncome',
    amount: -400.58,
    currency: 'ada',
    date: moment().subtract(1, 'days').toDate(),
    exchange: '502.40 ADA for 3.20 USD',
    conversionRate: '1 USD = 157 ADA',
    transactionId: '5fd924625f6ab16a19cc9807c7c506ae1813490e4ba675f843d5a10e0baacdb8',
    description: 'for invoice 1023'
  },
  {
    id: 't-id-4',
    title: 'ADA to ETH',
    type: 'exchange',
    amount: -100000,
    currency: 'ada',
    date: moment().subtract(2, 'days').toDate(),
    exchange: '502.40 ADA for 1.25 ETH',
    conversionRate: '1 ETH = 401.92 ADA',
    transactionId: '08b177622078d8e27f8bb41293e12eb7cd676a6906ff3515e9baee81440bec2d',
    description: ''
  },
]);

loadWalletTransactions.withArgs(houseRentWalletArguments).yieldsAsync(null, []);
loadWalletTransactions.withArgs(miningWalletArguments).yieldsAsync(null, []);
loadWalletTransactions.withArgs(transportingWalletArguments).yieldsAsync(null, []);
loadWalletTransactions.withArgs(pocketMoneyWalletArguments).yieldsAsync(null, []);
loadWalletTransactions.yieldsAsync('Error loading wallet transactions', null);
