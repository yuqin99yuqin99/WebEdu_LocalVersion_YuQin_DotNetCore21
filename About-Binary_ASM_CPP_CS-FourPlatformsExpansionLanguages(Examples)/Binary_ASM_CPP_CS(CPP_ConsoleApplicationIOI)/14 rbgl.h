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
        n = 100 * x / y;      //������ϵ��
        if (n >= 60)   printf("ƶ��\n");
        else if (n >= 50)  printf("�±�\n");
        else if (n >= 40)     printf("С��\n");
        else if (n >= 30)     printf("��Ը�ԣ\n");
        else if (n >= 20)     printf("��ԣ\n");
        else printf("���主ԣ\n");
    }
    void func3_232()
    {
        int n;
        float x, y;
        scanf_s("%f %f", &x, &y);
        n = floor(100 * x / y);       //�Զ����ϵ��ȡ����
        switch (n / 10)     //�����⣬��������10��ĸ�λ����ʾ��Ӧ��Χ�Ķ����ϵ��
        {
        case 0:
        case 1:
            printf("���主ԣ\n");
            break;
        case 2:
            printf("��ԣ\n");
            break;
        case 3:
            printf("��Ը�ԣ\n");
            break;
        case 4:
            printf("С��\n");
            break;
        case 5:
            printf("�±�\n");
            break;
        default:
            printf("ƶ��\n");
            break;


        }
    }
}

