package com.generation_colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
		
		//List - ArrayList
		
		System.out.println("\tList --- ArrayList");
		List<String> miArray = new ArrayList <String>();
		
		miArray.add("Pedro");
		miArray.add("Yair");
		miArray.add("María");
		miArray.add(1, "Raúl");
		
		//miArray.remove("Yair");//Eliminar un elemento del arreglo
		String elemento = miArray.remove(1);//regresa el elemento eliminado
		//boolean elemento = miArray.remove("Yair");//regresa si es el elmento eliminado (true)
		
		System.out.println(miArray);
		System.out.println(miArray.size());//size funciona como length
		System.out.println(elemento);
		
		imprimir(miArray);
		
//		Tipo de datos compuestos- Wrappers:
//		long ==> Long
//		double ==> Double
//		int ==> Integer
//		boolean ==> Boolean
		
		int num1 = 10;
		Integer num2 = 10;
		
		System.out.println(num1);
		System.out.println(num2 instanceof Integer);//valida si es el timpo de dato Integer
		
		List<Integer> miArray2 = new ArrayList<Integer>();
		
		miArray2.add(3);
		miArray2.add(3);
		miArray2.add(3);
		miArray2.add(1234);
		miArray2.add(5678);
		
		imprimir(miArray2);
		
		System.out.println("\tSet --- HashSet");
		
		Set<String> miSet = new HashSet<String>();
		//No acepta elementos duplicados
		//No los guarda en un orden específico
		//Es la coleccion que funciona mas rapido
		miSet.add("Martha");
		miSet.add("Martha");
		miSet.add("Lupe");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Gabriel");
		
		miSet.remove("Lupe");
		
		imprimir(miSet);
		System.out.println(miSet.contains("Juan"));
		
		//Map ---HashMap -- Indice
		//<Key/llave, value/valor>
		System.out.println("\tMap --- HashMap");
		
		Map<String, Integer> miMap = new HashMap<String, Integer>();	
		
		miMap.put("Valor 1", 45);
		miMap.put("Valor 1", 250);
		miMap.put("Valor 2", 50);
		miMap.put("Valor 3", 150);
		miMap.put("Valor 4", 510);
		
		System.out.println(miMap);
		System.out.println(miMap.values());//todos los valores
		System.out.println(miMap.keySet());//todas las llaves
		System.out.println(miMap.get("Valor 1"));
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
		}
	}
	
	public static void imprimir(Collection coleccion) {
		
		for(Object elemento : coleccion) {
		
			System.out.println("Elemento = " + elemento);
		
		}

	}
}