#include<iostream>
#include<string>
using namespace std;

namespace zhangyuying
{
	void func4_36()
	{
		int s1, s2;  // s1,s2 分别表示上学时间和课后学习时间
		int day = 0; // day 表示不高兴的一天，初始为 0
		int max = 8; // max 表示最长时间，初始为 8
		int i;
		for (i = 1; i <= 7; i++) // 重复处理每一组数据
		{
			cin >> s1 >> s2;
			if (s1 + s2 > max) // 若学习时间超过当前 max，则更新，并记录是周几
			{
				max = s1 + s2; // 更新 max
				day = i;       // 记录周几
			}
		}
		if (max > 8)
			cout << day;
		else
			cout << "0";
	}

	void func4_37()
	{
		int ans = 0, i, n, x, tmp;
		cin >> n >> x;
		for (int i = 1; i <= n; i++)
		{
			tmp = i;
			while (tmp >= 1)
			{
				if (tmp % 10 == x)ans++;
				tmp /= 10;
			}
		}
		cout << ans;
	}
}
