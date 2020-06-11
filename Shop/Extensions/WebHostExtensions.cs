using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shop.Infrastructure;
using Shop.Persistence.Seeders;
using System.Threading.Tasks;
namespace Shop.WebApi.Extensions
{
    public static class WebHostExtensions
    {
        public static async Task SeedDataAsync(this IWebHost host)
        {
            using var scope = host.Services.CreateScope();

            var services = scope.ServiceProvider;

            var shopDbContext = services.GetService<ShopDbContext>();
            await shopDbContext.Database.MigrateAsync();

            var shopDbSeeder = services.GetService<IDbContextSeeder<ShopDbContext>>();
            await shopDbSeeder.SeedAsync(shopDbContext);
        }
    }
}
