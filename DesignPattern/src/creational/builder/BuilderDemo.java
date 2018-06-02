package creational.builder;

public class BuilderDemo {
    public static void main(String[] args) {
        Builder.LunchBuilder builder=new Builder.LunchBuilder();
        builder.bread("wheat").meat("Turkey").dressing("Mayo");
        Builder lunchBuilder=builder.build();

        System.out.println(lunchBuilder.getBread());

    }
}
