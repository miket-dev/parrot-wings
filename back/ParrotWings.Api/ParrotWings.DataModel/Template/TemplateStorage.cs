using ParrotWings.DataModel.Interface.Template;
using ParrotWings.DataModel.Interface.Template.Entity;
using ParrotWings.DataModel.Interface.User;
using ParrotWings.DataModel.Template.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.Template
{
    public class TemplateStorage : ITemplateStorage
    {
        #region Fields
        private ParrotWingsDbContext _dbContext;
        private IUserStorage _userStorage;
        #endregion

        #region Constructors
        public TemplateStorage(ParrotWingsDbContext dbContext, IUserStorage userStorage)
        {
            this._dbContext = dbContext;
            this._userStorage = userStorage;
        }
        #endregion

        #region Methods
        public ITemplateViewEntity this[int id]
        {
            get
            {
                return this._dbContext.Templates
                    .Where(x => x.Id == id)
                    .Select(CreateViewEntity)
                    .First();
            }
        }
        private ITemplateViewEntity CreateViewEntity(TemplateEntity entity)
        {
            return new TemplateViewEntity(entity.Id,
                this._userStorage[entity.UserToId],
                entity.Amount);
        }

        private TemplateEntity CreateEntity(ITemplateEditEntity editEntity)
        {
            return new TemplateEntity(editEntity.Id,
                            editEntity.UserIdFrom,
                            editEntity.UserIdTo,
                            editEntity.Amount);
        }
        public int Insert(ITemplateEditEntity entity)
        {
            if (entity.Id != 0)
            {
                throw new ArgumentException("entity.Id");
            }

            var insertItem = this.CreateEntity(entity);

            this._dbContext.Templates.Add(insertItem);
            this._dbContext.SaveChanges();

            return insertItem.Id;
        }

        public IQueryable<ITemplateViewEntity> Query()
        {
            throw new NotImplementedException("Use QueryByUser");
        }

        public IQueryable<ITemplateViewEntity> QueryByUser(int userId)
        {
            return this._dbContext.Templates.Where(x => x.OwnerId == userId)
                .Select(CreateViewEntity).AsQueryable();
        }

        public int Update(ITemplateEditEntity entity)
        {
            var editItem = this.CreateEntity(entity);

            this._dbContext.Entry(editItem).State = EntityState.Modified;
            this._dbContext.SaveChanges();

            return editItem.Id;
        }
        #endregion
    }
}
