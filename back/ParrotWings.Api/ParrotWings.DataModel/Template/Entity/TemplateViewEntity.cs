using ParrotWings.DataModel.Interface.Template.Entity;
using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Template.Entity
{
    public class TemplateViewEntity : ITemplateViewEntity
    {
        #region Properties
        public int Id { get; set; }

        public IUserViewEntity UserTo { get; private set; }

        public decimal Amount { get; private set; }
        #endregion

        #region Constructors
        public TemplateViewEntity(int id,
            IUserViewEntity userTo,
            decimal amount)
        {
            this.Id = id;
            this.UserTo = userTo;
            this.Amount = amount;
        }
        #endregion
    }
}
