
#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main()
{
	int count = 0;
	int previousCnt = -1000000000;
	int* dynamicIntegerArray = NULL;
	int* reallocArray = NULL;
	int temp = 0;
	do
	{
//		printf("현재 원소의 개수는 %d 개입니다.\n", count);
		printf("원소의 개수는 ? (0 이하 값을 입력하면 종료됩니다) ?");
		scanf("%u", &count);
		if(count > 0)
		{
			if(count > previousCnt)
			{
				if( NULL == dynamicIntegerArray )
				{
					dynamicIntegerArray = (int*) malloc(sizeof(int)*count);
					memset(dynamicIntegerArray, 0 , sizeof(int) * count);
					for(int i = 0; i< count; i++)
					{
						printf("%d 번째 원소의 값은 ? ",i);
						scanf("%u", &temp);
						dynamicIntegerArray[i] = temp;
					}
					for(int i = 0; i< count; i++)
					{
						printf("[%d] %d\n",i,dynamicIntegerArray[i]);
					}
				}
				else
				{
					reallocArray = (int*) realloc(dynamicIntegerArray, sizeof(int) * count);
					if(NULL != reallocArray)
					{
						dynamicIntegerArray = reallocArray;
					}
					for(int i =0; i< count; i++)
					{
						printf("%d 번째 원소의 값은 ? ",i);
						scanf("%u", &temp);
						dynamicIntegerArray[i] = temp;
					}
					for(int i = 0; i< count; i++)
					{
						printf("[%d] %d\n", i, dynamicIntegerArray[i]);
					}
				}
				previousCnt = count;
			}
			else
			{
				printf("%d보다 커야 합니다.\n", previousCnt);
			}
		}
	}while(count > 0 );
	if ( NULL != dynamicIntegerArray ) free(dynamicIntegerArray);
	return 0;
}
