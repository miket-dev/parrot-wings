using ParrotWings.DataModel.Interface.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.Transaction.Entity
{
    public interface ITransactionEditEntity : IEditEntity<long>
    {
        decimal Amount { get; set; }
        int UserIdFrom { get; set; }
        int UserIdTo { get; set; }
        DateTime Date { get; set; }
    }
}
