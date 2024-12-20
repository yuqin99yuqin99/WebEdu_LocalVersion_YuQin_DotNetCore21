﻿using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.DataProtection;
using System.Net.Http.Headers;
using Azure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Configuration;
using Microsoft.Extensions.Configuration;

namespace ASPDotNet_MVC_YuQin.Controllers.RESTful.Qwen
{
    public class QWenController : ControllerBase
    {
        //通过API使用通义千问 https://help.aliyun.com/zh/dashscope/developer-reference/use-qwen-by-api?spm=a2c4g.11186623.0.0.33b0f97eu68Rxm
        //开通DashScope 模型服务灵积 https://dashscope.console.aliyun.com/overview
        //前往模型广场，选择模型 https://bailian.console.aliyun.com/#/model-market.

        //DashScope中，前往模型广场，选择模型 https://help.aliyun.com/zh/dashscope/developer-reference/model-square/?disableWebsiteRedirect=true //在此选择如下模型为例：通义千问→大语言模型（面向字符生成）。通义千问→通义万相则是面向图像生成。通义千问→通义千问Audio则是面向音频生成。
        private readonly IWebHostEnvironment _iWebHostEnvironment;
        private readonly IConfiguration _iConfiguration;
        private readonly static String _RequestUri = "https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation"; //通过DashScope的HTTP方式进行调用，需要配置的完整访问endpoint。POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation
        

        private readonly static String _Model = "qwen-max";

        //DashScope中，生成API-KEY. https://dashscope.console.aliyun.com/apiKey //在此如下apikey为例。请替换为您的阿里云密钥信息。https://account.aliyun.com/login/login.htm登录申请。https://help.aliyun.com/zh/dashscope/developer-reference/acquisition-and-configuration-of-api-key?spm=a2c4g.11186623.0.0.4df8694e30GuAN申请。

        private  static String _ApiKey = "sk-****79316d7b4f3b85014154de41a962"; //敏感数据（在此*号化了，禁止硬编码在C#源码之中）。开发时必须选用“Secret Manager”的secrets.json文件配置。交付时必须选用软件的appsettings.json文件配置。

        public QWenController(IWebHostEnvironment iWebHostEnvironment, IConfiguration iConfiguration)
        {
            _iWebHostEnvironment = iWebHostEnvironment;
            _iConfiguration = iConfiguration;
            if (iWebHostEnvironment.EnvironmentName=="Development") {
                //_ApiKey = ConfigurationManager.AppSettings["ApiKey"];
                _ApiKey = _iConfiguration["ApiKey"]; //从开发时的本项目的“Secret Manager”的secrets.json文件获取ApiKey。
               // Console.Write(iWebHostEnvironment.EnvironmentName+ _ApiKey);
            }
            else{
                //_ApiKey = ConfigurationManager.AppSettings["ApiKey"];
                _ApiKey = _iConfiguration["ApiKey"]; //从交付时的软件的appsettings.json文件获取ApiKey。
              //  Console.Write(iWebHostEnvironment.EnvironmentName + _ApiKey);
            }
        }
        public async Task<String> Index(String queryString)
        {
            using (HttpClient httpClient = new HttpClient())
            {
                // 创建模型类
                QianWenRequest qWenRequest = new QianWenRequest
                {
                    Model = _Model,
                    Input = new Input
                    {
                        Prompt = queryString
                    }
                };
                return await CallQWen(queryString);
            }
        }

            private static async Task<String> CallQWen(String question)
        {
            using (var client = new HttpClient())
            {
                // 创建模型类
                var requestObj = new QianWenRequest
                {
                    Model = _Model,
                    Input = new Input
                    {
                        Prompt = question
                    }
                };

                var settings = new JsonSerializerSettings
                {
                    Formatting = Newtonsoft.Json.Formatting.Indented,
                    StringEscapeHandling = StringEscapeHandling.EscapeNonAscii
                };

                // 将对象序列化为JSON字符串
                string requestJson = JsonConvert.SerializeObject(requestObj, settings);
                Console.WriteLine(requestJson);

                var request = new HttpRequestMessage(HttpMethod.Post, _RequestUri);
                //定义Body
                var content = new StringContent(requestJson.ToLower(), Encoding.UTF8, "application/json");
                request.Content = content;

                //定义header
                request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json"); 
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", $"{_ApiKey}");

                var response = await client.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                                       
                    Console.WriteLine("通义千问的回答：");            
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
                else
                {                   
                    Console.WriteLine($"请求失败，状态码：{response.StatusCode}");
                    return response.StatusCode.ToString();
                }
            }
        }

    }
    public class QianWenRequest
    {
        public String Model { get; set; }
        public Input Input { get; set; }
    }

    public class Input
    {
        public string Prompt { get; set; }
    }
}
