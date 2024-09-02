本项目使用了本机开发时的安全机制（https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-8.0&tabs=windows），本机运行时，需要右击项目"ASPDotNet_MVC_YuQin"，选择“Manage User Secrets”,secrets.json文件中增加类似如下的JSON:
{
  /**本机开发时，开发者自己的本机或云端的数据库的账号密码。下述的****5请替换成为您自己的账号密码**/
  "Movies": {
    "ConnectionString": "Server=(localdb)\\mssqllocaldb;Database=Movie-1;Trusted_Connection=True;MultipleActiveResultSets=true",
    "ServiceApiKey": "****5"
  },
  /**本机开发时，开发者自己的本机或云端的AIGC模型API的ApiKey。下述的sk-****79316d7b4f3b85014154de41a962请替换成为您自己的ApiKey**/
  "ApiKeys": {
    "ApiKey-ALi_QWen": "sk-****79316d7b4f3b85014154de41a962"
  },
  "ApiKey": "sk-****79316d7b4f3b85014154de41a962"
}