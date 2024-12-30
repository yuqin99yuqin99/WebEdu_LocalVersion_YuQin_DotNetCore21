#include <string>
#include <iostream>

using namespace std;




namespace shangjiashuo
{
	void func4_16() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int i = 1, n, sum = 0;
		cin >> n;
		do
		{
			sum += i;
			i++;

		} while (sum < n); // 重复执行
		cout << i - 1 << endl;

	}
	void func4_171() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int i = 1;
		do
		{
			cout << i;
			i++;
		} while (i < 1);

	}
	void func4_172() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int i = 1;
		while (i < 1)
		{
			cout << i;
			i++;
		}

	}
	void func4_181() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int i = 1;
		do
		{
			cout << i;
			i++;

		} while (i <= 5);
		

	}
	void func4_182() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int i = 1;
		do
		{
			i++;
			cout << i;
		} while (i <= 5);

	}
	void func4_19() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）

		int i = 1;
		do
			cout << i;
		while (i <= 5);

	}
}

