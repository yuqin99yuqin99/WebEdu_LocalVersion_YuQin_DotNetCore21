#include <string>
#include <iostream>


using namespace std;



namespace liruohan {
    void func3_161()
    {
        int n;
        cin >> n;
        if (n % 3 == 0)
            if (n % 5 == 0) cout << n << "是15的倍数" << endl;
            else cout << n << "是3的倍数但不是5的倍数" << endl;
        cout << "结束" << endl;
    }
    void func3_162()
    {
        int n;
        cin >> n;
        if (n % 3 == 0)
        {
            if (n % 5 == 0) cout << n << "是15的倍数" << endl;
        }
        else cout << n << "不是3的倍数" << endl;
        cout << "结束" << endl;
    }
    void func3_17()
    {
        float price, discount, amount;   //定义单价、折扣、总价
        int count;                     //定义购买数量
        cout << "输入单价" << endl;
        cin >> price;
        cout << "输入购买件数：" << endl;
        cin >> count;
        if (count < 5) discount = 1;  //购买数量小于5件，没有折扣
        else if (count < 10) discount = 0.9; //购买5件以上10件以下，九折
        else discount = 0.8;    //购买10件以上，8折
        amount = price * count * discount;  //求付费总价
        cout << "单价：" << price << "购买总数：" << count << "折扣：" << discount << "总价：" << amount << endl; //输出结果
    }
    void func3_181()
    {
        float a, b, c, maxn;
        cout << "输入三个数：";
        cin >> a >> b >> c;
        if (a > b && a > c)  maxn = a;  //判断a是否最大
        else if (b > a && b > c)   maxn = b;  //判断b是否最大
        else maxn = c;
        cout << "最大数为：" << maxn << endl;
    }
    void func3_182()
    {
        float a, b, c, maxn;
        cout << "输入三个整数：";
        cin >> a >> b >> c;
        maxn = a;
        if (b > maxn) maxn = b; //maxn为a，b中的最大值
        if (c > maxn) maxn = c; //maxn为a,b,c中的最大值
        cout << "最大数为：" << maxn << endl;
    }
}
