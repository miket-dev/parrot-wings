using Newtonsoft.Json;
using Ninject;
using Ninject.Web.WebApi;
using Ninject.Web.WebApi.Filter;
using ParrotWings.Api.Utils;
using ParrotWings.DataModelAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;
using System.Web.Routing;

namespace ParrotWings.Api
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            this.ConfigureNinject();
        }

        private void ConfigureNinject()
        {
            var kernel = new StandardKernel();

            kernel.Bind<PasswordHasher>().ToSelf();
            kernel.Load(new DataModelRegistration());
            GlobalConfiguration.Configuration.DependencyResolver = new NinjectDependencyResolver(kernel);
        }
    }
}
