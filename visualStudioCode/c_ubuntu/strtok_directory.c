#include <stdio.h>
#include <string.h>

int main()
{
	char str_source[] = "C:\\Users\\ndgndg91\\My Documents\\my_doc.txt";
	char *pToken = NULL;

	pToken = strtok(str_source, "\\");
	while(NULL != pToken)
	{
		printf("토큰 문자열 : %s\n",pToken);
		pToken = strtok(NULL , "\\");
	}


	return 0;
}
