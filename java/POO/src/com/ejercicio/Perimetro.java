package com.ejercicio;

public class Perimetro {
	
	 public void perCuadrado(int l) {
	        System.out.println("El perimetro del cuadrado es "+ l*4);
	       
	    }
	    public void perTrian(int l1, int l2, int l3) {
	        int per=l1+l2+l3;
	        System.out.println("El perimetro del triángulo es "+ per);

	    }
	    public void perCirculo(int r) {
	        double per= 2*Math.PI*r;
	        System.out.println("El perimetro del círculo es "+ String.format("%.2f",per) );
	    }

}
