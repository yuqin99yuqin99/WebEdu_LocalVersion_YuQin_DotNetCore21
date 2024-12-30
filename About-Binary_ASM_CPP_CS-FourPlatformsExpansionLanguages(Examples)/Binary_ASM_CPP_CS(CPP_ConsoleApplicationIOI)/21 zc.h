#include <string>
#include <iostream>


using namespace std;



// 第一个命名空间
namespace zhangchen
{
	void func4_10()
	{
		int i = 1; while (i <= 5)
		{
			cout << i;
			i++;
		}

	}
	void func4_11()
	{
		int i = 1;
		while (i <= 5)
		{
			cout << i;
		}

	}
	void func4_12()
	{
		int mima = 201611;
		int x = 0, n = 0;
		while (n < 3 && x != mima)
		{
			n++;
			cin >> x;
			if (x != mima)cout << "错误" << endl;
		}
		if (x == mima)cout << "正确" << endl;
		else if (n == 3) cout << "冻结" << endl;

	}

	void func4_13()
	{
		int n, i;
		cin >> n;
		i = 2;
		while (n % i != 0 && i <= n - 1)
			i++;
		if (i > n - 1)cout << "Yes" << endl;
		else cout << "No" << endl;

	}
}
