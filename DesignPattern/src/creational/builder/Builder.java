package creational.builder;

public class Builder {
    private final String bread;
    private final String condiment;
    private final String dressing;
    private final String meat;

    public String getBread() {
        return bread;
    }

    public String getCondiment() {
        return condiment;
    }

    public String getDressing() {
        return dressing;
    }

    public String getMeat() {
        return meat;
    }

    public Builder(LunchBuilder lunchBuilder) {
        this.bread = lunchBuilder.bread;
        this.condiment = lunchBuilder.condiment;
        this.dressing = lunchBuilder.dressing;
        this.meat = lunchBuilder.meat;
    }

    public static class LunchBuilder{
        private String bread;
        private String condiment;
        private String dressing;
        private String meat;
        public LunchBuilder(){

        }
        public LunchBuilder bread(String bread){
            this.bread=bread;
            return this;
        }
        public LunchBuilder condiment(String condiment){
            this.condiment=condiment;
            return this;
        }
        public LunchBuilder dressing(String dressing){
            this.dressing=dressing;
            return this;
        }
        public LunchBuilder meat(String meat){
            this.meat=meat;
            return this;
        }
        public Builder build(){
            return new Builder(this);
        }

    }
}
