#include<iostream>
#include<cstring>
const int MAXN1 = 100001;
using namespace std;

namespace lishiqin
{
	void func5_131()
	{
		const int MAXN = 100010;
		int a[MAXN];
		int n, i, j, k;
		int maxsum;
		int temp;
		cin >> n;
		for (i = 1; i <= n; i++)
			cin >> a[i];
		maxsum = a[1];
		for (i = 1; i <= n; i++)
			for (j = i; j <= n; j++)
			{
				temp = 0;
				for (k = i; k <= j; k++)
					temp = temp + a[k];
				if (maxsum < temp)
					maxsum = temp;
			}
		cout << maxsum;
	}
	void func5_132()
	{
		int s[MAXN1], a[MAXN1];
		memset(s, 0, sizeof(s));
		int n, i, j;
		int maxsum;          //子段和最大值
		int temp;           //子段和
		; cin >> n;
		for (i = 1; i <= n; i++)    //输入数据
		{
			cin >> a[i];
			s[i] = a[i] + s[i - 1];
		}
		maxsum = a[1];         //maxsum值初始化为数组第一个元素
		for (i = 1; i <= n; i++)    //子段起始位置
			for (j = i; j <= n; j++)   //子段终点位置
			{
				temp = s[j] - s[i - 1];
				if (maxsum < temp) maxsum = temp;
			}
		cout << maxsum;

	}

	void func5_133()
	{
		int a[MAXN1];
		int n, i;
		int ans;
		int t;
		cin >> n;
		for (i = 1; i <= n; i++)
			cin >> a[i];
		ans = a[1];
		t = ans;
		for (i = 2; i <= n; i++)
		{
			if (t >= 0)
				t = t + a[i];
			else
				t = a[i];
			if (t > ans)ans = t;
		}

		cout << ans;
	}


}


