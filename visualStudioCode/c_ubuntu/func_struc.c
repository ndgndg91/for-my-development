#include <stdio.h>

struct simple_student
{
	char name[20];
	int age;
	long number;
	int score;
};

void print_student_info(struct simple_student student);
void input_student_info(struct simple_student *pStudent);

int main()
{
	struct simple_student student = {"Lee", 20, 4567, 0};

	printf("초기 값\n");
	print_student_info(student); //값에 의한 호출

	input_student_info(&student);
	printf("함수 input_student_info() 호출 이후 \n");
	print_student_info(student);
	
	return 0;
}

void print_student_info(struct simple_student student)
{
	printf("이름 : %s\n 나이 : %d\n 학번 : %ld\n 점수 : %d\n", student.name, student.age, student.number, student.score);
}

void input_student_info(struct simple_student *pStudent)
{
	if(NULL != pStudent)
	{
		printf("학생 이름 입력 : ");
		scanf("%s", pStudent->name);

		printf("학생 나이 입력 : ");
		scanf("%d", &(pStudent->age));

		printf("학생 학번 입력 : ");
		scanf("%ld", &(pStudent->number));

		printf("학생 점수 입력 : ");
		scanf("%d", &(pStudent->score));

		printf("input_student() 내부 \n");
		print_student_info(*pStudent); //값에 의한 호출 방식
	}
	else
	{
		printf("NULL 오류!!! : input_student_info() \n");
	}
}
