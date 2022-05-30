package com.pokemon;

public class Main {

	public static void main(String[] args) {
//		Pokemon chikorita = new Pokemon(152, 1, 20, "Chikorita", false);
//
//		chikorita.comer();
//		chikorita.atacar();
//		chikorita.dormir();
		
		System.out.println("-----------------------------");
		
		TipoPlanta chikorita2 = new TipoPlanta(152, 1, 20, "Chikorita", false, 1);
		
		chikorita2.comer();
		chikorita2.atacar();
		chikorita2.dormir();
	
		
		chikorita2.envenenar();
		chikorita2.paralizar();
		
		System.out.println("-----------------------------");
		
		//Instanciar Chikorita
		Chikorita chikorita3 = new Chikorita(152, 1, 20, "Chikorita", false, 1, 8);
		
		//metodos de la clase Pokemon
		chikorita3.comer();
		chikorita3.dormir();
		chikorita3.atacar();
		
		//metodos de la clase TipoPlanta
		chikorita3.envenenar();
		chikorita3.paralizar();
		
		//metodo de clase Chikorita
		chikorita3.latigo();
		
		System.out.println("-----------------------------");
		
		Charmander charmander = new Charmander(4,3,50,"Charmander", false);
		
		charmander.comer();
		charmander.atacar();
		charmander.dormir();
		
		charmander.lanzaLlamas();
		charmander.volar();
		charmander.araniar();
		
	}
}
