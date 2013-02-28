using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.SelfHost;

namespace Demo.WebApi.SelfHosted
{
    class Program
    {
        static void Main(string[] args)
        {
            var runtime = new SelfHostRuntime();

            runtime.Host();
        }
    }

    public class SelfHostRuntime
    {
        public void Host()
        {
            var config = new HttpSelfHostConfiguration("http://localhost:8888");
            ConfigureRoutes(config);

            using (var server = new HttpSelfHostServer(config))
            {
                Console.WriteLine("Starting Web Api Host");
                Console.WriteLine("Listening @ {0}", config.BaseAddress);
                server.OpenAsync().Wait();

                Console.ReadLine();
            }
        }

        private void ConfigureRoutes(HttpSelfHostConfiguration configuration)
        {
            configuration.Routes.MapHttpRoute(
                "Api Default", "api/{controller}/{id}",
                new {id = RouteParameter.Optional});
        }
    }

    public class AwesomeController : ApiController
    {
        public string GetStatus()
        {
            return "Your Awesome";
        }
    }
}
