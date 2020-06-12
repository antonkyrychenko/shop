using Microsoft.EntityFrameworkCore;
using Shop.Domain.Models;
using Shop.Infrastructure;
using Shop.Services.Interfaces;
using System;
using System.Threading.Tasks;

namespace Shop.Services.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ShopDbContext _context;

        public CustomerService(ShopDbContext context)
        {
            _context = context;
        }

        public Customer AddCustomer(string fullName, string phoneNumber)
        {
            var customer = new Customer()
            {
                CustomerId = Guid.NewGuid(),
                FullName = fullName,
                PhoneNumber = phoneNumber
            };

            var addedEntity = _context.Customers.Add(customer);

            return addedEntity.Entity;
        }

        public Task<Customer> GetCustomerByNameAsync(string fullName)
        {
            return _context.Customers.AsNoTracking().FirstAsync(c => c.FullName == fullName);
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }
    }
}
