import java.util.Arrays;

public class LambdaScope2 {
  public static void main(String... args) {
    int factor = 2;
    String[] strArray = {
      "John",
      "Tom",
      "Marry"
    };
    Arrays.sort(strArray, (String s1, String s2) -> factor*(s2.length() - s1.length()));
    Arrays.asList(strArray).forEach(System.out::println);
    // factor = 3; //compilation error
  }
}
