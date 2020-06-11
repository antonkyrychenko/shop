using System;

namespace Shop.Domain.Models
{
    public class Order
    {
        public Guid CustomerId { get; set; }

        public Guid ProductId { get; set; }

        public int Price { get; set; }

        public DateTime SoldTime { get; set; }
    }
}
