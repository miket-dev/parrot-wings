using ParrotWings.DataModel.Interface.Template.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Interface.Template
{
    public interface ITemplateStorage : IReadableStorage<ITemplateViewEntity, int>, IEditableStorage<ITemplateEditEntity, int>
    {
        IQueryable<ITemplateViewEntity> QueryByUser(int userId);
    }
}
