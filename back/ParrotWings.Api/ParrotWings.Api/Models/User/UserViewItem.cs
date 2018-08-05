using Newtonsoft.Json;
using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParrotWings.Api.Models.User
{
    public class UserViewItem
    {
        #region Properties
        [JsonProperty("id")]
        public int Id { get; private set; }
        [JsonProperty("name")]
        public string Name { get; private set; }
        #endregion

        #region Constructors
        public UserViewItem(IUserViewEntity viewEntity)
        {
            this.Id = viewEntity.Id;
            this.Name = viewEntity.Name;
        }
        #endregion
    }
}