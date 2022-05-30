package testGradle;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
	
	CalculatorTDD calculator = new CalculatorTDD();

    @Test
    public void addTest()
    {
        assertEquals(2, 1+1);
    }


    @Test
    public void subtractTest()
    {
        assertEquals(5, 10-5 );
    }


    @Test
    public void multiplyTest()
    {
        assertEquals(20, 5*4);
    }


    @Test
    public void divideTest()
    {
        assertEquals(1, 2/2);
    }

}
