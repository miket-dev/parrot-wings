using ParrotWings.Api.Models.Template;
using ParrotWings.DataModel.Interface.Template;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ParrotWings.Api.Controllers
{
    public class TemplateController : ApiController
    {
        #region Fields
        private ITemplateStorage _templateStorage;
        #endregion

        #region Constructors
        public TemplateController(ITemplateStorage templateStorage)
        {
            this._templateStorage = templateStorage;
        }
        #endregion

        #region Methods
        [HttpPost]
        [Route("api/template/template")]
        public TemplateViewItem Template([FromBody] TemplateEditItem editItem)
        {
            var resultId = this._templateStorage.Insert(editItem);

            return new TemplateViewItem(this._templateStorage[resultId]);
        }

        [HttpGet]
        [Route("api/template/template")]
        public IEnumerable<TemplateViewItem> Template(int userId)
        {
            return this._templateStorage.QueryByUser(userId)
                .Select(x => new TemplateViewItem(x)).ToList();
        }
        #endregion
    }
}
