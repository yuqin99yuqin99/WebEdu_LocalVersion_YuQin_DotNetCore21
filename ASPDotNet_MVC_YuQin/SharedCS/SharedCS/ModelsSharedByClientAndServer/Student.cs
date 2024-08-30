using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorWebAssemblyExampleApi.Model

{
    public class Student
    {
        public Int32 Id { get; set; }
        public String? Name { get; set; }

        public String? Class { get; set; }

        public Int32 Age { get; set; }

        public String? Sex { get; set; }
    }
}
