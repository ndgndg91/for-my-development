#include <stdio.h>
#include <stdlib.h>

int alloc_dyn_array(int nSize, int** ppResult);

int main()
{
	int nSize = 3, i = 0, errcode = 0;
	int* pInt_array = NULL;

	errcode = alloc_dyn_array(nSize, &pInt_array);

	if( 0 == errcode)
	{
		pInt_array[0]= 1;
		pInt_array[1]= 2;
		pInt_array[2]= 3;
	
		for(i =0; i< nSize; i++)
		{
			printf("���� pInt_array[%d] �� ��: %d, �ּ� : %p\n",
				i, *(pInt_array + i), pInt_array + i);
		}

	}

	return 0;

}

int alloc_dyn_array(int nSize, int** ppResult)
{
	int result =0;
	int* pArray = NULL;
	if(nSize > 0 && NULL != ppResult)
	{
			
		pArray = (int*) malloc(sizeof(int) * nSize);
		if(NULL != pArray)
		{
			*ppResult = pArray;
		}
		else
		{
			result =1;
			printf("���� : �޸� �Ҵ�\n");
		}
	}
	else
	{
		result = 2;
		printf("���� : �Է� �Ű�����\n");
	}

	return result;
}
