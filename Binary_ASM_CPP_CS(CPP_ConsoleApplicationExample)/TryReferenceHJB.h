#include <string>
#include <iostream>

#ifndef _TRYREFERENCEHJB_H_
#define _TRYREFERENCEHJB_H_
using namespace std;

namespace TryReferencedFirst {
	void tryFunc(string a, string b);//void tryFunc(string a, string b)����������������void tryFunc(string a, string b)����Ľӿ�
}
namespace TryReferencedSecond {
	int tryFunc(int a, int b); //int tryFunc(string a, string b)����������������int tryFunc(string a, string b)����Ľӿ�
}
namespace TryReferencedThird {
	string tryFunc(string a, string b);//string tryFunc(string a, string b)����������������string tryFunc(string a, string b)����Ľӿ�
}
#endif

// ��һ�������ռ�
namespace TryReferencedFirst {
	void tryFunc(string a, string b) { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����
		cout << "���Ե�һ�����ƿռ�:" + a + b << endl;
	}
}
// �ڶ��������ռ�

namespace TryReferencedSecond {
	int tryFunc(int a, int b) { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����int�������͵�����ʵ����
		cout << "���Եڶ������ƿռ�:" << (a + b) << endl;
		return (a * b);
	}
}


namespace TryReferencedThird {
	string tryFunc(string a, string b) { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����
		//cout << "����Source_Space���ƿռ�:" + a + b << endl;
		return(a + b);
	}
}
namespace TryReferencedFourth {
	string tryFunc(string a, string b,string c) { //����tryFunc�������ͣ��ú������ͣ����ܲ���1��string�������ͣ����ܲ���2��string�������ͣ������ؽ����void�������͵�����ʵ����
		//cout << "����Source_Space���ƿռ�:" + a + b << endl;
		return(a + b+c);
	}
}
