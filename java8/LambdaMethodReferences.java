import java.io.File;
import java.util.stream.Stream;
import java.util.Arrays;
import java.util.List;

public class LambdaMethodReferences {
  private class FileFilters {
    public static boolean fileIsPdf(File file) {
      return file.getName().endsWith(".pdf");
    }

    public static boolean fileIsTxt(File file) {
      return file.getName().endsWith(".txt");
    }

    public static boolean fileIsRtf(File file) {
      return file.getName().endsWith(".rtf");
    }
  }

  private static Stream<File> getFiles() {
    List<File> files = Arrays.asList(
      new File("file1.pdf"),
      new File("file2.pdf"),
      new File("file3.txt"),
      new File("file4.txt"),
      new File("file5.rtf"),
      new File("file6.rtf")
    );
    return files.stream();
  }

  public static void main(String... args) {
    Stream<File> pdfs = getFiles().filter(FileFilters::fileIsPdf);
    Stream<File> txts = getFiles().filter(FileFilters::fileIsTxt);
    Stream<File> rtfs = getFiles().filter(FileFilters::fileIsRtf);

    System.out.println("pdf files:");
    pdfs.forEach(System.out::println);
    System.out.println("\ntxt files:");
    txts.forEach(System.out::println);
    System.out.println("\nrtf files:");
    rtfs.forEach(System.out::println);
  }
}
