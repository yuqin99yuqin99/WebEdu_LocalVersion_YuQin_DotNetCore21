#include<string>
#include <iostream>


using namespace std;



namespace liuwenrong 
{
	void func3_191() 
	{
		float a, b, c;
		cin >> a >> b >> c;
		if (a > b)
			cout << a << "," << b << "," << c;
		else if (a > c)
			cout << a << "," << c << "," << b;
		else
			if (b > c)
				if (a > c)
					cout << b << "," << c << "," << a;
				else
					cout << c << "," << b << "," << a;
	}
	void func3_192() 
	{
		int a, b, c, temp;
		cin >> a >> b >> c;
		if (a < b)
		{
			temp = a; a = b; b = temp;
		}
		if (a < c)
		{
			temp = a; a = c; c = temp;
		}
		cout << a << " " << b << " " << c << endl;
	}
	void func3_20() 
	{
		float num1, num2;
		char op;
		cin >> num1 >> num2 >> op;
		switch (op)
		{
		case'+':cout << num1 << op << num2 << "=" << num1 + num2 << endl; break;
		case'-':cout << num1 << op << num2 << "=" << num1 - num2 << endl; break;
		case'*':cout << num1 << op << num2 << "=" << num1 * num2 << endl; break;
		case'/':if (num2 != 0)cout << num1 << op << num2 << "=" << num1 / num2 << endl;
			   else cout << "Divided by zero!" << endl; break;
		default:cout << "Invalid operator!";
		}
	}
}
