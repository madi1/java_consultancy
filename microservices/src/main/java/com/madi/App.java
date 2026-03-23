package com.madi;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @GetMapping("/")
    public Map<String,String> home() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Madi Consultancy Java Service is Live on Azure!");
        return response;
    }
}
