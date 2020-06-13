using Shop.Domain.Enums;
using Shop.Domain.Models;
using Shop.Infrastructure;
using Shop.Services.Interfaces;
using System;
using System.Threading.Tasks;

namespace Shop.Services.Services
{
    public class OrderService : IOrderService
    {
        private readonly ShopDbContext _context;

        public OrderService(ShopDbContext context)
        {
            _context = context;
        }

        public void CreateOrder(Guid customerId, Guid productId, string city, DeliveryMethod deliveryMethod, PaymentMethod paymentMethod)
        {
            var order = new Order()
            {
                OrderId = Guid.NewGuid(),
                CustomerId = customerId,
                ProductId = productId,
                City = city,
                DeliveryMethod = deliveryMethod,
                PaymentMethod = paymentMethod,
                SoldTime = DateTime.Now
            };

            _context.Orders.Add(order);
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }
    }
}
