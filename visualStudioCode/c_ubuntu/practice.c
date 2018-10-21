#include <stdio.h>

int main()
{
	int my_int_array[] = {10,20,30,40,50,60,70};
	int *pint_value = &my_int_array[0];
	
	int index = 0;
	int count = sizeof(my_int_array)/sizeof(int);


	printf("인덱스 값은(0~%d)? ",count-1);
	scanf("%d", &index);

	if ( index >= 0 && index < count ){
		pint_value = pint_value + index;
		printf("인덱스 %d 에 해당하는 값은 %d 입니다. \n", index, *pint_value);
	}
	else
	{
		printf("인덱스 값은 0 보다 크고, %d보다 작아야 합니다. \n", count);
	}
	return 0 ;

}
