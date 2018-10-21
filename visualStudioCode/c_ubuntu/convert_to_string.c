#include <stdio.h>
#include <stdlib.h>

int main()
{
	char str_int[32] = {0};
	char str_long[32] = {0};
	char str_double[32] = {0};

	int int_value = 10;
	long long_value = 10;
	double double_value = 10.0;

	sprintf(str_int, "%d", int_value);
	sprintf(str_long, "%ld", long_value);
	sprintf(str_double, "%f", double_value);

	printf("숫자 %d를 문자열 \"%s\"로 변환\n",int_value, str_int);
	printf("숫자 %ld를 문자열 \"%s\"로 변환\n",long_value, str_long);
	printf("숫자 %f를 문자열 \"%s\"로 변환\n",double_value, str_double);

	return 0;
}
