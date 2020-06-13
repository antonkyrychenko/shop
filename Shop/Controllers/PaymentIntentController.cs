using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shop.Services.Interfaces;
using Shop.WebApi.Models;

namespace Shop.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentIntentController : ControllerBase
    {
        private readonly IPaymentSystem _paymentSystem;

        public PaymentIntentController(IPaymentSystem paymentSystem)
        {
            _paymentSystem = paymentSystem;
        }

        [HttpPost("")]
        public async Task<IActionResult> CreatePaymentIntent([FromQuery] Guid productId, [FromQuery] string successUrl, [FromQuery] string cancelUrl)
        {
            var clientSecret = await _paymentSystem.CreatePaymentIntentAsync(productId, successUrl, cancelUrl);

            return Ok(new ResponseObject<string>(clientSecret));
        }
    }
}