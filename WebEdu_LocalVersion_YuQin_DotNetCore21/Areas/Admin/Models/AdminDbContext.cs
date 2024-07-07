using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebEdu_LocalVersion_YuQin_DotNetCore21.Admin.Models
{
    

  
        public class AdminDbContext : DbContext
        {
            public AdminDbContext(
                DbContextOptions<AdminDbContext> options)
                : base(options)
            {
            }

            public DbSet<Admin> Admin { get; set; }//一个上下文对应一个数据库，上下文类 MovieDbContext，DbContext前面的部分将成为数据库名称。例如 MovieDbContext，将生成数据库MovieDb。在数据库中生成数据表Movie.因为WebEdu_LocalVersion_YuQin_DotNetCore21.Models.Movie可以被生成数据库表Movie，所以也叫实体类，如果没有 DbSet<B> ，不能被生成数据库表，则只能叫模型类，不能叫实体类。一个模型类  对应 一个数据表(Table)。    模型类的一个属性 对应一个列。模型类只应出现属性，不应该出现方法等。 这里只写一个表，如果你想要多个表，可以新建其它类，然后在上下文类中加入。
    }
}
