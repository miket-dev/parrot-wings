using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.User.Entity
{
    public interface IUserViewEntity : IViewEntity<int>
    {
        string Name { get; }
    }
}
