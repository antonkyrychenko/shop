using Microsoft.EntityFrameworkCore;
using Shop.Domain.Models;
using Shop.Infrastructure;
using Shop.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shop.Services.Services
{
    public class ProductService : IProductService
    {
        private readonly ShopDbContext _context;

        public ProductService(ShopDbContext context)
        {
            _context = context;
        }

        public Task<List<Product>> GetProductsAsync()
        {
            return _context.Products.ToListAsync();
        }
    }
}
