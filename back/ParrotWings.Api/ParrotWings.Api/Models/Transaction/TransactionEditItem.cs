using Newtonsoft.Json;
using ParrotWings.DataModel.Interface.Transaction.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParrotWings.Api.Models.Transaction
{
    public class TransactionEditItem : ITransactionEditEntity
    {
        #region Properties
        [JsonProperty("id")]
        public long Id { get; set; }
        [JsonProperty("amount")]
        public decimal Amount { get; set; }
        [JsonProperty("userIdFrom")]
        public int UserIdFrom { get; set; }
        [JsonProperty("userIdTo")]
        public int UserIdTo { get; set; }
        [JsonProperty("date")]
        public DateTime Date { get; set; }
        #endregion

        #region Constructors
        /// <summary>
        /// for serialization
        /// </summary>
        public TransactionEditItem()
        {

        }

        public TransactionEditItem(long id,
            decimal amount,
            int userIdFrom,
            int userIdTo,
            DateTime date)
        {
            this.Id = id;
            this.Amount = amount;
            this.UserIdFrom = userIdFrom;
            this.UserIdTo = userIdTo;
            this.Date = date;
        }
        #endregion
    }
}