#include <stdio.h>

struct s_teacher
{
	long number;
	char name[20];
	int age;
};

struct s_student
{
	struct s_teacher nested_teacher;

	long number;
	char name[20];
	int age;
	int score;
};

void print_student_info(struct s_student student);

int main()
{
	struct s_student student1 = {{1234,"Kim", 35}, 4567, "Lee", 20, 30 };
	struct s_student student2 = {{1234,"Choi"}, 4568, "Lee", 20, 30 }; // 선생 age는 자동으로 0으로 초기화
	struct s_student student3 = {1234,"Kim", 35, 4569, "Bak", 21 }; //학생 score는 자동으로 0 으로 초기화

	
	print_student_info(student1);
	print_student_info(student2);
	print_student_info(student3);
	
	return 0;
}

void print_student_info(struct s_student student)
{
	printf("이름 : %s\t 나이 : %d\t 학번 : %ld\t 점수 : %d\n", student.name, student.age, student.number, student.score);
	printf("담임선생 이름 : %s\t 담임선생 나이 : %d\t 담임선생 번호 : %ld\n",student.nested_teacher.name, student.nested_teacher.age, 
			student.nested_teacher.number);

}
