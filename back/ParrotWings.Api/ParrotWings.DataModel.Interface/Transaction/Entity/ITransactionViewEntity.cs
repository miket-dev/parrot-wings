using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.Transaction.Entity
{
    public interface ITransactionViewEntity : IViewEntity<long>
    {
        decimal Amount { get; }
        IUserViewEntity UserFrom { get; }
        IUserViewEntity UserTo { get; }
        DateTime Date { get; }
    }
}
