#include <stdio.h>
#include <string.h>

int main()
{
	char str_src[] = "안녕";
	char str_src2[] = "아녀";
	char str_dest[11] = {0};
	char str_dest_notempty[15] = "ABCDEFGHIJ";

	long length =0;

	printf("문자열 : [%s]의 길이[%lu] \n", str_src, strlen(str_src));

	length = strlen(str_dest);
	printf("문자열 : [%s]의 길이[%lu] \n",str_dest, length);

	length = strlen(str_src2);
	printf("문자열 : [%s]의 길이[%lu] \n",str_src2, length);

	length = strlen(str_dest_notempty);
	printf("문자열 : [%s]의 길이 [%lu] \n",str_dest_notempty, length);

	return 0;
}
