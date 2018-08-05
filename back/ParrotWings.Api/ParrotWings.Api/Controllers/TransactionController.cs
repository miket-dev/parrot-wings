using ParrotWings.Api.Models.Transaction;
using ParrotWings.DataModel.Interface.Transaction;
using ParrotWings.DataModel.Interface.Transaction.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ParrotWings.Api.Controllers
{
    public class TransactionController : ApiController
    {
        #region Fields
        private ITransactionStorage _transactionStorage;
        #endregion

        #region Constructors
        public TransactionController(ITransactionStorage transactionStorage)
        {
            this._transactionStorage = transactionStorage;
        }
        #endregion

        #region Methods
        [HttpGet]
        [Route("api/transaction/balance")]
        public decimal Balance(int userId)
        {
            var userBalance = this._transactionStorage.QueryByUser(userId)
                .Select(x => x.UserFrom.Id == userId ? -x.Amount : (x.Amount)).Sum();

            return userBalance;
        }

        [HttpGet]
        [Route("api/transaction/transactions")]
        public IEnumerable<TransactionViewItem> Transactions(int userId)
        {
            var transactions = this._transactionStorage
                .QueryByUser(userId)
                .Select(x => new TransactionViewItem(x, userId)).ToList();

            //count resource
            var prevResource = 0M;
            foreach (var item in transactions.OrderBy(x => x.Date))
            {
                switch (item.TypeEnum)
                {
                    case TransactionTypeEnum.Credit:
                        prevResource -= item.Amount;
                        break;
                    case TransactionTypeEnum.Debit:
                        prevResource += item.Amount;
                        break;
                }

                item.Resource = prevResource;
            }

            return transactions.OrderByDescending(x => x.Date);
        }

        [HttpPost]
        [Route("api/transaction/transfer")]
        public string Transfer([FromBody] TransactionEditItem editItem)
        {
            editItem.Date = DateTime.Now;

            this._transactionStorage.Insert(editItem);

            return "ok";
        }
        #endregion
    }
}
