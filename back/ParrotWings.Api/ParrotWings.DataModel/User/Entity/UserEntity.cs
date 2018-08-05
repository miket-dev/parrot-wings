using ParrotWings.DataModel.Interface;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParrotWings.DataModel.User.Entity
{
    [Table("User")]
    public class UserEntity : IEntity<int>
    {
        #region Properties
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        #endregion

        #region Constructors
        /// <summary>
        /// for EF
        /// </summary>
        public UserEntity()
        {

        }

        public UserEntity(int id,
            string email,
            string password,
            string name)
        {
            #region Validation
            if (string.IsNullOrEmpty(email))
            {
                throw new ArgumentNullException("email");
            }

            if (string.IsNullOrEmpty(password))
            {
                throw new ArgumentNullException("password");
            }

            if (string.IsNullOrEmpty("name"))
            {
                throw new ArgumentNullException("name");
            }
            #endregion

            this.Id = id;
            this.Email = email;
            this.Password = password;
            this.Name = name;
        }
        #endregion
    }
}
