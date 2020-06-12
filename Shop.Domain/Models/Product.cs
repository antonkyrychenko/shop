using System;

namespace Shop.Domain.Models
{
    public class Product
    {
        public Guid ProductId{ get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public long UnitAmount { get; set; }

        public string Image { get; set; }
    }
}
