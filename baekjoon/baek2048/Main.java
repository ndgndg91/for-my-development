package baek2048;

import java.util.Scanner;

public class Main {

    public static void main(String[] args){
        int[] directions = new int[4];
        int[] choice = new int[5];
        Scanner scn = new Scanner(System.in);
        int N = scn.nextInt();
        int[][] _2048 = new int[N][N];
        for (int i = 0; i < N; i++){
            for (int j = 0; j < N; j++) {
                _2048[i][j] = scn.nextInt();
            }
        }
        int cnt = 0;
        scn.close();
//        for (int i = 0; i < 4; i++) {
//            for (int j = 0; j < 4; j++) {
//                for (int k = 0; k < 4; k++) {
//                    for (int l = 0; l < 4; l++) {
//                        for (int m = 0; m < 4; m++) {
//                            System.out.println(i+""+j+""+k+""+l+""+m+"");
//                        }
//                    }
//                }
//            }
//        }
        move2048(0, _2048);
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++){
                System.out.print(_2048[i][j]);
            }
            System.out.println();
        }

    }
    private static void move2048(int direction, int[][] _2048) {
        switch (direction) {
            case 0 ://up
                for (int i = 0; i < _2048.length; i++) {
                    for (int j = 0; j < _2048.length; j++) {
                        System.out.println(j+"," + i);
                        if (j < _2048.length - 1) {

                            if (_2048[j][i] == _2048[j + 1][i]) {
                                _2048[j][i] += _2048[j + 1][i];
                                _2048[j + 1][i] = 0;
                            }
                            if (j != 0) {
                                if (_2048[j-1][i] == 0) {
                                    _2048[j-1][i] = _2048[j][i];
                                    _2048[j][i] = 0;
                                }
                            }
                        }
                    }
                }
//                for (int i = 0; i < _2048.length; i++){
//                    for (int j = _2048.length - 1 ; j > -1; j--) {
//                        _2048[j][i]
//                    }
//                }
                break;
            case 1://right
                break;
            case 2://down
                break;
            case 3://left
                break;
        }

    }
}
