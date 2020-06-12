using Shop.Domain.Enums;
using System;
using System.Threading.Tasks;

namespace Shop.Services.Interfaces
{
    public interface IOrderService
    {
        void CreateOrder(Guid customerId, Guid productId, long unitAmount, string city, DeliveryMethod deliveryMethod, PaynmentMethod paynmentMethod);

        Task SaveChangesAsync();
    }
}
