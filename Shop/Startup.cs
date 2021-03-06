using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Converters;
using Shop.Infrastructure;
using Shop.Persistence.Seeders;
using Shop.Services.Interfaces;
using Shop.Services.Services;

namespace Shop
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IDbContextSeeder<ShopDbContext>, ShopDbContextSeeder>();          
            services.AddTransient<IPaymentSystemSeeder, StripePaymentSystemSeeder>();

            services.AddTransient<IProductService, ProductService>();
            services.AddTransient<IPaymentSystem, StripePaynmentSystem>();

            services.AddTransient<ICustomerService, CustomerService>();
            services.AddTransient<IOrderService, OrderService>();

            services.AddDbContext<ShopDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Shop")));

            services.AddCors(options => options
                .AddDefaultPolicy(builder => builder
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin()));

            services.AddControllersWithViews()
                    .AddNewtonsoftJson(opt => opt.SerializerSettings.Converters.Add(new StringEnumConverter()));
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            // Set Stripe secret key
            Stripe.StripeConfiguration.ApiKey = Configuration.GetSection("Stripe:Secret").Value;
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseCors();

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
