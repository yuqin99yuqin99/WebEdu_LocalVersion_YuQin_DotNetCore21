#include<iostream>
#include <string>

using namespace std;

namespace liyina
{
	void func3_271()
	{

		double dis;
		double t1, t2;
		cin >> dis;
		t1 = dis / 3 + 27 + 23;
		t2 = dis / 1.2;
		if (t1 > t2)
			cout << "Walk" << endl;
		else if (t1 == t2)
			cout << "The same" << endl;
		else
			cout << "Bike" << endl;
		
	}
	void  func3_272()
	{
		int dis;
		int t1, t2;
		cin >> dis;
		t1 = dis * 2 + (27 + 23) * 6;
		t2 = dis * 5;
		if (t1 > t2)
			cout << "Walk" << endl;
		else if (t1 == t2)
			cout << "The same" << endl;
		else
			cout << "Bike" << endl;
		
	}
	void func3_281()
	{
		double s;
		double p, w, d, f, m;
		double f1;
		cout << "输入运输单价p，重量w和里程m：" << endl;
		cin >> p >> w >> m;
		f = 0;
		s = 0;
		f1 = p * w;
		if (m < 250)
			f = f1 * m;
		else
		{
			s += f1 * 250;
			d = 0.02;
			if (m < 500)
				f = s + f1 * (1 - d) * (m - 250);
			else
			{
				s += f1 * 250 * (1 - d);
				d = 0.05;
				if (m < 1000)
					f = s + f1 * (1 - d) * (m - 500);
				else
				{
					s += f1 * (1 - d) * 500;
					d = 0.08;
					if (m < 2000)
						f = s + f1 * (1 - d) * (m - 1000);
					else
					{
						s += f1 * (1 - d) * 1000;
						d = 0.1;
						if (m < 3000)
							f = s + f1 * (1 - d) * (m - 2000);
						else
						{
							s += f1 * (1 - d) * 1000;
							d = 0.15;
							f = s + f1 * (1 - d) * (m - 3000);
						}
					}
				}
			}
		}
		cout << "折扣后总运费：" << f << endl;
		
	}
	void func3_282()
	{
		int c, s;
		double p, w, d, f, m;
		cout << "输入运输单价p,重量w和里程m：" << endl;
		cin >> p >> w >> m;
		f = 0;
		c = m / 250;
		s = m;
		switch (c)
		{
		default:
			d = 0.15;
			f += p * w * (s - 3000) * (1 - d);
			s = 3000;
		case 8:
		case 9:
		case 10:
		case 11:
			d = 0.1;
			f += p * w * (s - 2000) * (1 - d);
			s = 2000;
		case 4:
		case 5:
		case 6:
		case 7:
			d = 0.08;
			f += p * w * (s - 1000) * (1 - d);
			s = 1000;
		case 2:
		case 3:
			d = 0.05;
			f += p * w * (s - 500) * (1 - d);
			s = 500;
		case 1:
			d = 0.02;
			f += p * w * (s - 250) * (1 - d);
			s = 250;
		case 0:
			d = 0;
			f += p * w * s * (1 - d);
		}

		cout << "折扣后总运费：" << f << endl;

	}
}



