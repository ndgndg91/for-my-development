package hackerrank._30DaysOfCode.Day16;

import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String S = in.next();
        try {
            System.out.println(Integer.parseInt(S));
        } catch (Exception e){
            System.out.println("Bad String");
        }
    }
}

