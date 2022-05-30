package com.arreglos;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
		
		//Matrices o arreglos/arrays
		//Solo pueden tener un tipo de dato
		//debemos especificar su tamaño
		
		int [] arrNumeros = new int[5];
		
		//numeracion basada en 0
		arrNumeros[0] = 1;
		arrNumeros[1] = Integer.parseInt("1");
		arrNumeros[2] = 123;
		arrNumeros[3] = 1454;
		arrNumeros[4] = 14354;
		
//		System.out.println(Arrays.toString(arrNumeros));
//		System.out.println(arrNumeros[0]);
//		System.out.println(arrNumeros[1]);
//		System.out.println(arrNumeros[2]);
//		
		for(int i=0; i<arrNumeros.length; i++) {
			System.out.println(arrNumeros[i]);
		}
		
		//forEach
		int conteo = 0;
		for(int elemento : arrNumeros) {
			conteo++;
			System.out.println("Elemento = " + conteo + " = " + elemento);
		}
		
		//Arreglo que guarda objetos
		
		Persona persona1 = new  Persona("Katia", 28);
		Persona persona2 = new  Persona("Paola", 18);
		
		//Object arrPersona[] = new Object[3];
		Persona arrPersona[] = new Persona[3];
		
		arrPersona[0] = persona1;
		arrPersona[1] = persona2;
		arrPersona[2] = new Persona("Pablo", 50);
		
		System.out.println(Arrays.toString(arrPersona));
		
		for(Persona e : arrPersona) {
			System.out.println(e.nombre + " - " + e.edad);
		}
		
		//Arreglos  literales
		String []arrString = {"Hola", "Mi", "nombre", "es"};		
		System.out.println(Arrays.toString(arrString));
	}

}
