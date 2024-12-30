#include<iostream>

const int MAXN3 = 100001;
using namespace std;

namespace kangjinyuan 
{
	void func5_141()
	{
		int n, k, i, j;
		float temp, a[MAXN3];

		cin >> n;
		for (i = 0; i < n; i++)
			cin >> a[i];
		for (i = 0; i < n; i++)
		{
			k = i;
			for (j = i + 1; j < n; j++)
			{
				if (a[k] > a[j])
					k = j;
				if (k != j)
				{
					temp = a[i];
					a[i] = a[k];
					a[k] = temp;
				}
			}
		}
		for (i = 0; i < n; i++)
			cout << a[i] << "";
		
	}

	void func5_142()
	{
		float temp, a[MAXN3];
		int n, i, j;
		cin >> n;
		for (i = 0; i < n; i++)
			cin >> a[i];
		for (i = n - 1; i >= 1; i--)
			for (j = 0; j < i; j++)
				if (a[j] > a[j + 1])
				{
					temp = a[j];
					a[j] = a[j + 1];
					a[j + 1] = temp;
				}
		for (i = 0; i < n; i++)
			cout << a[i] << "";
	}

	void func5_143()
	{
		float a[MAXN3];
		int n, i, j, k, temp;
		cin >> n;
		for (i = 0; i < n; i++)
			cin >> a[i];
		for (i = 0; i < n; i++)
		{
			for (j = i - 1; j >= 0; j--)
				if (a[j] < a[i])break;
			if (j != i - 1)
			{
				temp = a[i];
				for (k = i - 1; k > j; k--)
					a[k + 1] = temp;
				a[k + 1] = temp;
			}
		}
		for (i = 0; i < n; i++)
			cout << a[i] << "";
	}
	const int maxn = 100001;
	void func5_15()
	{
		int n, k, i, j;
	bool find;
	float num, a[maxn];
	cin >> n;
	for (i = 0; i < n; i++)
		cin >> a[i];
	while (true) // 重复循环
	{
		cin >> num; // 读入要查找的数
		find = 0;
		for (i = 0; i < n; i++) // 在数组中查找
			if (a[i] == num)
			{
				cout << i << ""; // 输出找到数的位置
				find = 1;
			}
		if (!find)
			cout << "fail!" << endl; // 查找不到
	}
	}
	

}

