using System;

namespace Shop.Domain.Models
{
    public class Customer
    {
        public Guid CustomerId { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }
    }
}
