#include <stdio.h>

int main()
{
	int numOfStu = 0;
	int tempScore = 0;
	int scores[100] = {0,};
	int total=0;
	double avg;
	printf("학생 수는? " );
	scanf("%d", &numOfStu);
	if(numOfStu < 1 || numOfStu > 100 ) {
		printf("학생수는 1~100명 사이만 가능합니다!!!\n");
		return 0;
	}
	printf("학생 수  : %d\n", numOfStu);
	for(int i = 0; i < numOfStu; i++){
		printf("%d 번째 학생 점수는 ? ", i+1);
		scanf("%d", &tempScore);
		scores[i] = tempScore;
	}
	printf("학생 수 : %d\n", numOfStu);
	for(int i =0; i< numOfStu; i++ ){
		if(scores[i] != 0){
			total += scores[i];
		}
	}
	printf("총점 : %d\n", total);
	printf("평균 : %.6f\n",(double) total/numOfStu);
	return 0;
}
