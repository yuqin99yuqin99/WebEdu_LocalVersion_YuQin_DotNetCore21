//using Blazor_WebAssembly_PWA_YuQin.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlazorWebAssemblyExampleApi.Model;

namespace Blazor_WebAssembly_PWA_YuQin.Model
{
    public interface IStudentRepository
    {
        List<Student> List();

        Student Get(Int32 id);

        Boolean Add(Student student);

        Boolean Update(Student student);

        Boolean Delete(Int32 id);
    }
}
