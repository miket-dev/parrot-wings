using Newtonsoft.Json;
using ParrotWings.Api.Models.User;
using ParrotWings.DataModel.Interface.Transaction.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParrotWings.Api.Models.Transaction
{
    public class TransactionViewItem
    {
        #region Properties
        [JsonProperty("id")]
        public long Id { get; set; }
        [JsonProperty("amount")]
        public decimal Amount { get; private set; }
        [JsonProperty("user")]
        public UserViewItem User { get; private set; }
        [JsonProperty("date")]
        public DateTime Date { get; private set; }
        [JsonProperty("resource")]
        public decimal Resource { get; set; }
        [JsonProperty("type")]
        public string Type
        {
            get
            {
                switch (this.TypeEnum)
                {
                    case TransactionTypeEnum.Credit:
                        return "Credit";
                    case TransactionTypeEnum.Debit:
                        return "Debit";
                    default:
                        throw new KeyNotFoundException();
                }
            }
        }
        public TransactionTypeEnum TypeEnum { get; private set; }
        #endregion

        #region Constructors
        public TransactionViewItem(ITransactionViewEntity viewEntity, int sourceUser)
        {
            this.Id = viewEntity.Id;
            this.Amount = viewEntity.Amount;
            this.User = sourceUser == viewEntity.UserFrom.Id ? new UserViewItem(viewEntity.UserTo) : new UserViewItem(viewEntity.UserFrom);
            this.Date = viewEntity.Date;

            this.TypeEnum = sourceUser == viewEntity.UserFrom.Id ? TransactionTypeEnum.Credit : TransactionTypeEnum.Debit;
        }
        #endregion
    }
}