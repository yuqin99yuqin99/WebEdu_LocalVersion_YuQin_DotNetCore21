#include<iostream>
#include<cstring>
const int MAXN2 = 10010;
using namespace std;

namespace abulitipu
{
	void func5_17()
	{
		int a[MAXN2], b[MAXN2], s[MAXN2];
		int mark, temp = -1, n, k, x, low, high, mid = 0, rank = 0;
		cin >> n >> k;
		memset(b, 0, sizeof(b));
		for (int i = 1; i <= n; i++)
		{
			cin >> mark;
			if (mark == temp)b[rank] += 1;
			else
			{
				a[++rank] = mark;
				s[rank] = i - 1;
				b[rank] = 1;
			}
			temp = mark;

		}
		for (int i = 1; i <= k; i++)
		{
			cin >> x;
			low = 1;
			high = rank;
			while (low <= high && a[mid] != x)
			{
				mid = (low + high) / 2;
				if (a[mid] < x) high = mid - 1;
				else low = mid + 1;

			}
			if (a[mid] = -x) cout << mid << "" << b[mid] << "" << s[mid] << endl;
			else cout << "failn" << endl;

		}

	}

	

}


