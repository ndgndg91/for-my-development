#include <stdio.h>
#include <stdlib.h>

void getCountInput(int* count){
	printf("학생 수는 ?(0 이하의 수를 입력하면 종료됩니다 :  ");
	scanf("%u",count);
}
void getScoresInput(int* array, int c)
{
	signed int temp = 0;
	for(int i =0; i<c; i++){
		printf("%d 번째 학생의 점수는 ? ",i+1);
		scanf("%u",&temp);
		*(array + i ) = temp;
	}
}
void getSumAndAvg(int* array, int c, int* sum, double* avg)
{
	for(int i =0; i< c; i++){
		*sum += *(array + i);
	}
	if( 0 != c)
	{
		*avg = *sum / c;
	}
	else
	{
		printf("총점수 합계나 학생 수가 0입니다.");
	}
}
void truncateVariables(int* array, int* sum, double* avg)
{
	free(array);
	*sum = 0;
	*avg = 0;
}
int main()
{	
	int count = 1;
	int* dynamicArrayScores = NULL;
	double avg = 0;
	int sum = 0;
	do
	{
			getCountInput(&count);
			if(count <= 0 ){
				printf("0 이하를 입력하셨기 때문에 프로그램을 종료합니다.\n");
				return 0;
			}else{
				printf("학생 수  : %d\n",count);
			}
			dynamicArrayScores = (int*) malloc(sizeof(int)*count);
			getScoresInput(dynamicArrayScores, count);
			getSumAndAvg(dynamicArrayScores, count, &sum, &avg);
			printf("총점은 %d 입니다.\n",sum);
			printf("평균 점수는 %.6f 입니다.\n",avg);
			printf("다시 회원수를 입력하세요.\n");
			truncateVariables(dynamicArrayScores, &sum, &avg);
	}
	while(count > 0);
	if(dynamicArrayScores != NULL){
		printf("메모리 해제가 되지 않아서 dynamicArrayScores메모리를 해제 합니다!\n");
		free(dynamicArrayScores);
	}
	return 0;
}
