using Ninject.Modules;
using ParrotWings.DataModel;
using ParrotWings.DataModel.Interface.Template;
using ParrotWings.DataModel.Interface.Transaction;
using ParrotWings.DataModel.Interface.User;
using ParrotWings.DataModel.Template;
using ParrotWings.DataModel.Transaction;
using ParrotWings.DataModel.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModelAccess
{
    public class DataModelRegistration : NinjectModule
    {
        public override void Load()
        {
            Bind<ParrotWingsDbContext>().ToSelf();
            Bind<IUserStorage>().To<UserStorage>();
            Bind<ITransactionStorage>().To<TransactionStorage>();
            Bind<ITemplateStorage>().To<TemplateStorage>();
        }
    }
}
