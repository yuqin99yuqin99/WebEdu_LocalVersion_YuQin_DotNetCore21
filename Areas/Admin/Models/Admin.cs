using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Admin.Models
{
   
    public class Admin
    {
        public Int32 ID { get; set; } = 0;

       // [StringLength(120, MinimumLength = 0)]
        public String ContentsItem { get; set; } = "";       

       // [RegularExpression(@"^[A-Z]+[a-zA-Z""'\s-]*$"), Required, StringLength(30)]
        public String TextbookResources { get; set; } = "";

      //  [RegularExpression(@"^[A-Z]+[a-zA-Z0-9""'\s-]*$"), StringLength(5)]
        public String TeachingPPT { get; set; } = "";

        public String TeachingAnimation { get; set; } = "";

        public String HomeworkAndTest { get; set; } = "";

        public String TeachingEngineering { get; set; } = "";

       // [Display(Name = "Release Date"), DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; } = new DateTime();

       // [Range(1, 100), DataType(DataType.Currency)]
      //  [Column(TypeName = "decimal(18, 2)")]
        public Decimal Price { get; set; } = 0;
    }
}
