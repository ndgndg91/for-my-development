#include <stdio.h>

int add(int value1, int value2);

int main()
{
	int (*pfunc_pointer)(int, int) = NULL;

	int result = 0;
	int value1 = 0;
	int value2 = 0;

	pfunc_pointer = add;

	printf("첫 번째 값은? ");
	scanf("%d", &value1);

	printf("두 번째 값은? ");
	scanf("%d", &value2);

	result = pfunc_pointer(value1, value2);
	printf("결괏값 : %d\n" ,result);
}

int add(int value1, int value2)
{
	return value1 + value2;
}
