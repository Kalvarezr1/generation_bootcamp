package com.pokemon;

public class TipoPlanta extends Pokemon {
	
	//Atributos
	int numeroHojas;
	
	//constructor
		public TipoPlanta(int id, int edad, int nivel, String nombre, boolean evolucion, int numeroHojas) {
			super(id, edad, nivel, nombre, evolucion);
			this.numeroHojas = numeroHojas;
			
		}
	
	//Metodos
	public void paralizar() {
		System.out.println(getNombre() + " esta paralizando");
	}
	
	public void envenenar() {
		System.out.println(getNombre() + " esta envenenando");
	}
	
	public void atacar() {
		System.out.println(getNombre() + " tipo planta esta atacando");
	}
	
	
	//metodo abstracto de la clase madre Pokemon
	@Override
	public void saludar(String mensaje) {
		System.out.println(mensaje);
		
	}
	
	
	//getters y setters
	public int getNumeroHojas() {
		return numeroHojas;
	}

	public void setNumeroHojas(int numeroHojas) {
		this.numeroHojas = numeroHojas;
	}

	

}
