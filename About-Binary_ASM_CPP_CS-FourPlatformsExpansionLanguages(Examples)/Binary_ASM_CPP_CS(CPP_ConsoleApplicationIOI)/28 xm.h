#include <string>
#include <iostream>

using namespace std;


// ��һ�������ռ�
namespace xueman
{
    void func4_301() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����
        int n;
        cin >> n;
        while (n > 0 && n % 2 == 0)//���֣��̣�����0���ܱ�2���������ظ�����
            n /= 2;                //�����µ�����
        if (n != 1) cout << "No";  //�жϽ��
        else cout << "Yes";

    }
    void  func4_302()
    {
        int n;
        cin >> n;
        if (n & (n - 1)) cout << "No";//����λ��������ж�
        else cout << "Yes";

    }
    void  func4_32()
    {
        int x = 3, y = 5;
        x ^= y;
        y ^= x;
        x ^= y;
        cout << "x=" << x << ",y=" << y;

    }
    void  func4_33()
    {
        int x, y;
        cin >> x >> y;
        cout << (x & y) + ((x ^ y) >> 1);

    }
}
