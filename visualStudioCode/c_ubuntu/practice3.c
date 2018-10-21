#include <stdio.h>

void print_array_reverse(const double* pArray, int size);

int main()
{
	double double_array[] = {10.0 , 20.1, 30.2, 40.3};
	int size = sizeof(double_array) / sizeof(double);

	print_array_reverse(double_array, size);

	return 0;
}


void print_array_reverse(const double* pArray, int size)
{
	int i =0;
	const double* pdouble = NULL;

	if(NULL != pArray && 0 < size)
	{
		pdouble = pArray + size -1;
		for( i = 0; i< size; i++)
		{
			printf("[%d] %5.2f \n", i, *pdouble);
			pdouble--;
		}
	}
	else
	{
		printf("매개변수로 NULL 혹은 원소의 개수가 0개 입니다\n");
	}
}
