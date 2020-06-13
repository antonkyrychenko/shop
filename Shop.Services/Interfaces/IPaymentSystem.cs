using System;
using System.Threading.Tasks;

namespace Shop.Services.Interfaces
{
    public interface IPaymentSystem
    {
        Task<string> CreatePaymentIntentAsync(Guid productId, string successUrl, string cancelUrl);
    }
}
