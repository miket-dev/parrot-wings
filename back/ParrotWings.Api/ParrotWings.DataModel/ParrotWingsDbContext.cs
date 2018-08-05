using ParrotWings.DataModel.Template.Entity;
using ParrotWings.DataModel.Transaction.Entity;
using ParrotWings.DataModel.User.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel
{
    public class ParrotWingsDbContext : DbContext
    {
        #region Properties
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<TemplateEntity> Templates { get; set; }
        public DbSet<TransactionEntity> Transactions { get; set; }
        #endregion

        #region Constructors
        public ParrotWingsDbContext()
            : base("PrimaryConnection")
        {

        }
        #endregion
    }
}
