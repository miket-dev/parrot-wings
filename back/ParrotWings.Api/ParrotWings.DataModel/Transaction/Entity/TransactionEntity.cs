using ParrotWings.DataModel.Interface;
using ParrotWings.DataModel.User.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Transaction.Entity
{
    [Table("Transaction")]
    public class TransactionEntity : IEntity<long>
    {
        #region Properties
        public long Id { get; set; }
        public decimal Amount { get; set; }
        public int UserFromId { get; set; }
        public UserEntity UserFrom { get; set; }
        public int UserToId { get; set; }
        public UserEntity UserTo { get; set; }
        public DateTime Date { get; set; }
        #endregion

        #region Constructors
        /// <summary>
        /// for EF
        /// </summary>
        public TransactionEntity()
        {

        }

        public TransactionEntity(long id,
            decimal amount,
            int userFromId,
            int userToId,
            DateTime date)
        {
            #region Validation
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException("amount");
            }
            #endregion

            this.Id = id;
            this.Amount = amount;
            this.UserFromId = userFromId;
            this.UserToId = userToId;
            this.Date = date;
        }
        #endregion
    }
}
