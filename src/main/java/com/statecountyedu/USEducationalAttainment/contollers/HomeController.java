package com.statecountyedu.USEducationalAttainment.contollers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("")
    public String index(Model model) {
        return "index";
    }

    @GetMapping("states/{locationId}")
    public String displayViewState(Model model, @PathVariable int locationId) {
        return "states";
    }

}
