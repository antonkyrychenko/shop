using Shop.Domain.Enums;
using System;

namespace Shop.Domain.Models
{
    public class Order
    {
        public Guid OrderId { get; set; }

        public Guid CustomerId { get; set; }

        public Guid ProductId { get; set; }

        public string City { get; set; }

        public DeliveryMethod DeliveryMethod { get; set; }

        public PaymentMethod PaymentMethod { get; set; }

        public DateTime SoldTime { get; set; }

        public Product Product { get; set; }

        public Customer Customer { get; set; }
    }
}
