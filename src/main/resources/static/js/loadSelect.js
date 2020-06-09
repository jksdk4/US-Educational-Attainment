function validateOnSubmit(searchFld, checkSelector){
    // ensures search box is not empty when searching by county or state
    if (searchFld.value == "" && checkSelector.value !== "all") {
        window.alert("Please enter something to search for in the search box.");
        return true;
    }
    return false;
}

function loadSelectStateField(stateListOpts){
    // fills select field in nav bar
    let fetchedStates = fetch("https://raw.githubusercontent.com/jksdk4/practice-JSONs/master/states_titlecase.json");
    fetchedStates.then(function(response){
        response.json().then(function(json){
            stateListOptsStr = '';
            for (let i = 0; i < json.length; i++){
                stateListOptsStr += `<option>${json[i].name}</option>`;
 
            }
            stateListOpts.innerHTML += stateListOptsStr;
        });
    });
}

function loadJSONandSearch(file, field, selector){
    file.then(function(response){
        response.json().then(function(json){
            const results = document.getElementById("searchResults");
            const entry = field.value;
            let resultsStr = "";
            for (let i = 0; i < json.length; i++){
                if (selector.value == 'state' || selector.value == 'all'){
                    if (selector.value == 'state'){
                        if (json[i]['FIPS Code'] % 1000 > 0 || json[i]['FIPS Code'] == 0) {  // state only: fips code % 1000 == 0 and is not 0
                            continue;
                        }
                    }
                    if (json[i]['Area name'].toLowerCase().includes(entry.toLowerCase()) || json[i]['State'].includes(entry.toUpperCase())){
                        resultsStr += `<p><span class="areaTitle">${json[i]['Area name']}</span>
                            <br /><strong><span class="abbrev">${json[i]['State']}</span></strong>
                            <br /><strong class="term">Less than a high school diploma, 1970:</strong> ${json[i]['Less than a high school diploma, 1970']}
                            <br /><strong class="term">High school diploma only, 1970:</strong> ${json[i]['High school diploma only, 1970']}
                            <br /><strong class="term">Some college or associates degree, 1970:</strong> ${json[i]['Some college or associates degree, 1970']}
                            <br /><strong class="term">Bachelor's degree or higher, 1970:</strong> ${json[i]['Bachelors degree or higher, 1970']}<br />
                            <br /><strong class="term">Less than a high school diploma, 1980:</strong> ${json[i]['Less than a high school diploma, 1980']}
                            <br /><strong class="term">High school diploma only, 1980:</strong> ${json[i]['High school diploma only, 1980']}
                            <br /><strong class="term">Some college or associates degree, 1980:</strong> ${json[i]['Some college or associates degree, 1980']}
                            <br /><strong class="term">Bachelor's degree or higher, 1980:</strong> ${json[i]['Bachelors degree or higher, 1980']}<br />
                            <br /><strong class="term">Less than a high school diploma, 1990:</strong> ${json[i]['Less than a high school diploma, 1990']}
                            <br /><strong class="term">High school diploma only, 1990:</strong> ${json[i]['High school diploma only, 1990']}
                            <br /><strong class="term">Some college or associates degree, 1990:</strong> ${json[i]['Some college or associates degree, 1990']}
                            <br /><strong class="term">Bachelor's degree or higher, 1990:</strong> ${json[i]['Bachelors degree or higher, 1990']}<br />
                            <br /><strong class="term">Less than a high school diploma, 2000:</strong> ${json[i]['Less than a high school diploma, 2000']}
                            <br /><strong class="term">High school diploma only, 2000:</strong> ${json[i]['High school diploma only, 2000']}
                            <br /><strong class="term">Some college or associates degree, 2000:</strong> ${json[i]['Some college or associates degree, 2000']}
                            <br /><strong class="term">Bachelor's degree or higher, 2000:</strong> ${json[i]['Bachelors degree or higher, 2000']}<br />
                            <br /><strong class="term">Less than a high school diploma, 2014 - 18:</strong> ${json[i]['Less than a high school diploma, 2014-18']}
                            <br /><strong class="term">High school diploma only, 2014 - 18:</strong> ${json[i]['High school diploma only, 2014-18']}
                            <br /><strong class="term">Some college or associates degree, 2014 - 18:</strong> ${json[i]['Some college or associates degree, 2014-18']}
                            <br /><strong class="term">Bachelor's degree or higher, 2014 - 18:</strong> ${json[i]['Bachelors degree or higher, 2014-18']}</p>`;
                    }
                }
                // returns counties by name
                if (selector.value == 'county') {
                    if (json[i]['FIPS Code'] % 1000 == 0) {
                        continue;
                    }
                    if (json[i]['Area name'].toLowerCase().includes(entry.toLowerCase())){
                        resultsStr += `<p><span class="areaTitle">${json[i]['Area name']}</span>
                            <br /><strong><span class="abbrev">${json[i]['State']}</span></strong>
                            <br /><strong class="term">Less than a high school diploma, 1970:</strong> ${json[i]['Less than a high school diploma, 1970']}
                            <br /><strong class="term">High school diploma only, 1970:</strong> ${json[i]['High school diploma only, 1970']}
                            <br /><strong class="term">Some college or associates degree, 1970:</strong> ${json[i]['Some college or associates degree, 1970']}
                            <br /><strong class="term">Bachelor's degree or higher, 1970:</strong> ${json[i]['Bachelors degree or higher, 1970']}<br />
                            <br /><strong class="term">Less than a high school diploma, 1980:</strong> ${json[i]['Less than a high school diploma, 1980']}
                            <br /><strong class="term">High school diploma only, 1980:</strong> ${json[i]['High school diploma only, 1980']}
                            <br /><strong class="term">Some college or associates degree, 1980:</strong> ${json[i]['Some college or associates degree, 1980']}
                            <br /><strong class="term">Bachelor's degree or higher, 1980:</strong> ${json[i]['Bachelors degree or higher, 1980']}<br />
                            <br /><strong class="term">Less than a high school diploma, 1990:</strong> ${json[i]['Less than a high school diploma, 1990']}
                            <br /><strong class="term">High school diploma only, 1990:</strong> ${json[i]['High school diploma only, 1990']}
                            <br /><strong class="term">Some college or associates degree, 1990:</strong> ${json[i]['Some college or associates degree, 1990']}
                            <br /><strong class="term">Bachelor's degree or higher, 1990:</strong> ${json[i]['Bachelors degree or higher, 1990']}<br />
                            <br /><strong class="term">Less than a high school diploma, 2000:</strong> ${json[i]['Less than a high school diploma, 2000']}
                            <br /><strong class="term">High school diploma only, 2000:</strong> ${json[i]['High school diploma only, 2000']}
                            <br /><strong class="term">Some college or associates degree, 2000:</strong> ${json[i]['Some college or associates degree, 2000']}
                            <br /><strong class="term">Bachelor's degree or higher, 2000:</strong> ${json[i]['Bachelors degree or higher, 2000']}<br />
                            <br /><strong class="term">Less than a high school diploma, 2014 - 18:</strong> ${json[i]['Less than a high school diploma, 2014-18']}
                            <br /><strong class="term">High school diploma only, 2014 - 18:</strong> ${json[i]['High school diploma only, 2014-18']}
                            <br /><strong class="term">Some college or associates degree, 2014 - 18:</strong> ${json[i]['Some college or associates degree, 2014-18']}
                            <br /><strong class="term">Bachelor's degree or higher, 2014 - 18:</strong> ${json[i]['Bachelors degree or higher, 2014-18']}</p>`;
                    }
                }
            }
            
            if (resultsStr.length == 0){
                if (selector.value == "all" && entry.length < 1){    // blank search & 'All' chosen
                    for (let i = 0; i < json.length; i++){
                        resultsStr += `<p>${json[i]['Area name']}</p>`  // list everything
                    }
                } else {    // none found w/ nonblank search
                    results.innerHTML = `<p><strong>Nothing here!</strong></p>
                    <p>The search returned no results.</p>`;
                }
            } else {
                results.innerHTML = resultsStr;
            }
        });
    });
}

window.addEventListener("load", function(){
    let stateListOptions = document.querySelector("select");
    loadSelectStateField(stateListOptions);

    // select state page
    let stateOptions = document.querySelector("form");
    stateOptions.addEventListener("submit", function(e){
        let choice = stateListOptions.options[stateListOptions.selectedIndex];
        if (choice == stateListOptions.options[0]){
            alert("Choose a state to continue.");
            e.preventDefault();
        }
    });

    // search
    let searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", function(e) {
        let searchField = document.querySelector("input[name=searchTerm]");
        let checkedSelector = document.querySelector("input[name=searchType]:checked");
        let noInput = validateOnSubmit(searchField, checkedSelector);
        if (noInput) {
            e.preventDefault();
        } else {
            let fetchedStates = fetch("https://raw.githubusercontent.com/jksdk4/practice-JSONs/master/edu03.json");
            loadJSONandSearch(fetchedStates, searchField, checkedSelector); 
        }
        e.preventDefault();

    });

    
});