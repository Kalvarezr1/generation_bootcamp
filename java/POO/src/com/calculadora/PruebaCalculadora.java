package com.calculadora;

import java.util.Scanner;

public class PruebaCalculadora {

	public static void main(String[] args) {
		System.out.println("Vamos a calcular");
		
		//Instanciar-crear un objeto a partir de una clase
		Calculadora cal = new Calculadora();
		
		//metodo que no retorna nada - void
		cal.sumarMensaje();
		
		//metodo que regresa un valor
		String mensaje = cal.mensaje();
		System.out.println(mensaje);
		
		double prueba = cal.prueba();
		System.out.println(prueba);
		
		//metodos con argumentos 
		int suma = cal.sumar(10, 20);
		System.out.println(suma);
		
		cal.sumarM(8, 5);
		System.out.println(suma);
		
		//instanciar
		Areas calAreas = new Areas();
		
		calAreas.mensaje();
		
		int areaC = calAreas.areaCuadrado(5);
		System.out.println(areaC);
		
		double areaT = calAreas.areaTriaungulo(5,10);
		System.out.println(areaT);
	}

}
