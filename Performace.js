/* 
543212345
5432 2345
543   345
54     45
5       5

*/


function performance(input) {
    var inputPowed = input * 2;
    //var rangeArr = range(input * -1, input);
    for (var i = 0; i < inputPowed / 2; i++) {
        var result = "";
        for (var j = (inputPowed /2) *-1 ; j <= (inputPowed /2); j++) {
            //if (Math.abs(tempInput) <= j && tempInput != 0) { 
            //}
            if (j != 0 && j != -1) {
                if (Math.abs(j) <= i) {
                    result += " ";
                } else { 
                    result += Math.abs(j).toString();
                    //result += "*";
                }
            }
        }
        console.log(result);
    }

}

performance(5);



/*
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function performance(input) { 
    var inputPowed = input * 2;
    //var tempInput = input;
    var rangeArr = range(input * -1, input);
    for (var i = 0; i < inputPowed / 2; i++) {
        var result = "";
        for (var j = 0; j <= inputPowed; j++) {
            //if (Math.abs(tempInput) <= j && tempInput != 0) { 
            //}
            if (rangeArr[j] != 0 && rangeArr[j] != -1) {
                if (Math.abs(rangeArr[j]) <= i) {
                    result += " ";
                } else { 
                    result += Math.abs(rangeArr[j]).toString();
                    //result += "*";
                }
            }
        }
        console.log(result);
    }
}
*/
/* 
 import java.util.Scanner;
import java.lang.Math;
public class Tryyy {
public static void main(String[] args) {
Scanner input=new Scanner (System.in);
int x= input.nextInt();
int y=2*x;
for (int j=0;j<(y/2);j++){
for (int i =0 ; i<=(y) ; i++){

if (Math.abs(x)<=j&&x!=0){
System.out .print(" ");
}

else if (x!=0)
{
    System.out .print(Math.abs(x));}
    x--;
}
x=y/2;
System.out .println("");
}
}
}

*/