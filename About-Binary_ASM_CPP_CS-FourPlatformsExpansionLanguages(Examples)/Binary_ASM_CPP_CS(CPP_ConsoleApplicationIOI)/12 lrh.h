#include <string>
#include <iostream>


using namespace std;



namespace liruohan {
    void func3_161()
    {
        int n;
        cin >> n;
        if (n % 3 == 0)
            if (n % 5 == 0) cout << n << "��15�ı���" << endl;
            else cout << n << "��3�ı���������5�ı���" << endl;
        cout << "����" << endl;
    }
    void func3_162()
    {
        int n;
        cin >> n;
        if (n % 3 == 0)
        {
            if (n % 5 == 0) cout << n << "��15�ı���" << endl;
        }
        else cout << n << "����3�ı���" << endl;
        cout << "����" << endl;
    }
    void func3_17()
    {
        float price, discount, amount;   //���嵥�ۡ��ۿۡ��ܼ�
        int count;                     //���幺������
        cout << "���뵥��" << endl;
        cin >> price;
        cout << "���빺�������" << endl;
        cin >> count;
        if (count < 5) discount = 1;  //��������С��5����û���ۿ�
        else if (count < 10) discount = 0.9; //����5������10�����£�����
        else discount = 0.8;    //����10�����ϣ�8��
        amount = price * count * discount;  //�󸶷��ܼ�
        cout << "���ۣ�" << price << "����������" << count << "�ۿۣ�" << discount << "�ܼۣ�" << amount << endl; //������
    }
    void func3_181()
    {
        float a, b, c, maxn;
        cout << "������������";
        cin >> a >> b >> c;
        if (a > b && a > c)  maxn = a;  //�ж�a�Ƿ����
        else if (b > a && b > c)   maxn = b;  //�ж�b�Ƿ����
        else maxn = c;
        cout << "�����Ϊ��" << maxn << endl;
    }
    void func3_182()
    {
        float a, b, c, maxn;
        cout << "��������������";
        cin >> a >> b >> c;
        maxn = a;
        if (b > maxn) maxn = b; //maxnΪa��b�е����ֵ
        if (c > maxn) maxn = c; //maxnΪa,b,c�е����ֵ
        cout << "�����Ϊ��" << maxn << endl;
    }
}
