package babyShark;

import java.util.Scanner;

public class Main {
    static class Shark {
        int y;
        int x;
        int size;
        int eatCnt;

        public Shark() {
            this.size = 2;
            this.eatCnt = 0;
        }
    }

    public static void main(String[] args) {
        Shark baby = new Shark();
        Scanner scn = new Scanner(System.in);
        int N = scn.nextInt();
        int[][] area = new int[N][N];
        for (int i = 0; i < area.length; i++) {
            for (int j = 0; j < area.length; j++) {
                area[i][j] = scn.nextInt();
                if (area[i][j] == 9) {
                    baby.y = i;
                    baby.x = j;
                }
            }
        }
        scn.close();
    }
}
