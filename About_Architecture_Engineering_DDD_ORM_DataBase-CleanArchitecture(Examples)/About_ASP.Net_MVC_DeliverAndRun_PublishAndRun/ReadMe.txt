交付（发布）在服务端Web服务器的ASP.Net的MVC（视图V/控制C/模型M）来说，主要涉及如下：
•	“（需要下载到客户端浏览器，客户端浏览器中，运行成为Web Assembly宿主宿客的）视图V之一”：本书教育软件案例的主导视图V。选用“一个Blazor WebAssembly项目”的.html/.svg/.x3d/.css/.js/.razor/.razor.cs文件，进行代码开发。项目所有的.html/.svg/.x3d/.css/.js文件是JIT编译、所有的.razor/.razor.cs文件AOT编译生成一个.dll/.wasm文件（调用Microsoft.AspNetCore.Components.ComponentBase对象类型树枝）（.cs文件与.razor.cs文件的C#语言代码，两者基本相似，关键词、名称空间的声明定义，两者则是稍有不同。必须“C#语言语法”作为主导，“C#语言语法”映射“razor语言语法”作为辅助，两者互相比较理解）。优缺点主要如下：
(1)	.razor.cs文件的SPA单页应用，可以作为功能强大的主导框架（一次性耗时下载到客户端但可PWA）。.html/.svg/.x3d/.css/.js文件的MPA多页应用，可以作为功能小巧的辅助填充（分批性省时下载到客户端无需PWA）。
(2)	便于统一C#编程处理.docx/.xslx/.pptx等等各种日常文件。
(3)	不便当前的搜索引擎收录（但是可以他方引流解决）。
(4)	功能兼容超越下述的“视图V之二”、“视图V之三”。
(5)	“视图V”C#编程思维、“控制C/模型M”C#编程思维，即，“MVC”统一C#编程思维。
•	“（需要下载到客户端浏览器，客户端浏览器中，运行成为Chrome宿主宿客的）视图V之二”：本书教育软件案例的辅助视图V。选用“一个ASP.Net MVC项目”的wwwroot文件夹的JIT编译的.html/.svg/.x3d/.css/.js文件，进行代码开发。此时，“视图V”JS编程思维、“控制C/模型M”C#编程思维，即，“MVC”无法统一C#编程思维。
•	“（服务端Web服务器中，JIT转换下载成为客户端浏览器中的.html/.svg/.x3d/.css/.js文件，运行成为Chrome宿主宿客的）视图V之三”：本书教育软件案例的辅助视图V。选用“一个ASP.Net MVC项目”的Views文件夹的JIT编译的.cshtml文件，进行代码开发。此时，“视图V”C#编程思维、“控制C/模型M”C#编程思维，即，“MVC”统一C#编程思维。
•	“（无需下载到客户端浏览器，服务端Web服务器中，运行成为.Net对象类型宿主宿客的）控制C” ：本书教育软件案例的控制C。选用“一个ASP.Net MVC项目”的Controllers文件夹的.cs文件，进行代码开发。控制C调用Microsoft.AspNetCore.Mvc.ControllerBase对象类型树枝。Microsoft.AspNetCore.Mvc.ControllerBase→Microsoft.AspNetCore.Mvc.Controller是父子继承拓展结构。
•	“（无需下载到客户端浏览器，服务端Web服务器中，运行成为.Net对象类型宿主宿客的）模型M”：本书教育软件案例的模型M。选用“一个ASP.Net MVC项目”的Models文件夹的.cs文件，进行代码开发。模型M调用System.Object对象类型树枝，可能还涉及Microsoft.EntityFrameworkCore名称空间的众多对象类型（以便实现ORM）。