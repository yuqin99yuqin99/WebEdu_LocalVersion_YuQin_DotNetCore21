// IOI_DataStructure.cpp : 此文件包含 "main" 函数。程序执行将在此处开始并结束。

//对于C++语言调用动态库来说，需要包含头文件，即，头文件(接口文件)与代码文件(履行文件)。对于C#语言调用动态库来说，因为C#动态库是自带元数据(头文件)的，vs自动进行了解析，所以不需要包含头文件。头文件包含的是多个源文件的公用内容，因此，全局函数原型声明、全局变量声明、自定义宏和类型等应该放在头文件中。规范的头文件允许被多个源文件包含而不会引发编译错误，所以全局变量的定义、外部变量的定义、全局函数的定义、在类体之外的类成员函数的定义等只能出现一次的内容不应该放在头文件中。将可以被多个.cpp文件使用的函数或方法统一封装在一个文件中，当其他.cpp文件需要使用这个变量或函数时，通过#include将其包含进来就可以。
/**
    那么，我们该如何将这个函数单独编写，并书写对应的头文件？

    （1）编写一个c文件，这里我叫做myadd.c,然后实现加法函数。

int add(int a, int b){
    return a+b;
}

  （2）编写对应的头文件，myadd.h,最好是和c文件名对应，只是扩展名不同。

#ifndef _MYADD_H_
#define _MYADD_H_

int add(int a, int b);

#endif

头文件中写入函数的声明即可。这里的ifndef，define为条件编译，是为了防止函数等被重复定义。其中最上面的两行是你头文件的名称。比如你想写一个头文件：fun.h，那么在上面的两行就写上FUN_H。小写转大写，点变下划线。好记吧？注意，自己编写的头文件里面不能有主函数。要留意最下面的 #endif 要有。其他就按正常程序写即可。注意最后保存之后要修改扩展名为.h 。如果要用，可以直接把头文件复制到系统头文件目录里（比如macOS和Linux就可以复制到 / usr / local / include里），或者如果想调用，直接把它放在与主程序同一目录里。

    （3）主函数中，引入头文件即可。C++引入头文件的两种方式。第一种：对于存在于C++内置的一些头文件，我们可以使用尖括号引入。方法很简单，还是在前面加上#include：
#include <iostream>第二种：对于自己写的、存在于与主程序相同目录的头文件，我们用双引号引入。比如：#include "myadd.h"

#include <stdio.h>
#include "myadd.h"

int main(int argc, char const *argv[])
{
    printf("hello world\n");

    int a=500;
    int b=20;
    printf("%d\n", add(a,b));

    return 0;
}

**/

/**
能否在头文件中放置函数定义？
语法上是可以这样做的，但是在编程规范中并不鼓励这样做。
成员函数一般是不可以在头文件中定义的，只能在头文件中声明。因为函数只能有一次定义，而可以有多次声明，当头文件被多次包含的时候，如果头文件中有函数定义就违背了这个原则
#ifndef XXX_H
#define XXX_H
class CA {
…
}
#endif
如果头文件中没有这样定义的话,多次包含一样编译不通过.
成员函数在不在头文件中定义,其实都没多大关系,但如果程序是提供给别人作为库,而在头文件中定义成员函数,别人就会看到程序的实现,在.cpp中定义,人家使用时调用的是库文件,看到的只是头文件中的声明,而不知道实现过程.

还有一些规则是,有些成员函数是必须在类声明中定义的,如类的静态成员函数,inline函数.
**/
//该项目使用的结构为 .h头文件放计算函数， .cpp文件放调用函数，因此对调用行为做出以下规范:
//例：你要使用例2.15的函数，因为在这个例题里面只有一个函数，所以只需要输入 215
//例：你要使用例2.16的函数，但它不止一个例题里面不止一个程序，如果你要调用第一个，则输入 2161 ,如果你要调用第二个，则输入 2162 。
//1.0版本 例题版

#include <iostream>
#include "huizong.h"
#include "TryReferenceHJB.h"
#include "TryReferenceWSY.h"


using namespace std;



