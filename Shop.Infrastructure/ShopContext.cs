﻿using Microsoft.EntityFrameworkCore;
using Shop.Domain.Models;

namespace Shop.Infrastructure
{
    public class ShopDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public ShopDbContext(DbContextOptions<ShopDbContext> options) : base(options) { }
    }
}
