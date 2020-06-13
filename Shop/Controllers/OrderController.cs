using Microsoft.AspNetCore.Mvc;
using Shop.Domain.Enums;
using Shop.Domain.Models;
using Shop.Services.Interfaces;
using Shop.WebApi.Models;
using System;
using System.Threading.Tasks;

namespace Shop.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly IOrderService _orderService;

        public OrderController(ICustomerService customerService, IOrderService orderService)
        {
            _customerService = customerService;
            _orderService = orderService;
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateOrder([FromBody] OrderCreationOptions order)
        {
            var customer = await _customerService.GetCustomerByNameAsync(order.CustomerName);
            if(customer == null)
            {
                customer = _customerService.AddCustomer(order.CustomerName, order.PhoneNumber);
            }

            _orderService.CreateOrder(customer.CustomerId, order.ProductId, order.City, order.DeliveryMethod, order.PaymentMethod);
            await _orderService.SaveChangesAsync();

            return Ok(new ResponseObject<object>());
        }
    }
}