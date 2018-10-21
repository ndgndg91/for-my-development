#include <stdio.h>

typedef enum _GradeType { TYPE_GRADE, TYPE_SCORE} GradeType;
typedef struct _my_score
{
    GradeType type;
    union
    {
        char grade;
        int score;
    } result;
} my_score;

int main()
{
    int grade_type = TYPE_GRADE;
    my_score s1 = {0};

    printf("GradeType input : ( 0 : Grade, 1 : Score)?");
    scanf("%d", &grade_type);

    switch (grade_type){
        case TYPE_GRADE:
        {
            char temp[10] = {0};
            printf("input Grade ( A ~ F )");
            scanf("%s", temp);
            s1.result.grade = temp[0];
            break;
        }
        case TYPE_SCORE:
            printf("input Score ( 0 ~ 100 )");
            scanf("%d", &s1.result.score);
            break;
        default:
            printf("Wrong Type");
            break;
    }

    switch (grade_type){
        case TYPE_GRADE:
            printf("Grade : %c", s1.result.grade);
            break;
        case TYPE_SCORE:
            printf("Score : %d", s1.result.score);
            break;
        default:
            break;
    }

    return 0;
}