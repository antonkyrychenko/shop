using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Shop.Persistence.Seeders
{
    public interface IDbContextSeeder<in T> where T : DbContext
    {
        Task SeedAsync(T context);
    }
}
