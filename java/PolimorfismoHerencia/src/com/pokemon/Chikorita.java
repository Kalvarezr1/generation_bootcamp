package com.pokemon;

public class Chikorita extends TipoPlanta {
	
	//atributos específicos de la clase hijo - chikorita
	private int numeroCuernitos;

	//Constructor
	public Chikorita(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas, int numeroCuernitos) {
		super(id, edad, nivel, nombre, evolucion, numeroHojas);
		this.numeroCuernitos = numeroCuernitos;
	}
	
	//Metodos
	public void latigo() {
		System.out.println(getNombre() + " usó latigo");
	}
	
	public void atacar() {
		System.out.println(getNombre() + " tipo planta esta atacando x2");
	}
	
	

	@Override
	public String toString() {
		return "Chikorita [numeroCuernitos=" + numeroCuernitos + "]";
	}

	//Getters y Setters
	public int getNumeroCuernitos() {
		return numeroCuernitos;
	}

	public void setNumeroCuernitos(int numeroCuernitos) {
		this.numeroCuernitos = numeroCuernitos;
	}

}
