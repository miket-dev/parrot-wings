using ParrotWings.DataModel.Interface.Transaction.Entity;
using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Transaction.Entity
{
    public class TransactionViewEntity : ITransactionViewEntity
    {
        #region Properties
        public long Id { get; set; }

        public decimal Amount { get; private set; }

        public IUserViewEntity UserFrom { get; private set; }

        public IUserViewEntity UserTo { get; private set; }

        public DateTime Date { get; private set; }
        #endregion

        #region Constructors
        public TransactionViewEntity(long id,
            decimal amount,
            IUserViewEntity userFrom,
            IUserViewEntity userTo,
            DateTime date)
        {
            this.Id = id;
            this.Amount = amount;
            this.UserFrom = userFrom;
            this.UserTo = userTo;
            this.Date = date;
        }
        #endregion

    }
}
