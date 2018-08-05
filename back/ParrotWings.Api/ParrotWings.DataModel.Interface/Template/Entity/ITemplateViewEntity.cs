using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.Template.Entity
{
    public interface ITemplateViewEntity : IViewEntity<int>
    {
        IUserViewEntity UserTo { get; }
        decimal Amount { get; }
    }
}
