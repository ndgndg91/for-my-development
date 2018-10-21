#include <stdio.h>
#include <stdlib.h>

int basic_calc(double value1, double value2, int type, double *pResult);

int main(int argc, char **argv )
{
	int type= 0, error_no = 0;
	double value1=0, value2=0, result=0;

	printf("첫 번째, 두 번째 값은 ? ");
	scanf("%lf %lf", &value1, &value2);

	printf("연산 종류는(1:+, 2:-, 3:*, 4:/)? ");
	scanf("%d", &type);

	error_no = basic_calc(value1, value2, type, &result);
	if( 0 ==error_no)
	{
		printf("연산 결과 : %f\n", result);
	}
	else
	{
		printf("연산 도중 오류가 발생했습니다[%d]\n", error_no);
	}
	return 0;
}

int basic_calc(double value1, double value2, int type, double *pResult)
{
	int error_no =0;
	double temp_result = 0;
	
	if(NULL != pResult)
	{
		switch(type)
		{
		case 1:
			temp_result = value1+value2;
			break;
		case 2:
			temp_result = value1-value2;
			break;
		case 3:
			temp_result = value1*value2;
			break;
		case 4:
			if( 0 != value2)
			{
				temp_result= value1/value2;
			}
			else
			{
				error_no = 30;
			}
			break;
		default:
			error_no = 20;
			break;
		};
	}
	else
	{
		error_no=10;
	}
	if( 0 == error_no)
	{
		*pResult = temp_result;
	}
	return error_no;
}
