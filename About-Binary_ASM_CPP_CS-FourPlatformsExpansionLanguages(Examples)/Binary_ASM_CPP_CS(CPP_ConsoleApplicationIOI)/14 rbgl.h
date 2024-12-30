#include <string>
#include <iostream>
#include<cstdio>

using namespace std;



namespace rebiguli {
    void func3_211()
    {
        int n;
        cout << "n=";
        cin >> n;
        switch (n)
        {
        case 1: cout << "f=n" << endl; break;
        case 2: cout << "f=n*n" << endl; break;
        case 3: cout << "f=n*n*n" << endl; break;
        default: cout << "f=0";


        }
    }
    void func3_212()
    {
        int n;
        cout << "n=";
        cin >> n;
        switch (n)
        {
        case 1: cout << "f=n" << endl;
        case 2: cout << "f=n*n" << endl;
        case 3: cout << "f=n*n*n" << endl;
        default: cout << "f=0";
        }
    }
    void func3_22()
    {
        char score;
        cout << "score=";
        cin >> score;
        switch (score)
        {
        case'A':case'a':cout << "excellent"; break;
        case'B':case'b':cout << "good"; break;
        default:cout << "general";

        }
    }
    void func3_231()
    {
        float n;
        float x, y;
        scanf("%f %f", &x, &y);
        n = 100 * x / y;      //求恩格尔系数
        if (n >= 60)   printf("贫穷\n");
        else if (n >= 50)  printf("温饱\n");
        else if (n >= 40)     printf("小康\n");
        else if (n >= 30)     printf("相对富裕\n");
        else if (n >= 20)     printf("富裕\n");
        else printf("及其富裕\n");
    }
    void func3_232()
    {
        int n;
        float x, y;
        scanf_s("%f %f", &x, &y);
        n = floor(100 * x / y);       //对恩格尔系数取下整
        switch (n / 10)     //依题意，可用整除10后的个位数表示相应范围的恩格尔系数
        {
        case 0:
        case 1:
            printf("极其富裕\n");
            break;
        case 2:
            printf("富裕\n");
            break;
        case 3:
            printf("相对富裕\n");
            break;
        case 4:
            printf("小康\n");
            break;
        case 5:
            printf("温饱\n");
            break;
        default:
            printf("贫穷\n");
            break;


        }
    }
}

