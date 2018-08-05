using Newtonsoft.Json;
using ParrotWings.DataModel.Interface.User.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ParrotWings.Api.Models.User
{
    public class UserEditItem : IUserEditEntity
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("email")]
        [EmailAddress]
        public string Email { get; set; }
        [JsonProperty("password")]
        public string Password { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}