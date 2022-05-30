package com.ejercicio;

public class CalculadoraGeometrica {

	public static void main(String[] args) {
		
		 Perimetro per= new Perimetro();
	        Areas ar= new Areas();
	       
	        per.perCirculo(4);
	        per.perCuadrado(5);
	        per.perTrian(1, 2, 3);
	       
	        ar.areaCirculo(4);
	        ar.areaCuadrado(2);
	        ar.areaTriangulo(3, 4);

	}

}
