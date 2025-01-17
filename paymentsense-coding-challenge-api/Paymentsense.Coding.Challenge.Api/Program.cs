using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace Paymentsense.Coding.Challenge.Api
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseUrls("http://*:5000", "https://*:5001");
                    webBuilder.UseStartup<Startup>();
                });
    }
}
