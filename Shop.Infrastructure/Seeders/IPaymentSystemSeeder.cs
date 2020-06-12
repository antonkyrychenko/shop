using Shop.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shop.Persistence.Seeders
{
    public interface IPaymentSystemSeeder
    {
        Task SeedAsync(IEnumerable<Product> products);
    }
}
