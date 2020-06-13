using Shop.Domain.Enums;
using System;

namespace Shop.WebApi.Models
{
    public class OrderCreationOptions
    {
        public string PhoneNumber { get; set; }

        public string CustomerName { get; set; }

        public Guid ProductId { get; set; }

        public string City { get; set; }

        public DeliveryMethod DeliveryMethod { get; set; }

        public PaymentMethod PaymentMethod { get; set; }
    }
}
