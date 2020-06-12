using System;
using System.Threading.Tasks;

namespace Shop.Services.Interfaces
{
    public interface IPaymentSystem
    {
        Task<string> CreateCheckoutSessionAsync(Guid productId, string successUrl, string cancelUrl);
    }
}
