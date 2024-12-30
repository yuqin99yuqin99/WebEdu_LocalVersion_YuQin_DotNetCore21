#include <string>
#include <iostream>


using namespace std;

namespace yueying {
	int func4_2()
	{
		int i;
		for (i = 1; i <= 5; i++)
			cout << i;
		return 0;
	}

	int func4_3()
	{
		int i, j;
		for (i = 0, j = 10; i < j; i++, j--)
			cout << i << "" << j << endl;
		return 0;
	}

	int func4_4()
	{
		int i, sum;
		sum = 0;
		for (i = 1; i <= 100; i++)
		{
			sum += i;
			return 0;
		}
	}

	int func4_51()
	{
		int i;
		for (i = 1; i <= 100; i++)

			if (i % 2 == 0) cout << i << "";
		return 0;
	}

	int func4_52()
	{
		int i;
		for (i = 2; i <= 100; i += 2)
			cout << i << "";
		return 0;
	}
}

