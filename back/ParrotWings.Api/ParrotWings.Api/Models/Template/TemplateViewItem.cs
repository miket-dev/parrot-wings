using Newtonsoft.Json;
using ParrotWings.Api.Models.User;
using ParrotWings.DataModel.Interface.Template.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParrotWings.Api.Models.Template
{
    public class TemplateViewItem
    {
        #region Properties
        [JsonProperty("id")]
        public int Id { get; private set; }
        [JsonProperty("userTo")]
        public UserViewItem UserTo { get; private set; }
        [JsonProperty("amount")]
        public decimal Amount { get; private set; }
        #endregion

        #region Constructors
        public TemplateViewItem(ITemplateViewEntity viewEntity)
        {
            this.Id = viewEntity.Id;
            this.UserTo = new UserViewItem(viewEntity.UserTo);
            this.Amount = viewEntity.Amount;
        }
        #endregion
    }
}