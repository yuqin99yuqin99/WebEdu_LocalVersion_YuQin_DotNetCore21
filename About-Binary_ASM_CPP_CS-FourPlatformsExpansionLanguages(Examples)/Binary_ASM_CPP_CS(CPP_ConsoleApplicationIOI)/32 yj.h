#include<iostream>
#include<cmath>

using namespace std;

namespace yujing
{
	void funcD_1()
	{
		int n, x, y, i;
		cin >> n;
		for (x = 3; x <= n / 2; x += 2)
		{
			for (i = 2; i <= sqrt(x); i++)
				if (x % i == 0)
					break;
			if (i > sqrt(x))
				y = n - x;
			else break;
			for (i = 2; i < sqrt(y); i++)
				if (y % i == 0)
					break;
			if (i > sqrt(y))
				cout << n << "=" << x << "+" << y << endl;
		}
		
	}
	void funcD_2()
	{
		int i;
		for (i = 10; i > 0; i--)
		{
			if (i == 5)
				continue;
			//i=5时，不执行后面的输出，返回去处理下一个i值
			cout << i << endl;
		}
		
	}
	
}
	
