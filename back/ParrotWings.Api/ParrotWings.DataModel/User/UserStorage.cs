using ParrotWings.DataModel.Interface.User;
using ParrotWings.DataModel.Interface.User.Entity;
using ParrotWings.DataModel.User.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.User
{
    public class UserStorage : IUserStorage
    {
        #region Fields
        private ParrotWingsDbContext _dbContext;

        #endregion

        #region Constructors
        public UserStorage(ParrotWingsDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        #endregion

        #region Methods
        public IUserViewEntity this[int id]
        {
            get
            {
                return this._dbContext.Users
                    .Where(x => x.Id == id)
                    .Select(CreateViewEntity)
                    .First();
            }
        }
        private UserEntity CreateEntity(IUserEditEntity editEntity)
        {
            var insertItem = new UserEntity(editEntity.Id,
                editEntity.Email,
                editEntity.Password,
                editEntity.Name);

            return insertItem;
        }

        private IUserViewEntity CreateViewEntity(UserEntity entity)
        {
            return new UserViewEntity(entity.Id, entity.Name);
        }

        public int Insert(IUserEditEntity entity)
        {
            if (entity.Id != 0)
            {
                throw new ArgumentException("entity.Id");
            }

            var insertItem = this.CreateEntity(entity);

            this._dbContext.Users.Add(insertItem);
            this._dbContext.SaveChanges();

            return insertItem.Id;
        }

        public IQueryable<IUserViewEntity> Query()
        {
            return this._dbContext.Users.Select(CreateViewEntity).AsQueryable();
        }

        public int Update(IUserEditEntity entity)
        {
            var editItem = this.CreateEntity(entity);

            this._dbContext.Entry(editItem).State = EntityState.Modified;
            this._dbContext.SaveChanges();

            return editItem.Id;
        }

        public IUserViewEntity FindByEmailAndPassword(string email, string password)
        {
            return this._dbContext.Users.Where(x => x.Email == email && x.Password == password)
                .Select(CreateViewEntity)
                .First();
        }
        #endregion
    }
}
