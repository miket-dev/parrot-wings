using ParrotWings.DataModel.Interface;
using ParrotWings.DataModel.User.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Template.Entity
{
    [Table("Template")]
    public class TemplateEntity : IEntity<int>
    {
        #region Properties
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public UserEntity Owner { get; set; }
        public int UserToId { get; set; }
        public UserEntity UserTo { get; set; }
        public decimal Amount { get; set; }
        #endregion

        #region Constructors
        /// <summary>
        /// for EF
        /// </summary>
        public TemplateEntity()
        {

        }

        public TemplateEntity(int id,
            int ownerId,
            int userToId,
            decimal amount)
        {
            this.Id = id;
            this.OwnerId = ownerId;
            this.UserToId = userToId;
            this.Amount = amount;
        }
        #endregion
    }
}
