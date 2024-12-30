#include <string>
#include <iostream>

using namespace std;



//P126例4.14:输入一个正整数，输出其位数
//分析：当输入的正整数不是一位数时，我们要用累计的方法完成位数统计：设定计数器 num ，取出正整数的个位数字， num 加1，
//从正整数中去掉个位数字，对剩余数位上数字所组成的新数重复计数。这个计数的过程是一个当型循环，可以用 while 语句来解决。

namespace lining
{
	void func4_14() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int n, num = 1;       // num 存放数字的位数，初始化为1
		cin >> n;
		while (n >= 10)  //当 n 不是一位数，就重复操作
		{
			num++;
			n /= 10;      //产生要去计数的新整数
		}
		cout << num << endl; //输出整数的位数 

	}
	void func4_151() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int a, b, gcd;
		cin >> a >> b;
		gcd = a > b ? b : a;           //注意此处的特殊写法
		while (gcd > 1 && (a % gcd != 0 || b % gcd != 0))     //重复操作，寻找最大公约数
			gcd--;
		cout << gcd << endl;        //输出最大公约数

	}
	void func4_152() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int a, b, tmp;
		cin >> a >> b;
		while (tmp = a % b)         //注意此处条件的特殊写法
		{
			a = b;
			b = tmp;
		}
		cout << b << endl;       //输出最大公约数

	}
}
