;TITLE Hello World!
 
OPTION CASEMAP:NONE									;��Сд����,NONE�����У�ALL��������
 
INCLUDELIB ucrt.lib									;���뾲̬�������ӿ⣬�൱��#include <stdio.h>
INCLUDELIB legacy_stdio_definitions.lib
INCLUDELIB kernel32.lib								;ExitProcess
 
.MODEL FLAT,STDCALL									;FLAT���洢ģʽ��ƽ̹�ڴ�ģʽ��
													;STDCALL���������ͣ���������ѹջ��
;������Ҫʹ�õĺ���ͷ 
printf		PROTO  C,								;printf�����ɱ���������ջ�������ɵ����߸�����ջ
			:DWORD,									;��ʽ���ƴ��׵�ַ
			:VARARG									;����� 
 
scanf		PROTO  C,								;scanf�����ɱ���������ջ�������ɵ����߸�����ջ
			:DWORD,									;��ʽ���ƴ��׵�ַ
			:VARARG									;������ 
 
ExitProcess PROTO,									;exit program 
			dwExitCode:DWORD						;return code
 
.DATA												;ȫ�־�̬�� 
	msg DB "Hello World!",							;�����ַ����ռ䣬�洢��Hello,World!�� 
	0dh, 0ah, 0										;�س������� 
 
.CODE  
main PROC
	PUSH OFFSET msg									;��ȡmsp��ƫ��ֵ��ѹջ
	CALL printf										;��������������printf
 
	PUSH 0H
	CALL ExitProcess
 
main ENDP  
	END main
