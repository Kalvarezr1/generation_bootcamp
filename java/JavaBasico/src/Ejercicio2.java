import java.util.Scanner;

public class Ejercicio2 {
	
	/*
	 * Escribe una aplicación que calcule el indice de masa corporal.

y que lance un mensaje según lo siguiente:

Si tiene un IMC entre 18.5 y 25:
"Your weigh ratio is good"

si es menor de 18.5 o mayor de 25:
"Your health is not good"

Formula peso (kg) / [estatura (m)]2

*/

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
	       
        double peso,estatura,imc;
       
        System.out.println("Cual es su peso en kg ");
        peso= sc.nextDouble();
        System.out.println("Cual es tu estatura en m");
        estatura= sc.nextDouble();
       
        imc= peso/(estatura*estatura);
        System.out.println("SU IMC ES: "+imc);
           
        if (imc<18.5) {
            System.out.println("Your health is not good");
        } else if (imc>=18.5 && imc<=24.9) {
            System.out.println("Your weigh ratio is good");
        } else if (imc>=25) {
            System.out.println("Your health is not good");
        }

	}

}