int main()
{
    TryReferencedFirst::tryFunc("您", "0"); //first_space::tryFunc()运行成为隐式名称的函数实例（接受string数据实例"您"，接受string数据实例"好"）
    TryReferencedSecond::tryFunc(1, 2);//first_space::tryFunc()运行成为隐式名称的函数实例（接受string数据实例"很"，接受string数据实例"好"）
    std::cout << TryReferencedThird::tryFunc("来自第三个名称空间:", "a") << std::endl;
    std::cout << TryReferencedFourth::tryFunc("来自第四个名称空间:", "a", "b") << std::endl;
    //TryReferencedFirstWSY::tryFunc();
    cout << "欢迎使用" << endl;
    int xuanti,i=0;
    cout << "请输入您想要使用的函数编号：";
    cout << "\n";

loop://循环的头嘞
    
        if (i != 0)
        {
            cout << "请继续输入您想要使用的函数编号：";
        }
        
        cin >> xuanti;
        int a = 1;

        switch (xuanti)
        {
        case 24:func2_4(); break;
        case 25:func2_5(); break;
        case 26:func2_6(); break;
        case 27:func2_7(); break;
        case 28:func2_8(); break;
        case 29:func2_9(); break;
        case 2101:func2_101(); break;
        case 2102:func2_102(); break;
        case 212:func2_12(); break;
        case 213:func2_13(); break;
        case 214:func2_14(); break;
        case 215:func2_15(); break;
        case 2161:func2_161(); break;
        case 2162:func2_162(); break;
        case 2163:func2_163(); break;
        case 217:func2_17(); break;
        case 218:func2_18(); break;
        case 219:func2_19(); break;
        case 220:func2_20(); break;
        case 221:func2_21(); break;
        case 222:func2_22(); break;
        case 223:func2_23(); break;
        case 224:func2_24(); break;
        case 225:func2_25(); break;
        case 226:func2_26(); break;
        case 227:func2_27(); break;
        case 228:func2_28(); break;
        case 229:func2_29(); break;
        case 230:func2_30(); break;
        case 231:func2_31(); break;
        case 232:func2_32(); break;
        case 31:func3_1(); break;
        case 32:func3_2(); break;
        case 33:func3_3(); break;
        case 341:func3_41(); break;
        case 342:func3_42(); break;
        case 36:func3_6(); break;
        case 37:func3_7(); break;
        case 38:func3_8(); break;
        case 310:func3_10(); break;
        case 3111:func3_111(); break;
        case 3112:func3_112(); break;
        case 312:func3_12(); break;
        case 314:func3_14(); break;
        case 315:func3_15(); break;
        case 3161:func3_161(); break;
        case 3162:func3_162(); break;
        case 317:func3_17(); break;
        case 3181:func3_181(); break;
        case 3182:func3_182(); break;
        case 3191:func3_191(); break;
        case 3192:func3_192(); break;
        case 320:func3_20(); break;
        case 3211:func3_211(); break;
        case 3212:func3_212(); break;
        case 3231:func3_231(); break;
        case 3232:func3_232(); break;
        case 324:func3_24(); break;
        case 325:func3_25(); break;
        case 3261:func3_261(); break;
        case 3262:func3_262(); break;
        case 3271:func3_271(); break;
        case 3272:func3_272(); break;
        case 3281:func3_281(); break;
        case 3282:func3_282(); break;
        case 329:func3_29(); break;
        case 41:func4_1(); break;
        case 42:func4_2(); break;
        case 43:func4_3(); break;
        case 44:func4_4(); break;
        case 451:func4_51(); break;
        case 452:func4_52(); break;
        case 461:func4_61(); break;
        case 462:func4_62(); break;
        case 47:func4_7(); break;
        case 48:func4_8(); break;
        case 49:func4_9(); break;
        case 410:func4_10(); break;
        case 411:func4_11(); break;
        case 412:func4_12(); break;
        case 413:func4_13(); break;
        case 414:func4_14(); break;
        case 4151:func4_151(); break;
        case 4152:func4_152(); break;
        case 416:func4_16(); break;
        case 4171:func4_171(); break;
        case 4172:func4_172(); break;
        case 4181:func4_181(); break;
        case 4182:func4_182(); break;
        case 419:func4_19(); break;
        case 420:func4_20(); break;
        case 421:func4_21(); break;
        case 422:func4_22(); break;
        case 423:func4_23(); break;
        case 424:func4_24(); break;
      //case 425:func4_25(); break;
        case 426:func4_26(); break;
        case 4271:func4_271(); break;
        case 4272:func4_272(); break;
        case 4281:func4_281(); break;
        case 4282:func4_282(); break;
        case 429:func4_29(); break;
        case 4301:func4_301(); break;
        case 4302:func4_302(); break;
        case 432:func4_32(); break;
        case 433:func4_33(); break;
        case 434:func4_34(); break;
        case 435:func4_35(); break;
        case 436:func4_36(); break;
        case 437:func4_37(); break;
        case 438:func4_38(); break;
        case 439:func4_39(); break;
        case 51:func5_1(); break;
        case 52:func5_2(); break;
        case 53:func5_3(); break;
        case 54:func5_4(); break;
        case 551:func5_51(); break;
        case 552:func5_52(); break;
        case 561:func5_61(); break;
        case 562:func5_62(); break;
        case 57:func5_7(); break;
        case 58:func5_8(); break;
        case 59:func5_9(); break;
        case 510:func5_10(); break;
        case 511:func5_11(); break;
        case 512:func5_12(); break;
        case 5131:func5_131(); break;
        case 5132:func5_132(); break;
        case 5133:func5_133(); break;
        case 5141:func5_141(); break;
        case 5142:func5_142(); break;
        case 5143:func5_143(); break;
        case 515:func5_15(); break;
        case 517:func5_17(); break;

            
        }
        cout << "\n";
        cout << "\n";
        cout << "\n";
        cout << "该函数已经运行完毕\n";
        cout << "请问是否想继续使用，若想继续，请输入除了0之外的任意整数，若不想，请输入0：";
        i++;
        cin >> a;

        cout << "\n";
        cout << "\n";
        cout << "\n";
    
    if (a != 0)
        goto loop;//搞循环的嘞
    
    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file

