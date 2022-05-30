package testGradle;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Tests de la clase Calculadora")
public class CalculadoraTest {
	
	@Test
	@DisplayName("Metodo para comprobar suma")
	public void sumaTest() {
		Calculadora sumaCalc = new Calculadora();
		assertEquals(3, sumaCalc.suma(1, 2));
	}
	
	@Test
	@DisplayName("Metodo para comprobar assertions")
	public void asserttionTest() {
//		boolean valorBoolean = true;
//		assertTrue(valorBoolean);
		
		assertAll(
		"Encabezado",
		()-> assertEquals(2, 1+1, "Deberia ser 2"),
		()-> assertTrue(false, "Deberia ser true")
		);
	}	
}

	