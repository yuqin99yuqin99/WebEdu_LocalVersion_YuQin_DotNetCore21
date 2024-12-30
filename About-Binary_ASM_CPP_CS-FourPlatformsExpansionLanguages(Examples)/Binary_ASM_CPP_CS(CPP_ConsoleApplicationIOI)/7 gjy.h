#include <iostream>
#include <ctime>
#include <cstdlib>
#include <cmath>
#include <iomanip>
using namespace std;




namespace guojiayi
{
	void func2_28()
	{
		int a, b, x, y;
		a = 35; b = 94;
		x = 2 * a - b / 2;
		y = b / 2 - a;
		cout << "x=" << x << "y=" << y << endl;
	}
	void func2_29()
	{
		int a, b, c, d, e, f, timepast;
		cin >> a >> b >> c >> d;
		timepast = 60 * c + d - (60 * a + b);
		e = timepast / 60;
		f = timepast % 60;
		cout << "公交车从首站到末站共用了" << e << "小时" << f << "分钟" << endl;
	}
	void func2_30()
	{
		int x, y, z;
		srand(time(0));
		x = rand() % 1000 + 1;
		y = rand() % 1000 + 1;
		z = rand() % 1000 + 1;
		cout << x << "+" << y << "-" << z << "=" << x + y - z << endl;
	}
	
	void func2_31()
	{
		double a, b, c, n;
		double s;
		cin >> a >> b >> c >> n;
		s = pow(a, n) + pow(b, n) + pow(c, n);
		cout << setprecision(15) << "s=" << s << endl;
	}
	void func2_32()
	{
		int a, b, n;
		long long sum;
		cin >> a >> b >> n;
		sum = ((long long)a + b) * n / 2;
		cout << "等差数列的和为" << sum << endl;
	}
	
}

namespace Guojiayi51
{
	

}
namespace Guojiayi52
{
	
}
namespace Guojiayi53
{
	
}
namespace Guojiayi54
{
	
}
namespace Guojiayi55
{
	
}
