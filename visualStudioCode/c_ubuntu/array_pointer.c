#include <stdio.h>

int main()
{
	int int_array[3] = { 1,2,3};
	int* pint_value = NULL;
	int* pint_mid_value = NULL;


	pint_value = &int_array[0];
	pint_mid_value = pint_value + 1;
	printf("pint_value 주소 : %p \n", pint_value);
	printf("*pint_vlaue 값 : %d \n", *pint_value);

	printf("pint_mid_value 주소 : %p \n", pint_mid_value);
	printf("*pint_mid_value 값 : %d \n", *pint_mid_value);

	return 0;
}
