#define Rating
#if Rating
#region snippet_1 
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Models
{
    public static class BroweringOfTextbookSeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (BroweringOfTextbookDbContext broweringOfTextbookDbContext = new BroweringOfTextbookDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<BroweringOfTextbookDbContext>>()))
            {
                // Look for any movies.
               
                if (broweringOfTextbookDbContext.BroweringOfTextbook.Any())
                {
                    return;   // DB has been seeded
                }
                #region snippet1
                broweringOfTextbookDbContext.BroweringOfTextbook.AddRange(
                    new BroweringOfTextbook
                    {
                        ContentsItem = "When Harry Met Sally",
                        TextbookResources = "123456",
                        TeachingPPT= "7654332",
                        TeachingAnimation = "8765444",
                        HomeworkAndTest = "23433544",
                        TeachingEngineering = "98876665", 
                        ReleaseDate = DateTime.Parse("1989-2-12"),
                        Price = 7.99M
                    },
                #endregion

                    new BroweringOfTextbook
                    {
                        ContentsItem = "Ghostbusters ",
                        TextbookResources = "123456",
                        TeachingPPT = "7654332",
                        TeachingAnimation = "8765444",
                        HomeworkAndTest = "23433544",
                        TeachingEngineering = "98876665",
                        ReleaseDate = DateTime.Parse("1984-3-13"),                      
                        Price = 8.99M                        
                    },

                    new BroweringOfTextbook
                    {
                        ContentsItem = "Ghostbusters 2",
                        TextbookResources = "341256",
                        TeachingPPT = "7654332",
                        TeachingAnimation = "8765444",                        
                        HomeworkAndTest = "23433544",
                        TeachingEngineering = "98876665",
                        ReleaseDate = DateTime.Parse("1986-2-23"),                        
                        Price = 9.99M                        
                    },

                    new BroweringOfTextbook
                    {
                        ContentsItem = "Rio Bravo",
                        TextbookResources = "634125",
                        TeachingPPT = "7654332",
                        TeachingAnimation = "8765444",
                        HomeworkAndTest = "23433544",
                        TeachingEngineering = "98876665",
                        ReleaseDate = DateTime.Parse("1959-4-15"),                       
                        Price = 3.99M                        
                    }
                );
                broweringOfTextbookDbContext.SaveChanges();
            }
        }
    }
}
#endregion
#endif