#include<ctime>
#include <string>
#include <iostream>


using namespace std;
// do-while 语句的应用
//【例4.20】针对计算机随机产生的两个三位数字，用户计算并输入其和，知道计算正确，输出所用的次数。
// 分析：根据题意，输入的数字不正确，就要重复输入。这是很明确的循环思想，而输入数字的不正确就是循环的条件。
//   因为至少要输入一个数字判断计算是否正确，符合do-while至少执行一次循环体的特征。我们使用do-while语句来编写程序。



// 第一个命名空间
namespace yangmiaoxue
{
	void func4_20() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）
		int x, y, n, num = 0;
		srand(time(NULL));//随机种子数
		x = 100 + rand() % (999 - 100 + 1);//产生第一个三位随机数
		y = 100 + rand() % (999 - 100 + 1);//产生第二个三位随机数
		do
		{
			cout << x << "+" << y << "=?\n";
			cin >> n;
			num++;
		} while (n != x + y);
		cout << num << endl;
	}
	//说明：srand（）是随机种子函数，rand()是产生随机数函数。函数的具体用法可以查阅第2章
// 实验：将程序第18行do-while语句的条件改写成如下形式，并上机验证程序的正确性：
//    ！（n==x+y)

	void func4_21() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）
		int n;
		cin >> n;
		do
		{
			cout << n % 10;//输出最末一位数字
			n /= 10; //产生去掉个位数字后的新数
		} while (n != 0);//商非0，就重复操作
		//实验：将程序第13行while的条件部分直接写成n，即写成如下形式，程序的运行结果如何？
//        while(n)

	}
	void func4_22() { //定义tryFunc函数类型（该函数类型，接受参数1：string数据类型；接受参数2：string数据类型）（返回结果：void数据类型的数据实例）
		int n, num = 0;
		cin >> n;
		do
		{
			num++;//二进制位数加1
			n /= 2;
		} while (n != 0);
		cout << num;

	}
	//思考：在上述说明中，仅介绍了十进制整数与二进制整数互相转换的方法。你能想到小数的转还方法吗？
// 练习
// （1）读程序，写结果。
// test(1)-1
// #include <iostream>
// using namespace std;
//int main()
//{
//	int n;
	//cin >> n;
	//do
	//{
//       cout << n % 2;
		// n /= 2;
	//}
	//while (n != 0);

	//return 0;
//}
//分别输入：4 0
// test(1)-2
// #include <iostream>
// using namespace std;
//int main()
//{
//	int i,n;
	//cin >> n;
	// i=n-1;
	//do
	// i--;
	//while(i>1&& n%i!=0);
//       cout << i;
	//return 0;
//}
//分别输入：100  79 2
// 
// test(1)-3
// #include <iostream>
// using namespace std;
//int main()
//{
//	int i=1,s=3;
	//do
	//{
	// s+=i++;
	// if(s%7!=0)
	// ++i;
	// }
	//while(s<15);
//   cout << i;
	//return 0;
//}
}


