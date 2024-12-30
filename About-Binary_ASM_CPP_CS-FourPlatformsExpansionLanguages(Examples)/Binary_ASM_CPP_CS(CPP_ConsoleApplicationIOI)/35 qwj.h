#include <string>
#include <iostream>
#include<cstring>


using namespace std;


namespace quwenjun
{
	void func5_7()
	{
		int i;
		int array[10];
		for (i = 1; i <= 15; i++)
		{
			array[i] = 0;
			cout << i;
		}
	}

	void func5_8()
	{
		const int MAXN = 10001;
		int a[MAXN];
		int i, n, maxa, k;
		cout << "exam2:" << endl;
		cin >> n;
		for (i = 1; i <= n; i++)
			cin >> a[i];
		maxa = a[1];
		k = 1;
		for (i = 2; i <= n; i++)
			if (a[i] > maxa)
			{
				maxa = a[i];
				k = i;
			}
		cout << k << endl;
	}

	void func5_9()
	{
		const int MAXN = 10001;
		int a[MAXN];
		int n, k;
		int i, j;
		cout << "exam3:" << endl;
		memset(a, 0, sizeof(a));
		cin >> n >> k;
		for (i = 2; i <= k; i++)
			for (j = 1; j <= n; j++)
				if (j % i == 0)a[j] = !a[j];
		for (i = 1; i <= n; i++)
			if (!a[i])
				cout << i << "" << endl;
	}

	void func5_10()
	{
		int num[11];
		int i, j, k;
		cout << "exam4:" << endl;
		memset(num, 0, sizeof(num));
		cin >> j;
		cout << "共" << j << "人投票";                   //设置参与投票人数
		for (k = 1; k <= j; k++)
		{
			cin >> i;
			if (i < 1 || i>10)continue;                       //写错数字导致不在范围内的不计票，直接跳过
			num[i] = num[i] + 1;
		}
		for (i = 1; i <= 10; i++)
			cout << "第" << i << "号歌手的选票数为：" << num[i] << endl;
	}





}

