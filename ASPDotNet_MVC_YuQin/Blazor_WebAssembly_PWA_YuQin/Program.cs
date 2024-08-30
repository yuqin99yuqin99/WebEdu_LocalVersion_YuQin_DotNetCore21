using Blazor_WebAssembly_PWA_YuQin.Model;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

namespace Blazor_WebAssembly_PWA_YuQin
{
    public class Program
    {
        public static async Task Main(String[] args)
        {
            
            //WebAssemblyHostBuilder webAssemblyHostBuilder = new WebAssemblyHostBuilder(args);
            WebAssemblyHostBuilder webAssemblyHostBuilder = WebAssemblyHostBuilder.CreateDefault(args);
            webAssemblyHostBuilder.RootComponents.Add<App>("#app");//App.razor: The root component of the app that sets up client-side routing using the Router component. The Router component intercepts browser navigation and renders the page that matches the requested address.The App component is specified as the div DOM element with an id of app (<div id="app">Loading...</div> in wwwroot/index.html) to the root component collection (builder.RootComponents.Add<App>("#app")).
            webAssemblyHostBuilder.RootComponents.Add<HeadOutlet>("head::after");
            //Services are added and configured
            /**
            webAssemblyHostBuilder.Services.AddScoped(
                delegate (IServiceProvider iServiceProvider) {
                    return new HttpClient { BaseAddress = new Uri(webAssemblyHostBuilder.HostEnvironment.BaseAddress) };
                }
                );
            **/
            webAssemblyHostBuilder.Services.AddTransient(delegate (IServiceProvider iServiceProvider) { return new HttpClient { BaseAddress = new Uri("https://localhost:5001") }; });
            webAssemblyHostBuilder.Services.AddSingleton<StudentRepository>();
            WebAssemblyHost webAssemblyHost = webAssemblyHostBuilder.Build();
            await webAssemblyHost.RunAsync();
        }
    }
}
