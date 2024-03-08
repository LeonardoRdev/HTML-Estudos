// Mostra número ímpares de uma tabuada

public class aula3

{
    public static void main(String[] args)
    {
        int tabuada = 7;
        System.out.println("Números ímpares da tabuada do " + tabuada + ":\n");

        for (int i = 0; i <= 10; i++) {
            if ((i * tabuada) % 2 == 1) {
                System.out.println(i + " x " + tabuada + " = " + i * tabuada);
            }
        }
    }
}