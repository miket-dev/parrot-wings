using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.User.Entity
{
    public interface IUserEditEntity : IEditEntity<int>
    {
        string Email { get; set; }
        string Password { get; set; }
        string Name { get; set; }
    }
}
