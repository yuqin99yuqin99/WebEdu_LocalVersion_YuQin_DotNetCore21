;TITLE Hello World!
 
OPTION CASEMAP:NONE									;大小写敏感,NONE：敏感；ALL：不敏感
 
INCLUDELIB ucrt.lib									;引入静态数据链接库，相当于#include <stdio.h>
INCLUDELIB legacy_stdio_definitions.lib
INCLUDELIB kernel32.lib								;ExitProcess
 
.MODEL FLAT,STDCALL									;FLAT：存储模式（平坦内存模式）
													;STDCALL：语言类型（从右向左压栈）
;声明需要使用的函数头 
printf		PROTO  C,								;printf，不由被调用者清栈，而是由调用者负责清栈
			:DWORD,									;格式控制串首地址
			:VARARG									;输出项 
 
scanf		PROTO  C,								;scanf，不由被调用者清栈，而是由调用者负责清栈
			:DWORD,									;格式控制串首地址
			:VARARG									;输入项 
 
ExitProcess PROTO,									;exit program 
			dwExitCode:DWORD						;return code
 
.DATA												;全局静态区 
	msg DB "Hello World!",							;分配字符串空间，存储“Hello,World!” 
	0dh, 0ah, 0										;回车，换行 
 
.CODE  
main PROC
	PUSH OFFSET msg									;获取msp的偏移值，压栈
	CALL printf										;调用上面声明的printf
 
	PUSH 0H
	CALL ExitProcess
 
main ENDP  
	END main
