#include <stdio.h>

int add(int value1, int value2);
int substract(int value1, int value2);
int do_it(int (*func_pointer)(int,int), int value1, int value2);


int main()
{
	int result = 0;
	int value1 = 0;
	int value2 = 0;

	printf("첫 번째 값은? " );
	scanf("%d", &value1);

	printf("두 번째 값은? ");
	scanf("%d", &value2);

	result = do_it(add,value1, value2);
	printf("결괏값 : %d\n", result);

	result = do_it(substract, value1, value2);
	printf("결괏값 : %d\n", result);

}

int add(int value1, int value2)
{
	return value1 + value2;
}

int substract(int value1, int value2)
{
	return value1 - value2;
}

int do_it(int (*func_pointer)(int, int), int value1, int value2)
{
	return func_pointer(value1,value2);
}
