using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.User
{
    public interface IUserStorage : IReadableStorage<IUserViewEntity, int>, IEditableStorage<IUserEditEntity, int>
    {
        IUserViewEntity FindByEmailAndPassword(string email, string password);
    }
}
