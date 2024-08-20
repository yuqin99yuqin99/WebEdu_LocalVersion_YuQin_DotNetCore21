using System;
using System.Web;
using System.Web.Mvc;
using System.Collections.Generic;
using System.Linq;
//using EDSS.Models;


namespace EDSS.Controllers
{
    public class TryListController : Controller
    {
        /**List<Curriculum> curriculums = new List<Curriculum>
            {                
                new Curriculum { CurriculumName = "Rock" },
                new Curriculum { CurriculumName = "Jazz" },
                new Curriculum { CurriculumName = "Metal" },
                new Curriculum { CurriculumName = "Alternative" },
                new Curriculum { CurriculumName = "Disco" },
                new Curriculum { CurriculumName = "Blues" },
                new Curriculum { CurriculumName = "Latin" },
                new Curriculum { CurriculumName = "Reggae" },
                new Curriculum { CurriculumName = "Pop" },
                new Curriculum { CurriculumName = "Classical" }
            };**/



        /**  public ContentResult Index()
        {
          List<Curriculum> curriculums = new List<Curriculum>();

            curriculums.Add(new Curriculum { CurriculumName = "Rock" });
            curriculums.Add(new Curriculum { CurriculumName = "Jazz" });
            curriculums.Add(new Curriculum { CurriculumName = "Metal" });

            String stringTemp = "";
            foreach (Curriculum tempCurriculum in curriculums)
            {
                stringTemp = stringTemp + tempCurriculum.CurriculumName;
            }
            return this.Content(stringTemp);
          
        }
         * **/

    }
}
