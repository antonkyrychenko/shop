using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shop.Services.Interfaces;

namespace Shop.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        private readonly IPaymentSystem _paymentSystem;

        public CheckoutController(IPaymentSystem paymentSystem)
        {
            _paymentSystem = paymentSystem;
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateSession([FromQuery] Guid productId, [FromQuery] string successUrl, [FromQuery] string cancelUrl)
        {
            var sessionId = await _paymentSystem.CreateCheckoutSessionAsync(productId, successUrl, cancelUrl);

            return Ok(sessionId);
        }
    }
}