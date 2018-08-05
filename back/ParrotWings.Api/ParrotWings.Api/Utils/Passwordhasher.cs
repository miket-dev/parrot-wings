using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace ParrotWings.Api.Utils
{
    public class PasswordHasher
    {
        #region Fields
        private SHA256Managed _sha256;
        #endregion

        #region Constructors
        public PasswordHasher()
        {
            this._sha256 = new SHA256Managed();
        }
        #endregion

        #region Methods
        public string Hash(string password)
        {
            var data = Encoding.UTF8.GetBytes(password);
            data = this._sha256.ComputeHash(data);
            return Encoding.UTF8.GetString(data);
        }
        #endregion
    }
}