using Shop.Domain.Enums;
using System;
using System.Threading.Tasks;

namespace Shop.Services.Interfaces
{
    public interface IOrderService
    {
        void CreateOrder(Guid customerId, Guid productId, string city, DeliveryMethod deliveryMethod, PaymentMethod paynmentMethod);

        Task SaveChangesAsync();
    }
}
