#include <iostream>
#include<cmath>

using namespace std;

namespace fengxue {
    void func4_34()
    {
        float x, y;
        int n, i, ans = 0;
        cin >> n;
        for (i = 1; i <= n; i++)
        {
            cin >> x >> y;
            if (x < 60 ^ y < 60)
                ans++; // ��������ʵ���ж�
        }
        cout << ans;
    }

    void func4_35()
    {
        int n, num = 0;
        cin >> n;
        do
        {
            num++;        // λ���� 1
            n >>= 1;      // ��λ�Ʋ��������µ�����
        } while (n != 0); // �̷� 0�����ظ�����
        cout << num;
    }
   

}