using Shop.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.WebApi.Models
{
    public class OrderCreationOptions
    {
        public string PhoneNumber { get; set; }

        public string CustomerName { get; set; }

        public Guid ProductId { get; set; }

        public long UnitAmount { get; set; }

        public string City { get; set; }

        public DeliveryMethod DeliveryMethod { get; set; }

        public PaynmentMethod PaynmentMethod { get; set; }


    }
}
