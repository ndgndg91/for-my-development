#include <stdio.h>
#include <stdlib.h>

int alloc_dyn_array(int nSize, double default_value, double** ppResult);

int main()
{
	int nSize = 0, i = 0, errcode = 0;
	double* pDouble_array = NULL;

	printf("원소의 개수는 ? (0보다 커야합니다)");
	scanf("%d", &nSize);

	if(nSize <=0)
	{
		printf("0보다 커야합니다. \n");
		return 0;
	}

	errcode = alloc_dyn_array(nSize, 0,&pDouble_array);

	if( 0 == errcode)
	{
		for(i = 0; i< nSize; i++)
		{
			printf("%d번째 값은?",i);
			scanf("%lf",&(pDouble_array[i]));
		}
		
	
		for(i =0; i< nSize; i++)
		{
			printf("변수 pDouble_array[%d] 의 값: %lf, 주소 : %p\n",
				i, *(pDouble_array + i), pDouble_array + i);
		}

	}

	return 0;

}

int alloc_dyn_array(int nSize,double default_size, double** ppResult)
{
	int result =0;
	double* pArray = NULL;
	if(nSize > 0 && NULL != ppResult)
	{
			
		pArray = (double*) malloc(sizeof(double) * nSize);
		if(NULL != pArray)
		{
			*ppResult = pArray;
		}
		else
		{
			result =1;
			printf("오류 : 메모리 할당\n");
		}
	}
	else
	{
		result = 2;
		printf("오류 : 입력 매개변수\n");
	}

	return result;
}
