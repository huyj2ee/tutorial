import java.util.Arrays;

public class LambdaSyntax {
  public static void main(String... args) {
    String[] strArray = {
      "John",
      "Tom",
      "Marry"
    };
    Arrays.sort(strArray, (String s1, String s2) -> s2.length() - s1.length());
    Arrays.asList(strArray).forEach(System.out::println);
  }
}
