// ConsoleApplicationExample_CPP.cpp : This file contains the 'main' function. Program execution begins and ends there.
//
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

#include <iostream>
#include "TryReferenceHJB.h"
#include "TryReferenceWSY.h"

using namespace std;



int main()//整个项目只能有一个main函数。VS会自动寻找main函数作为入口或起点，开始运行。
{
	TryReferencedFirst::tryFunc("您","0"); //first_space::tryFunc()运行成为隐式名称的函数实例（接受string数据实例"您"，接受string数据实例"好"）
	TryReferencedSecond::tryFunc(1,2);//first_space::tryFunc()运行成为隐式名称的函数实例（接受string数据实例"很"，接受string数据实例"好"）
	std::cout << TryReferencedThird::tryFunc("来自第三个名称空间:", "a") << std::endl;
	std::cout << TryReferencedFourth::tryFunc("来自第四个名称空间:", "a","b") << std::endl;
	//TryReferencedFirstWSY::tryFunc();
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
