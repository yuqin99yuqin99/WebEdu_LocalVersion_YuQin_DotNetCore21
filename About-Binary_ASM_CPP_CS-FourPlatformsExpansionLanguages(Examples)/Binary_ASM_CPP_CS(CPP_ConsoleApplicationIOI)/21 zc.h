#include <string>
#include <iostream>


using namespace std;



// ��һ�������ռ�
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
			if (x != mima)cout << "����" << endl;
		}
		if (x == mima)cout << "��ȷ" << endl;
		else if (n == 3) cout << "����" << endl;

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
