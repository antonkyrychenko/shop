using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shop.Domain.Models;
using Shop.Infrastructure;
using Shop.Persistence.Seeders;
using System;
using System.Threading.Tasks;
namespace Shop.WebApi.Extensions
{
    public static class WebHostExtensions
    {
        public static async Task SeedDataAsync(this IWebHost host)
        {
            using var scope = host.Services.CreateScope();

            var services = scope.ServiceProvider;

            await SeedDatabaseProducts(services);
            await SeedPaymentSystemProducts(services);
        }

        private static async Task SeedDatabaseProducts(IServiceProvider services)
        {
            var shopDbContext = services.GetService<ShopDbContext>();
            await shopDbContext.Database.MigrateAsync();

            var shopDbSeeder = services.GetService<IDbContextSeeder<ShopDbContext>>();
            await shopDbSeeder.SeedAsync(shopDbContext);
        }

        private static async Task SeedPaymentSystemProducts(IServiceProvider services)
        {
            var shopDbContext = services.GetService<ShopDbContext>();
            var products = await shopDbContext.Products.ToListAsync();

            var paymentSystemSeeder = services.GetService<IPaymentSystemSeeder>();
            await paymentSystemSeeder.SeedAsync(products);
        }
    }
}
