using Shop.Domain.Models;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ShopProduct = Shop.Domain.Models.Product;

namespace Shop.Persistence.Seeders
{
    public class StripePaymentSystemSeeder : IPaymentSystemSeeder
    {
        public async Task SeedAsync(IEnumerable<ShopProduct> products)
        {
            if (!await IsEmptyAsync())
            {
                return;
            }

            await SeedDataAsync(products, new ProductService(), product => new ProductCreateOptions { Id = product.ProductId.ToString(), Name = product.Name });
            await SeedDataAsync(products, new PriceService(), product => new PriceCreateOptions { Product = product.ProductId.ToString(), Currency = "usd", UnitAmount = product.UnitAmount  });
        }

        private async Task<bool> IsEmptyAsync()
        {
            var productService = new ProductService();
            var products = await productService.ListAsync(new ProductListOptions()
            {
                Limit = 1
            });

            return products.Data.Count == 0 ? true : false;
        }

        private Task SeedDataAsync<TEntity, TOptions>(IEnumerable<ShopProduct> products, ICreatable<TEntity, TOptions> service, Func<ShopProduct, TOptions> optionCreator) where TEntity : IStripeEntity where TOptions : BaseOptions, new()
        {
            var tasks = products.Select(product =>
            {
                var options = optionCreator(product);

                return service.CreateAsync(options);
            });

            return Task.WhenAll(tasks);
        }
    }
}
