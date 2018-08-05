using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.User.Entity
{
    public class UserViewEntity : IUserViewEntity
    {
        #region Properties
        public int Id { get; set; }
        public string Name { get; private set; }
        #endregion

        #region Constructors
        public UserViewEntity(int id, string name)
        {
            this.Id = id;
            this.Name = name;
        }
        #endregion
    }
}
