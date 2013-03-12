using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Demo.WebApi.IISHosted.Models
{
    public class Person
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        //[Required]
        [Range(0,99)]
        public int Age { get; set; }

    }
}