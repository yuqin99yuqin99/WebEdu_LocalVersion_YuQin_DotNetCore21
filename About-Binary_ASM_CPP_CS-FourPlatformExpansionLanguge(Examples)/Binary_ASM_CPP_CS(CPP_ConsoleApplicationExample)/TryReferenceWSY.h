#include <string>
#include <iostream>

#ifndef _TRYREFERENCEWSY_H_
#define _TRYREFERENCEWSY_H_
using namespace std;

namespace TryReferencedFirstWSY {
	void tryFunc(); //void tryFunc(string a, string b)����������������void tryFunc(string a, string b)����Ľӿ�
}
#endif

// ��һ�������ռ�
namespace TryReferencedFirstWSY {
	void tryFunc() { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����
		const int MAXN = 10;
		int a[MAXN];
		int i=0;
		int n=0;
		cin >> n;
		for (i = 0; i < n; i++)
			cin >> a[i];
		for (i = n - 1; i >= 0; i--)
			cout << a[i] << ";";
	}
}
