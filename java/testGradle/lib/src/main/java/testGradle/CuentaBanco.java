package testGradle;

public class CuentaBanco {
	
	//Atributos
	double balance;
	double balanceMinimo;
	boolean isActivo;
	
	//Constructor 
	public CuentaBanco(double balance, double balanceMinimo, boolean isActivo) {
		
		this.balance = balance;
		this.balanceMinimo = balanceMinimo;
		this.isActivo = isActivo;
	}
	
	//metodos
	public void depositar() {
		System.out.println("Depósito exitoso");
	}
	
	public void retirar() {
		System.out.println("Retiro exitoso");
	}

}
