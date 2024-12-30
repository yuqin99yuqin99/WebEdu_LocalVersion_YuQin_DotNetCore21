#include<iostream>
#include<cmath>
using namespace std;

namespace qiuyi {
    

    void function2()
    {
        int a, b;
        cout << "a,b=";
        cin >> a >> b;
        if (a = b) cout << a;
        else cout << "Unequal";

    }

    void function3()
    {
        int a, b;
        cout << "a,b=";
        cin >> a >> b;
        if (a == b) cout << a;
        else cout << "Unequal";
    }

    void function4()
    {
        int a, b, c = 0, d = 0;
        cout << "a,b=";
        cin >> a >> b;
        if (a > b)
            c = a / b;
        d = a % b;
        cout << c + d;

    }

    void function5()
    {
        int a, b, c = 0, d = 0;
        cout << "a,b=";
        cin >> a >> b;
        if (a > b)
        {
            c = a / b;
            d = a % b;
        }
        cout << c + d;

    }

    void function6()
    {
        cout << "请输入一个三位数n";
        int n, sum = 0, free = 0;
        cin >> n;
        for (int i = 0; i < 3; i++)
        {
            free = n % 10;
            sum += free * free * free;
            n /= 10;
        }
        if (sum == n)
            cout << "该数为水仙花数";
        else
            cout << "该数不为水仙花数";
    }

    void func3_8()
    {
        int cmark, mmark;
        cin >> cmark >> mmark;
        if (cmark >= 75 && mmark >= 85)
            cout << "有资格" << endl;
        else
            cout << "无资格" << endl;

    }

    void func3_10()
    {
        int year;
        cin >> year;
        if ((year % 4 == 0 && year % 100 != 0) || year == 0)
            cout << year << "是闰年" << endl;
        else
            cout << year << "不是闰年" << endl;


    }
}
