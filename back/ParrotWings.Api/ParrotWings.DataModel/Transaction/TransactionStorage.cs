using ParrotWings.DataModel.Interface.Transaction;
using ParrotWings.DataModel.Interface.Transaction.Entity;
using ParrotWings.DataModel.Interface.User;
using ParrotWings.DataModel.Transaction.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Transaction
{
    public class TransactionStorage : ITransactionStorage
    {
        #region Fields
        private ParrotWingsDbContext _dbContext;
        private IUserStorage _userStorage;
        #endregion

        #region Constructors
        public TransactionStorage(ParrotWingsDbContext dbContext, IUserStorage userStorage)
        {
            this._dbContext = dbContext;
            this._userStorage = userStorage;
        }
        #endregion

        #region Methods
        public ITransactionViewEntity this[long id]
        {
            get
            {
                return this._dbContext.Transactions
                    .Where(x => x.Id == id)
                    .Select(CreateViewEntity)
                    .First();
            }
        }

        private ITransactionViewEntity CreateViewEntity(TransactionEntity entity)
        {
            return new TransactionViewEntity(entity.Id,
                entity.Amount,
                this._userStorage[entity.UserFromId],
                this._userStorage[entity.UserToId],
                entity.Date);
        }
        public long Insert(ITransactionEditEntity entity)
        {
            if (entity.Id != 0)
            {
                throw new ArgumentException("entity.Id");
            }

            var insertItem = new TransactionEntity(entity.Id,
                entity.Amount,
                entity.UserIdFrom,
                entity.UserIdTo,
                entity.Date);

            using (var dbContextTransaction = this._dbContext.Database.BeginTransaction())
            {
                try
                {
                    this._dbContext.Transactions.Add(insertItem);
                    this._dbContext.SaveChanges();

                    dbContextTransaction.Commit();
                }
                catch
                {
                    dbContextTransaction.Rollback();

                    throw;
                }
            }

            return insertItem.Id;
        }

        public IQueryable<ITransactionViewEntity> Query()
        {
            return this._dbContext.Transactions.Select(CreateViewEntity).AsQueryable();
        }

        public IQueryable<ITransactionViewEntity> QueryByUser(int userId)
        {
            var fromUser = this._dbContext.Transactions.Where(x => x.UserFromId == userId);
            var toUser = this._dbContext.Transactions.Where(x => x.UserToId == userId);

            return fromUser.Concat(toUser).Select(CreateViewEntity).AsQueryable();
        } 
        #endregion
    }
}
