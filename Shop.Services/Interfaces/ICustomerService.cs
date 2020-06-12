using Shop.Domain.Models;
using System;
using System.Threading.Tasks;

namespace Shop.Services.Interfaces
{
    public interface ICustomerService
    {
        Customer AddCustomer(string fullName, string phoneNumber);

        Task<Customer> GetCustomerByNameAsync(string fullName);

        Task SaveChangesAsync();
    }
}
