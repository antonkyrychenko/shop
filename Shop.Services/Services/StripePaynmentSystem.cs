using Shop.Services.Interfaces;
using Stripe.Checkout;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shop.Services.Services
{
    public class StripePaynmentSystem : IPaymentSystem
    {
        public async Task<string> CreateCheckoutSessionAsync(Guid productId, string successUrl, string cancelUrl)
        {
            var options = new SessionCreateOptions
            {
                PaymentMethodTypes = new List<string> { "card", },
                LineItems = new List<SessionLineItemOptions> {
                     new SessionLineItemOptions {
                        Price = productId.ToString(),
                        Quantity = 1,
                     },
                },
                Mode = "payment",
                SuccessUrl = successUrl,
                CancelUrl = cancelUrl,
            };

            var service = new SessionService();
            var session = await service.CreateAsync(options);

            return session.Id;
        }

    }
}
