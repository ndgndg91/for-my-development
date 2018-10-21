#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct s_student
{
    char name[20];
    int age;
    long number;
};
void print_student_info(struct s_student student);
void input_student_info(struct s_student *pStudent);

int main(int argc, char const *argv[])
{
    /* code */
    struct s_student student = {"NAM", 28, 60121315};

    printf("Initial Value\n");
    print_student_info(student);

    input_student_info(&student);
    printf("After Calling Function input_student_inf() \n");
    print_student_info(student);

    return 0;
}

void print_student_info(struct s_student student)
{
    printf(
        "Name : %s \t Age : %d \t Number : %ld\n",
        student.name, student.age, student.number
    );
}

void input_student_info(struct s_student * pStudent)
{
    if(NULL != pStudent)
    {
        printf("Student Name ? ");
        scanf("%s", pStudent->name);
        printf("Student Age ? ");
        scanf("%d", &pStudent->age);
        printf("Student Number ? ");
        scanf("ld", &pStudent->number);
        
        printf("Call by Value\n");
        print_student_info(*pStudent);
    }
    else
    {
        printf("NULL !!!\n");
    }
}