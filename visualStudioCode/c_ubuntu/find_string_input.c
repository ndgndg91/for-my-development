#include <stdio.h>
#include <string.h>

int main()
{
	char str_source[1024] = {0};
	char str_find[1024] = {0};
	char *pFind = NULL;
	int count = 0;

	printf("첫 번째 문자열은 ? ");
	scanf("%s",str_source);

	printf("찾고 싶은 문자열은 ? ");
	scanf("%s",str_find);

	if(strlen(str_source) <= 0 || strlen(str_find) <= 0 )
	{ 
		printf("공백 문자열은 안되요!\n");
		return 0;
	}
	
	pFind = strstr(str_source, str_find);
	while (NULL != pFind)
	{
		count++;
		pFind = strstr(pFind + strlen(str_find), str_find);
	}

	printf("문자열 \"%s\" 에는 문자열 \"%s\" 이 %d번 있습니다\n", str_source, str_find, count);

	return 0;
}
