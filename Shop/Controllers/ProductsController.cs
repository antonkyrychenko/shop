using Microsoft.AspNetCore.Mvc;
using Shop.Domain.Models;
using Shop.Services.Interfaces;
using Shop.WebApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductsController(IProductService productService)
        {
            this._productService = productService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _productService.GetProducts();

            return Ok(new ResponseObject<List<Product>>(products));
        }
    }
}