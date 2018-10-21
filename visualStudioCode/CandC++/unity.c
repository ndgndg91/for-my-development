#include <stdio.h>

typedef union _s_score
{
    char grade;
    int score;
} s_score;

int main(int argc, char const *argv[])
{
    /* code */
    s_score s1 = {0}, s2 = {0};

    s1.grade = 'A';
    s2.score = 99;

    printf("s1 Grade(grade) : %c\n", s1.grade);
    printf("s1 Score(score) : %d\n", s1.score);
    
    printf("s2 Grade(grade) : %c\n", s2.grade);
    printf("s2 Score(score) : %d\n", s2.score);
    return 0;
}
