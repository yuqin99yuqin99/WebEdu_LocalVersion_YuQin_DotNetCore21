#define Rating
#if Rating
#region snippet_1 
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Admin.Models
{
    public static class AdminSeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new AdminDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<AdminDbContext>>()))
            {
                // Look for any movies.
               
                if (context.Admin.Any())
                {
                    return;   // DB has been seeded
                }
                #region snippet1
                context.Admin.AddRange(
                    new Admin
                    {
                        ContentsItem = "条目",
                        TextbookResources = "123456",
                        TeachingPPT= "7654332",
                        TeachingAnimation = "8765444",
                        HomeworkAndTest = "23433544",
                        TeachingEngineering = "98876665", 
                        ReleaseDate = DateTime.Parse("1989-2-12"),
                        Price = 7.99M
                    },
                #endregion

                    new Admin
                    {
                        ContentsItem = "条目1 ",
                        TextbookResources = "123456",
                        TeachingPPT = "7654332",
                        TeachingAnimation = "8765444",
                        HomeworkAndTest = "23433544",
                        TeachingEngineering = "98876665",
                        ReleaseDate = DateTime.Parse("1984-3-13"),                      
                        Price = 8.99M                        
                    },

                    new Admin
                    {
                        ContentsItem = "条目2",
                        TextbookResources = "341256",
                        TeachingPPT = "7654332",
                        TeachingAnimation = "8765444",                        
                        HomeworkAndTest = "23433544",
                        TeachingEngineering = "98876665",
                        ReleaseDate = DateTime.Parse("1986-2-23"),                        
                        Price = 9.99M                        
                    },

                    new Admin
                    {
                        ContentsItem = "条目3",
                        TextbookResources = "634125",
                        TeachingPPT = "7654332",
                        TeachingAnimation = "8765444",
                        HomeworkAndTest = "23433544",
                        TeachingEngineering = "98876665",
                        ReleaseDate = DateTime.Parse("1959-4-15"),                       
                        Price = 3.99M                        
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
#endregion
#endif