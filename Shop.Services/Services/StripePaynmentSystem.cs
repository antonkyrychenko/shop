using Shop.Services.Interfaces;
using Stripe.Checkout;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Stripe;
using System.Linq;

namespace Shop.Services.Services
{
    public class StripePaynmentSystem : IPaymentSystem
    {
        public async Task<string> CreatePaymentIntentAsync(Guid productId, string successUrl, string cancelUrl)
        {
            var priceService = new PriceService();
            var price = priceService.List(new PriceListOptions()
            {
                Product = productId.ToString()
            }).First();

            var options = new PaymentIntentCreateOptions
            {
                Amount = price.UnitAmount,
                Currency = "usd",
                PaymentMethodTypes = new List<string>
                  {
                    "card",
                  },
            };
            var service = new PaymentIntentService();
            var payment = await service.CreateAsync(options);

            return payment.ClientSecret;
        }

    }
}
