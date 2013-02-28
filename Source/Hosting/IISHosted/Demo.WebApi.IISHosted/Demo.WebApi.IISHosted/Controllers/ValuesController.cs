using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Demo.WebApi.IISHosted.Controllers
{
    public class AwesomeController : ApiController
    {
        public string GetStatus()
        {
            return "Your Awesome";
        }
    }
}