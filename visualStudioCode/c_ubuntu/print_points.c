#include <stdio.h>

struct s_point
{
	int x;
	int y;
};

struct s_rectangle
{
	struct s_point left_top;
	int width; //너비
	int height; //높이
};

void print_rectangle_info(struct s_rectangle rectangle);
void input_rectangle_info(struct s_rectangle *pRectangle);

int main()
{
	struct s_rectangle rectangle = {0};

	input_rectangle_info(&rectangle);
	print_rectangle_info(rectangle);
	
	return 0;
}

void input_rectangle_info(struct s_rectangle *pRectangle)
{
	if(NULL != pRectangle)
	{
		printf("기준점 (left_top)의 위치 x는 ?");
		scanf("%d", &(pRectangle -> left_top.x));

		printf("기준점 (left_top)의 위치 y는 ?");
		scanf("%d", &(pRectangle -> left_top.y));

		printf("너비는 ? ");
		scanf("%d",&(pRectangle -> width));

		printf("높이는 ? ");
		scanf("%d",&(pRectangle -> height));

	}
	else
	{
		printf("NULL 오류 !!!: input_rectangle_info() \n");
	}
}

void print_rectangle_info(struct s_rectangle rectangle)
{
	printf("Left-top: (%d , %d) \n", rectangle.left_top.x, rectangle.left_top.y);
	printf("Right-top: (%d , %d) \n", rectangle.left_top.x + rectangle.width, rectangle.left_top.y);
	printf("Left-bottom: (%d , %d) \n", rectangle.left_top.x, rectangle.left_top.y + rectangle.height);
	printf("Right-bottom: (%d , %d) \n", rectangle.left_top.x + rectangle.width, rectangle.left_top.y + rectangle.height);
	
}
