#include <stdio.h>

int add(int value1, int value2);
int substract(int value1, int value2);
int multiply(int value1, int value2);

int (*func_array[3])(int, int) = {add, substract, multiply};

int main()
{
	int (*pfunc_pointer) (int, int) = NULL;

	int result = 0;
	int value1 = 0;
	int value2 = 0;
	int type =0;

	printf("첫 번째 값은? " );
	scanf("%d", &value1);

	printf("두 번째 값은? ");
	scanf("%d", &value2);

	printf("계산 방식(0: 더하기, 1: 빼기, 2: 곱하기)은 ? ");
	scanf("%d", &type);

	if(type >= 0 && type <= 2)
	{
		pfunc_pointer = func_array[type];
		result = pfunc_pointer(value1, value2);
		printf("결괏값 : %d\n", result);
	}
	else
	{
		printf("지원하지 않는 계산 방식입니다.\n");
	}
}

int add(int value1, int value2)
{
	return value1 + value2;
}

int substract(int value1, int value2)
{
	return value1 - value2;
}

int multiply(int value1, int value2)
{
	return value1 * value2;
}
