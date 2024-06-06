import static java.lang.System.out;

public class LambdaScope1 {
  Runnable r1 = () -> out.println(this);
  Runnable r2 = () -> out.println(toString());

  public String toString() { return "Hello, world!"; }

  public static void main(String... args) {
    new LambdaScope1().r1.run(); //Hello, world!
    new LambdaScope1().r2.run(); //Hello, world!
  }
}
