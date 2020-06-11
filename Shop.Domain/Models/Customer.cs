using System;

namespace Shop.Domain.Models
{
    public class Customer
    {
        public Guid CustomerId { get; set; }

        public string FirstName { get; set; }

        public string SecondName { get; set; }
    }
}
