package com.example.cicd1216_1;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/hicicd")
    public String hicicd() {
        return "hi, CICD 1216^^";
    }
}
