#include <iostream>
#include<string>


using namespace std;

namespace dingxuqing
{
	void func5_11()
	{
		const int MAXN = 100010;
		const int K = 1001;
		int a[MAXN], c[K];
		int n;
		cin >> n;
		memset(c, 0, sizeof(c));
		for (int i = 0; i < n; i++)
		{
			cin >> a[i];
			c[a[i]] = c[a[i]] + 1;
		}
		for (int i = 0; i < K; i++)
			for (int j = 1; j <= c[i]; j++)
				cout << i << " ";
	}

	

	void func5_12()
	{
		int a[10] = { 6,2,5,5,4,5,6,3,7,6 }, ans = 0, temp = 0, k;
		int num[2016];
		int n;
		cin >> n;
		num[0] = 6;
		for (int i = 1; i <= 2000; i++)
		{
			k = i;
			while (k)
			{
				temp += a[k % 10];
				k /= 10;
			}
			num[i] = temp;
			temp = 0;
		}
		for (int i = 0; i <= 999; i++)
			for (int j = 0; j <= 999; j++)
			{
				if (num[i] + num[j] >= n)
					continue;
				else {
					if (num[i + j] + num[i] + num[j] + 4 == n)
						ans++;
				}
			}
		cout << ans;
	}

}


