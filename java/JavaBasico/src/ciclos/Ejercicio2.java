package ciclos;

import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
		/*Ejercicio

Validaci�n de correo

Escribe un programa que reciba un correo y  que, usando un ciclo for, eval�e si el correo contiene un caracter de '@'.
Si lo tiene, el programa debe mostrar en consola:
"Es un correo v�lido"

Si no lo tiene, el programa debe mostrar:
"No es un correo v�lido"
*/
		
		Scanner scn = new Scanner(System.in);
		String correo = scn.nextLine();
		
		boolean valido = false;
			
			if(correo.indexOf('@')==-1) {
	            System.out.println("Este es NO un correo valido");
	        }else {
	            System.out.println("Este es un correo valido");
	        }
		}
}
