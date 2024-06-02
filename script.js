function calculateAge() {
    var age = parseInt(document.getElementById("age").value);
    var planets = {
        "Mars": { "orbitalPeriod": 1.8808, "description": "Mars – czwarta planeta Układu Słonecznego, siódma pod względem wielkości, obiekt geologicznie aktywny, która jest powiązana z licznymi hipotezami na temat istnienia życia pozaziemskiego.", "image": "mars.jpg", "facts": ["Mars jest znany z charakterystycznej czerwonej barwy swojej powierzchni.", "Na Marsie znajduje się najwyższy wulkan w Układzie Słonecznym, Olympus Mons."] },
        "Jowisz": { "orbitalPeriod": 11.862, "description": "Jowisz – piąta, największa i najcięższa planeta Układu Słonecznego, gazowy olbrzym. Jest ona pod względem wielkości podobna do małej gwiazdy.", "image": "jupiter.jpg", "facts": ["Jowisz ma ponad 75 znanych księżyców.", "Jowisz jest tak duży, że może pomieścić wszystkie inne planety Układu Słonecznego w swoim wnętrzu, ale zbyt małą gęstość, aby być gwiazdą."] },
        "Wenus": { "orbitalPeriod": 0.615, "description": "Wenus – druga planeta Układu Słonecznego pod względem odległości od Słońca, szósta pod względem wielkości i masy. Jest ona nazywana także „poranną” lub „wieczorną” gwiazdą.", "image": "venus.jpg", "facts": ["Wenus ma bardzo gęstą atmosferę z efektem cieplarnianym, co sprawia, że jest najgorętszą planetą w Układzie Słonecznym.", "Na niebie Wenus jest widoczna jako jasna gwiazda o poranku lub o zmierzchu."] }
        // Dodaj więcej planet i ich opisów tutaj
    };
    var results = document.getElementById("results");
    results.innerHTML = "<h2>Twój wiek na różnych planetach:</h2>";
    for (var planet in planets) {
        var planetAge = Math.round(age / planets[planet]["orbitalPeriod"]);
        var planetName = planet.charAt(0).toUpperCase() + planet.slice(1);
        var lastChar = planetName.charAt(planetName.length - 1);
        var preposition = "Na ";
        if (lastChar === "s") {
            planetName += "ie";
        } else if (lastChar === "a") {
            planetName = planetName.substring(0, planetName.length - 1) + "ie";
        } else {
            planetName += "u";
        }
        preposition += planetName;
        results.innerHTML += "<div class='planet-info'><img src='" + planets[planet]["image"] + "' alt='" + planet + "'><div class='planet-description'><h3>" + planet + "</h3><p>" + planets[planet]["description"] + "</p><p>" + preposition + " miałbyś " + planetAge + " lat.</p></div></div>";
        results.innerHTML += "<div class='planet-facts'><h4>Ciekawostki o " + planetName + ":</h4>";
        for (var i = 0; i < planets[planet]["facts"].length; i++) {
            results.innerHTML += "<p>" + planets[planet]["facts"][i] + "</p>";
        }
        results.innerHTML += "</div>";
    }
}
