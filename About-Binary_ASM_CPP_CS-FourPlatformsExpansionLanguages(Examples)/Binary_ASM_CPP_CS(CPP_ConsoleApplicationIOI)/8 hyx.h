#include <string>
#include <iostream>


using namespace std;



namespace heyuxin
{
	void func3_1() 
	{
		int c;
		float w;
		cout << "w=";
		cin >> w;
		if (w <= 500) c = 6;
		else c = 9;
		cout << "c=" << c << endl;
		return;
	}

	void func3_2() 
	{
		int n;
		cout << "n=";
		cin >> n;
		if (n < 0)
			cout << "×¢Òâ¸ºÊý£¡" << endl;
		cout << n << endl;
		return;
	}

}
