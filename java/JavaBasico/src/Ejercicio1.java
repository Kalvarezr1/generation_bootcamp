
public class Ejercicio1 {

	public static void main(String[] args) {
		
		/*
		 *Crear una aplicación que reciba un int entre 1 		y 10 y que regrese un mensaje según la 		calificación ingresada.
		menos de 3 == "Failed!"
		menos de 5 == "Insufficient!"
		menor de 9 == "Good!"
		10 == "Excellent!"
		
		Mayor de 10 == "Grade outside range supported!"
		 */
		
		int num = -15;
		
		if (num <= 3) {
			System.out.println("Failed!");
		}else if(num > 3 && num <= 5) {
			System.out.println("Insufficient!");
		}else if (num > 5 && num <= 9) {
			System.out.println("Good!");
		}else if (num == 10){
			System.out.println("Excellent!");
		}else {
			System.out.println("Grade outside range supported!");
		}
		

	}

}
