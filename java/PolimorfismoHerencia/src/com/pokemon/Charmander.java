package com.pokemon;

public class Charmander extends Pokemon implements TipoFuego, TipoAgua, TipoVolador {

	
	public Charmander(int id, int edad, int nivel, String nombre, boolean evolucion) {
		super(id, edad, nivel, nombre, evolucion);
	}
	
	@Override
	public void lanzaLlamas() {
		System.out.println("Lanza llamas");
	}

	@Override
	public void araniar() {
		System.out.println(" arañar");
	}

	@Override
	public void volar() {
		System.out.println(" volar");
	}

	@Override
	public void saludar(String mensaje) {
		System.out.println(" saludando");
		
	}
	
}
