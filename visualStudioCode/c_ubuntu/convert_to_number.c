#include <stdio.h>
#include <stdlib.h>

int main()
{
	char str_int[] = "10";
	char str_long[] = "10";
	char str_double[] = "10.0";

	int int_value = atoi(str_int);
	long long_value = atol(str_long);
	double double_value = atof(str_double);

	printf("무자열 \"%s\"을 숫자 %d로 변환 \n", str_int, int_value);
	printf("무자열 \"%s\"을 숫자 %ld로 변환 \n", str_long, long_value);
	printf("무자열 \"%s\"을 숫자 %f로 변환 \n", str_double, double_value);

	return 0;
}
