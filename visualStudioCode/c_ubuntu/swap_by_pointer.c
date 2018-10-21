#include <stdio.h>

void swap_by_pointer(int* pvalue1, int* pvalue2)
{
	if (NULL != pvalue1 && NULL != pvalue2)
	{
		int *temp = pvalue1;
		pvalue1 = pvalue2;
		pvalue2 = temp;
	
		printf("함수 내부(주소) : %p, %p\n",(void *) pvalue1,(void *) pvalue2);
		printf("함수 내부(가리키는 값) : %d, %d\n", *pvalue1,*pvalue2);
	}
	else
	{
		printf("swap() 내의 NULL 포인터 오류");
	}
}

int main()
{
	int value1 = 100, value2 = 200;
	int* pvalue1 = &value1;
	int* pvalue2 = &value2;

	printf("함수 호출 전(주소): %p, %p\n",(void *) pvalue1,(void *) pvalue2);
	printf("함수 호출 전(가리키는 값) : %d, %d\n", *pvalue1, *pvalue2);

	swap_by_pointer(pvalue1, pvalue2);

	printf("함수 호출 후(주소) : %p, %p\n",(void *)pvalue1,(void *) pvalue2);
	printf("함수 호출 후(가리키는 값) : %d, %d\n", *pvalue1, *pvalue2);

	return 0 ;

}
