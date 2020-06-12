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

        public void CreateOrder(Guid customerId, Guid productId, long unitAmount, string city, DeliveryMethod deliveryMethod, PaynmentMethod paynmentMethod)
        {
            var order = new Order()
            {
                OrderId = Guid.NewGuid(),
                CustomerId = customerId,
                ProductId = productId,
                UnitAmount = unitAmount,
                City = city,
                DeliveryMethod = deliveryMethod,
                PaynmentMethod = paynmentMethod,
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
