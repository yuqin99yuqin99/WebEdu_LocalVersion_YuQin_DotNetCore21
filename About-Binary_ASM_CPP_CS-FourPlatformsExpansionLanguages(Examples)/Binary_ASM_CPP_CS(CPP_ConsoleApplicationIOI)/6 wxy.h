#include<iostream>
#include <string>
#include<cstdio>
using namespace std;

namespace wuxiaoyan
{


	void func2_25()
	{
		int a, b, c;
		printf("input a,b,c\n");
		scanf("%d%d%d", &a, &b, &c);
		printf("a=%d,b=%d,c=%d", a, b, c);


	}

	void func2_26()
	{
		int a;
		double b;
		char c;
		scanf("%c%d,%lf", &c, &a, &b);
		printf("½á¹ûÊÇ:\n");
		printf("%c %d %.2lf", c, a, b);


	}

	void func2_27()
	{
		int a, b;
		scanf("%d%*d%d", &a, &b);
		printf("a=%d,b=&d\n", a, b);

	}

	

}

