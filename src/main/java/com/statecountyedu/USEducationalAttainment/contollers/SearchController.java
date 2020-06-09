package com.statecountyedu.USEducationalAttainment.contollers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.HashMap;

@Controller
@RequestMapping("search")
public class SearchController {
    static HashMap<String, String> columnChoices = new HashMap<>();

    public SearchController () {
        columnChoices.put("all", "All");
        columnChoices.put("state", "State");
        columnChoices.put("county", "County");
    }
    @RequestMapping("")
    public String search(Model model) {
        model.addAttribute("columns", columnChoices);
        model.addAttribute("title", "Search");
        return "search";
    }
    @PostMapping("results")
    public String displaySearchResults(Model model){
        model.addAttribute("columns", columnChoices);
        return "search";
    }

}
