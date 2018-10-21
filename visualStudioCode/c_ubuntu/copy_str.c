#include <stdio.h>
#include <string.h>

int main()
{
	char str_src[] = "Hi";
	char str_dest[11] = {0};
	char str_dest_notempty[11] = "ABCDEFGHIJ";

	printf("복사전, 원본 : [%s] \t 대상 : [%s][%s]\n", str_src, str_dest, str_dest_notempty);

	strcpy(str_dest, str_src);
	printf("복사후(1), 대상 : [%s] \n", str_dest);

	strcpy(str_dest_notempty, "Hi2");
	printf("복사후(2), 대상 : [%s] \n",str_dest_notempty);

	return 0 ;
}

