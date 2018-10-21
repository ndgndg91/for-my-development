#include <stdio.h>
#include <stdlib.h>
struct s_student
{
    char name[20];
    int age;
    long number;
    int score;
};

void print_student_info(struct s_student student);
struct s_student get_max_score_student(struct s_student *pStudent,
                                     int student_count);

int main(int argc, char const *argv[])
{
    struct s_student students[] = {
        {"NAM", 28, 60121315, 100},
        {"HOON", 29, 60121316, 100},
        {"MOON", 50, 60121317, 60}
    };

    struct s_student student = {0};
    int count = 0;

    count = sizeof(students)/ sizeof(struct s_student);
    student = get_max_score_student(students, count);

    printf("Highest Scored Student\n");
    print_student_info(student);
    /* code */
    return 0;
}

void print_student_info(struct s_student student)
{
    printf("Name : %s \t Age : %d \t Num : %ld \t Score : %d",
     student.name, student.age, student.number, student.score);
}

struct s_student get_max_score_student(struct s_student *pStudent,
int student_count)
{
    struct s_student student = {0};
    int i = 0;
    int max_score = pStudent->score;
    if(NULL != pStudent){
        for(i = 0 ; i < student_count; i++){
            if(max_score <= (pStudent + i)->score)
            {
                student = *(pStudent + i);
            }
        }
    }
    else
    {
        printf("NULL 오류 !!");
    }

    return student;
}