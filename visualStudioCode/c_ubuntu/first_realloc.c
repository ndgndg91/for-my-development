#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
	int i = 0;
	int count = 2;
	int* pint_array = NULL;
	int* pint_array2 = NULL;

	pint_array = (int*) malloc(sizeof(int) * count);
	if( NULL != pint_array)
	{
		memset(pint_array, 0 , sizeof(int) * count);
		
		printf("함수 memset() 호출 이후\n");
		for(i = 0; i< count; i++)
		{
			printf("%d: %d\n",i,pint_array[i]);
		}

		count =3;
		pint_array2 = (int*) realloc(pint_array, sizeof(int) * count);
		if( NULL != pint_array2)
		{
			printf("함수 realloc() 호출 이후 \n");
			
			if(pint_array == pint_array2)
			{
				printf("기존 메모리 주소 %p를 기반으로 확장됨", pint_array);
			}
			else
			{
				printf("기존 메모리 주소 %p, 새로운 주소 %p 기반으로 확장됨 \n",pint_array,pint_array2);
			}
			for(i = 0; i< count; i++)
			{
				printf("%d: %d\n",i,pint_array[i]);
			}
		}
		
		if( NULL != pint_array2 && pint_array != pint_array2)
		{
			free(pint_array2);
			pint_array = NULL;
		}
		if(NULL != pint_array) free(pint_array);
	}
	
	return 0;

}
