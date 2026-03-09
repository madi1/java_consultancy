@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // Change this to your Azure URL later
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}
