using ParrotWings.DataModel.Interface.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.Template.Entity
{
    public interface ITemplateEditEntity : IEditEntity<int>
    {
        int UserIdFrom { get; set; }
        int UserIdTo { get; set; }
        decimal Amount { get; set; }
    }
}
