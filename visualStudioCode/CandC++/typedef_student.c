#include <stdlib.h>
#include <stdio.h>

typedef struct s_teacher
{
    char name[20];
    unsigned int age;
    unsigned int number;
} teacher;

typedef struct s_student
{
    char name[20];
    unsigned int age;
    unsigned long number;
    unsigned int score;

    teacher *pCharge_teacher;
} student, *pStudent;



int main(int argc, char const *argv[])
{
    teacher t = {"Nam", 28 , 60121315};
    student s = {"Kim", 17, 60181315, 60, &t};
    pStudent ps = &s;

    printf("Teacher Name : %s \t Teacher Age : %u \t Teacher Number : %u\n",t.name, t.age, t.number);
    printf("Teacher Name : %s \t Teacher Age : %u \t Teacher Number : %u\n",ps->pCharge_teacher->name, ps->pCharge_teacher->age, ps->pCharge_teacher->number);
    return 0;
}
