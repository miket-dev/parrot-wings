using Newtonsoft.Json;
using ParrotWings.DataModel.Interface.Template.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParrotWings.Api.Models.Template
{
    public class TemplateEditItem : ITemplateEditEntity
    {
        #region Properties
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("userIdFrom")]
        public int UserIdFrom { get; set; }
        [JsonProperty("userIdTo")]
        public int UserIdTo { get; set; }
        [JsonProperty("amount")]
        public decimal Amount { get; set; } 
        #endregion
    }
}