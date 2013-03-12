using System.Web.Http;
using Demo.WebApi.IISHosted.Models;

namespace Demo.WebApi.IISHosted.Controllers
{
    public class AwesomeController : ApiController
    {
        [HttpGet]
        public string Status()
        {
            return "Your Awesome";
        }
        
        [HttpPost]
        public string Status(string status)
        {
            return string.Format("Status of {0} was posted", status);

        }

        [HttpPost]
        public void ModelBinding(Person person)
        {
            var f = person.FirstName;
        }

        [HttpPut]
        [ActionName("Status")]
        public string Status_Put(string status)
        {
            return string.Format("Status of {0} was put", status);
        }

        public string DeleteStatus(string status)
        {
            return string.Format("Status of {0} was Deleted", status);
        }
    }

}