#include <string>
#include <iostream>

using namespace std;



//P126例4.14:输入一个正整数，输出其位数
//分析：当输入的正整数不是一位数时，我们要用累计的方法完成位数统计：设定计数器 num ，取出正整数的个位数字， num 加1，
//从正整数中去掉个位数字，对剩余数位上数字所组成的新数重复计数。这个计数的过程是一个当型循环，可以用 while 语句来解决。

namespace liuxinyu
{
	void func4_23() 
	{ 

		int n, m, i;
		cin >> n;
		for (m = 2; m <= n; m++)
		{
			i = 2;
			while (m % i != 0 && i <= m - 1)
				i++;
			if (i > m - 1)
				cout << m << " ";
		}

	}
	void func4_24() 
	{ 

		int i, j;
		for (i = 1; i <= 5; i++)
		{
			j = 5;
			while (i <= j)
			{
				cout << i * 10 + j << " ";
				j--;
			}
			cout << endl;
		}

	}
	//void func4_25() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		//int i = 10, j;
		//do
			//for (j = 1; j < i; j++)
				//while (i > 5);

		//cout << i + j;
		//i--;
		//}
		

	
}

