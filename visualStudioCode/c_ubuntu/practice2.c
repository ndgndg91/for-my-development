#include <stdio.h>

int main()
{
	int my_int_array[] = {11,22,33,44,55,66,77};
	int* pint_value = &my_int_array[0];

	int index = 0;
	int count = sizeof(my_int_array) / sizeof(int);

	int max_value = 0, min_value = 999, sum_value = 0;
	double average_value = 0;

	for(index = 0; index < count; index++)
	{
		if ( *pint_value > max_value)
		{
			max_value = *pint_value;
		}
		if(*pint_value < min_value)
		{
			min_value = *pint_value;
		}
		sum_value += *pint_value;
		pint_value++;
	}

	average_value = sum_value / (double)count;
	printf("최댓값 : %d\n",max_value);
	printf("최솟값 : %d\n",min_value);
	printf("평균값 : %f\n",average_value);

	return 0;

}
