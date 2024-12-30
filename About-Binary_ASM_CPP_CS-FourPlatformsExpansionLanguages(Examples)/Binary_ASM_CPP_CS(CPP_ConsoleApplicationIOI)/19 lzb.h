#include <string>
#include <iostream>


using namespace std;

namespace lizebao 
{
	int func4_61()
	{
		int i, sum1 = 0, sum2 = 0;
		for (i = 1; i <= 100; i++)
			if (i % 2 == 0) sum1 += i;
			else sum2 += i;
		cout << "偶数和" << sum1 << " " << "奇数和" << sum2;
		return 0;
	}

	int func4_62()
	{
		int i, j, sum1 = 0, sum2 = 0;
		for (i = 2, j = 1; i <= 100; i += 2, j += 2) // 同时生成偶数和奇数

		{
			sum1 += i; // 偶数 i 累加入 sum1
			sum2 += j; // 奇数 j 累加入 sum2
		}
		cout << " 偶数和 " << sum1 << " "
			<< " 奇数和 " << sum2;
		return 0;
	}

	int func4_7()
	{
		int i, n;
		float x, max = 0; // 将身高最大值初始化为 0
		cin >> n;
		for (i = 1; i <= n; i++)
		{
			cin >> x;
			if (x > max)
				max = x; // 判断身高是否比当前最高者高
		}
		cout << max << endl;
			return 0;
	}
	

	int func4_8()
	{
		int i, a = 0, b = 1, c;
		cout << a << " " << b;    // 输出第一项和第二项的值
		for (i = 3; i <= 40; i++) // 求解第三项至第四十项的值
		{
			c = a + b; // 求第 i 项的值
			cout << c << " ";
			if (i % 10 == 0)
				cout << endl; // 每十个数据一行
			a = b;
			b = c; // 更新 a 和 b 的值
		}
		return 0;
	}
}
	



