#include <stdio.h>

void swap_by_doublepointer(int** ppvalue1, int** ppvalue2);

int main()
{
	int value1 = 100, value2 = 200;
	int* pvalue1 = &value1;
	int* pvalue2 = &value2;
	

	printf("함수 호출 전(주소): %p, %p\n", pvalue1, pvalue2);
	printf("함수 호출 전(가리키는 값): %d, %d\n", *pvalue1, *pvalue2);

	swap_by_doublepointer(&pvalue1, &pvalue2);

	printf("함수 호출 후(주소): %p, %p\n", pvalue1, pvalue2);
	printf("함수 호출 전(가리키는 값): %d, %d\n", *pvalue1, *pvalue2);

	return 0;
}

void swap_by_doublepointer(int** ppvalue1, int** ppvalue2)
{
	if( NULL != ppvalue1 && NULL != ppvalue2)
	{
		int *temp = *ppvalue1;
		*ppvalue1 = *ppvalue2;
		*ppvalue2 = temp;

		printf("함수내부(주소) %p, %p\n", *ppvalue1, *ppvalue2);
		printf("함수내부(가리키는 값) : %d, %d\n", **ppvalue1, **ppvalue2);
	}
	else
	{
		printf("swap()내의 NULL 포인터 오류");
	}
}
