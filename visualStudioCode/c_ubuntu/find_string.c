#include <stdio.h>
#include <string.h>

int main()
{
	char str_source[] = "ABCabc012ABC";
	char *pFind = NULL;
	int position = 0;

	pFind = strstr(str_source, "abc");
	if(NULL != pFind)
	{
		printf("pFind 주소값 %p pFind 첫번째 값 : %c \n",pFind, *pFind);
		position = pFind - str_source;
		printf("문자열 '%s' 의 위치 : %d\n","abc",position);
	}
	else
	{
		printf("문자열 '%s' 찾기에 실패했습니다\n","abc");
	}

	pFind = strstr(str_source, "fgh");
	if(NULL == pFind)
	{
		printf("문자열 '%s' 찾기에 실패했습니다\n","fgh");
	}
	else
	{
		position = pFind - str_source;
		printf("문자열 '%s' 의 위치 : %d\n", "fgh", position);
	}


	return 0;
}
