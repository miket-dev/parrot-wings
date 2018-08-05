using ParrotWings.DataModel.Interface.Transaction.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.Transaction
{
    public interface ITransactionStorage : IReadableStorage<ITransactionViewEntity, long>, IWriteableStorage<ITransactionEditEntity, long>
    {
        IQueryable<ITransactionViewEntity> QueryByUser(int userId);
    }
}
