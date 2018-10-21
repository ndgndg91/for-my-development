#include <stdio.h>
#include <stdlib.h>

typedef enum _Grade {GRADE_S, GRADE_A, GRADE_B, GRADE_C, GRADE_D, GRADE_E, GRADE_F} Grade;
typedef struct _s_student
{
    char name[20];
    unsigned int age;
    unsigned int number;
    Grade grade;
} s_student, *pStudent;

void print_student(s_student s);
char get_grade(Grade grade);

int main(int argc, char const *argv[])
{
    /* code */
    s_student s1 = {"Kim", 20, 60121312, GRADE_B};
    s_student s2 = {"Choi", 20, 60121318, GRADE_D};
    s_student s3 = {"Park", 20, 60121311, GRADE_F};
    s_student s4 = {"Nam", 28, 60121315, GRADE_S};

    print_student(s1);
    print_student(s2);
    print_student(s3);
    print_student(s4);
    return 0;
}

void print_student(s_student s)
{
    printf("NAME : %s \t AGE : %u \t NUMBER : %u \t GRADE : %c\n",s.name, s.age, s.number, get_grade(s.grade));
}

char get_grade(Grade grade)
{
    char result = 0;
    switch(grade){
        case GRADE_S:
            result = 'S';
            break;
        case GRADE_A:
            result = 'A';
            break;
        case GRADE_B:
            result = 'B';
            break;
        case GRADE_C:
            result = 'C';
            break;
        case GRADE_D:
            result = 'D';
            break;
        case GRADE_E:
            result = 'E';
            break;
        case GRADE_F:
            result = 'F';
            break;
        default:
            result = 'N';
            break;
    }

    return result;
}