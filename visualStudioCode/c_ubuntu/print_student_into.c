#include <stdio.h>

struct simple_student
{
	char name[20];
	int age;
	long number;
};

int main()
{
	struct simple_student student = {0};

	struct simple_student student_not_init, student_not_init2;

	struct simple_student student_init = {0}, student_init2 = { 0 };

	struct simple_student student_with_value = { "남동길", 28, 35165};

	printf("이름 입력 : ");
	scanf("%s", student.name);

	printf("나이 입력 : ");
	scanf("%d", &student.age);

	printf("학번 &입력 : ");
	scanf("%ld", &student.number);

	printf("이름 : %s\n", student.name);
	printf("나이 : %d\n", student.age);
	printf("학번 : %ld\n", student.number);

	printf("이름 : %s\n", student_with_value.name);
	printf("나이 : %d\n", student_with_value.age);
	printf("학번 : %ld\n", student_with_value.number);

	return 0;
}
