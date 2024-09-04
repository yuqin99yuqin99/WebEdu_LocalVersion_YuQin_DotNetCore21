using Blazor_WebAssembly_PWA_YuQin.Model;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System.IO;
using System.Net.Http.Json;
using System.Security.Cryptography.X509Certificates;
using System.Text.Json;

namespace Blazor_WebAssembly_PWA_YuQin
{
    public class ProgramJson
    {
        public String BaseAddress { get; set; } = "https://localhost:4001";
    }
    public class ProgramJsonTemp
    {
        public String BaseAddressOfClient { get; set; } = "https://localhost:4001";
        public String BaseAddressOfServer { get; set; } = "https://localhost:5001";
    }
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
            
            HttpClient httpClientTemp = new HttpClient();
            String url = webAssemblyHostBuilder.HostEnvironment.BaseAddress+"Program.json";//�ڴ���"https://localhost:4001/Program.json"
            HttpResponseMessage httpResponseMessage = await httpClientTemp.GetAsync(url);
            httpResponseMessage.EnsureSuccessStatusCode(); // ȷ����Ӧ�ɹ�
            String responseBody = await httpResponseMessage.Content.ReadAsStringAsync();
            ProgramJson programJson = JsonSerializer.Deserialize<ProgramJson>(responseBody);
            ProgramJsonTemp programJsonTemp=new ProgramJsonTemp();
            programJsonTemp.BaseAddressOfServer = "https://localhost:5010";


            //webAssemblyHostBuilder.Services.AddTransient(delegate (IServiceProvider iServiceProvider) { return new HttpClient { BaseAddress = new Uri("https://localhost:5001") }; });
            webAssemblyHostBuilder.Services.AddTransient(delegate (IServiceProvider iServiceProvider) { return new HttpClient { BaseAddress = new Uri(programJson.BaseAddress) }; }); //�ӷ���˸�Ŀ¼�µ�Program.json��ȡ׼����������URL��BaseAddress������AOT�����C#������Ӳ������ܾ����仯��BaseAddress������JIT�����Program.json�������������ܾ����仯��BaseAddress��

            webAssemblyHostBuilder.Services.AddSingleton<ProgramJsonTemp>();
            webAssemblyHostBuilder.Services.AddSingleton<ProgramJson>();
            webAssemblyHostBuilder.Services.AddSingleton<StudentRepository>();
            WebAssemblyHost webAssemblyHost = webAssemblyHostBuilder.Build();
            await webAssemblyHost.RunAsync();
        }
    }
}
