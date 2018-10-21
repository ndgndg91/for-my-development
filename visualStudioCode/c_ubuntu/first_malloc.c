#include <stdio.h>
#include <stdlib.h>

int main()
{
	int i = 0;
	int count = 0;
	double* pBMI = NULL;

	printf("원소의 개수는?");
	scanf("%u", &count);

	if(count <=0){
		printf("원소의 개수는 0보다 커야합니다.");
	}
	
	pBMI  = (double*) malloc(sizeof(double) * count);//동적 메로리 할당

	if( NULL != pBMI)
	{
		printf("메모리 할당 성공, 원소의 개수: %d, 배열의 크기 : %ld\n",
			count, sizeof(double) * count);
	
		for(i = 0 ; i< count; i ++ ){
			*(pBMI + 1) = 10.0 *1;

			printf("%d - > %f\n", i , *(pBMI+i));
		}
		//메모리 해제가 없음!!
	}
	else
	{
		printf("메모리 할당에 실패했습니다. " );
	}
	return 0;
}
