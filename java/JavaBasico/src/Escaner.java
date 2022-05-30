import java.util.Scanner;

public class Escaner {

	public static void main(String[] args) {
		
		Scanner escaner = new Scanner(System.in);
		System.out.println("Escribe un número");
		int numero = escaner.nextInt();
		numero++;
		
		//Para igresar un cadena de caraceres
		//Strign numero = escaner.nextLine()
		
		System.out.println(numero);

	}

}
