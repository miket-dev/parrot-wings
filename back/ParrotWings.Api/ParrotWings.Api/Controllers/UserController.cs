using ParrotWings.Api.Models.Transaction;
using ParrotWings.Api.Models.User;
using ParrotWings.Api.Utils;
using ParrotWings.DataModel.Interface.Transaction;
using ParrotWings.DataModel.Interface.User;
using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ParrotWings.Api.Controllers
{
    public class UserController : ApiController
    {
        #region Fields
        private IUserStorage _userStorage;
        private ITransactionStorage _transactionStorage;
        private PasswordHasher _passwordHasher;
        #endregion

        #region Constructors
        public UserController(IUserStorage userStorage, ITransactionStorage transactionStorage, PasswordHasher passwordHasher)
        {
            this._userStorage = userStorage;
            this._transactionStorage = transactionStorage;
            this._passwordHasher = passwordHasher;
        }
        #endregion

        #region Methods
        [HttpPost]
        [Route("api/user/register")]
        public UserViewItem Register([FromBody] UserEditItem user)
        {
            user.Password = this._passwordHasher.Hash(user.Password);

            var resultId = this._userStorage.Insert(user);
            //initial bonus
            this._transactionStorage.Insert(new TransactionEditItem(0, 500, 1, resultId, DateTime.Now));

            return new UserViewItem(this._userStorage[resultId]);
        }

        [HttpPost]
        [Route("api/user/login")]
        public UserViewItem Login([FromBody] UserEditItem user)
        {
            var passwordHash = this._passwordHasher.Hash(user.Password);
            var concreteUser = this._userStorage.FindByEmailAndPassword(user.Email, passwordHash);

            return new UserViewItem(concreteUser);
        }

        [HttpGet]
        [Route("api/user/users")]
        public IEnumerable<UserViewItem> Users(int currentUser)
        {
            return this._userStorage.Query()
                .Where(x => x.Id != currentUser)
                .Select(x => new UserViewItem(x)).ToList();
        }
        #endregion
    }
}
