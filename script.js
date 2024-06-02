function calculateAge() {
    var age = parseInt(document.getElementById("age").value);
    var planets = {
        "Merkury": { "orbitalPeriod": 0.2408467, "description": "Merkury – najmniejsza i najbliższa Słońcu planeta Układu Słonecznego. Charakteryzuje się bardzo wysokimi temperaturami w ciągu dnia i niskimi w nocy.", "image": "mercury.jpg", "facts": ["Merkury nie ma atmosfery.", "Dzień na Merkurym trwa około 176 dni ziemskich."] },
        "Wenus": { "orbitalPeriod": 0.615, "description": "Wenus – druga planeta Układu Słonecznego pod względem odległości od Słońca, szósta pod względem wielkości i masy. Jest ona nazywana także „poranną” lub „wieczorną” gwiazdą.", "image": "venus.jpg", "facts": ["Wenus ma bardzo gęstą atmosferę z efektem cieplarnianym, co sprawia, że jest najgorętszą planetą w Układzie Słonecznym.", "Na niebie Wenus jest widoczna jako jasna gwiazda o poranku lub o zmierzchu."] },
        "Mars": { "orbitalPeriod": 1.8808, "description": "Mars – czwarta planeta Układu Słonecznego, siódma pod względem wielkości, obiekt geologicznie aktywny, która jest powiązana z licznymi hipotezami na temat istnienia życia pozaziemskiego.", "image": "mars.jpg", "facts": ["Mars jest znany z charakterystycznej czerwonej barwy swojej powierzchni.", "Na Marsie znajduje się najwyższy wulkan w Układzie Słonecznym, Olympus Mons."] },
        "Jowisz": { "orbitalPeriod": 11.862, "description": "Jowisz – piąta, największa i najcięższa planeta Układu Słonecznego, gazowy olbrzym. Jest ona pod względem wielkości podobna do małej gwiazdy.", "image": "jupiter.jpg", "facts": ["Jowisz ma ponad 75 znanych księżyców.", "Jowisz jest tak duży, że może pomieścić wszystkie inne planety Układu Słonecznego w swoim wnętrzu, ale zbyt małą gęstość, aby być gwiazdą."] },
        "Saturn": { "orbitalPeriod": 29.4571, "description": "Saturn – szósta planeta Układu Słonecznego, znana ze swoich spektakularnych pierścieni. Jest drugim co do wielkości gazowym olbrzymem w naszym układzie.", "image": "saturn.jpg", "facts": ["Saturn ma najrozleglejszy system pierścieni w Układzie Słonecznym.", "Jeden rok na Saturnie trwa ponad 29 lat ziemskich."] },
        "Uran": { "orbitalPeriod": 84.016846, "description": "Uran – siódma planeta Układu Słonecznego, pierwszy odkryty za pomocą teleskopu. Jest gazowym olbrzymem z systemem pierścieni i niezwykle zimną atmosferą.", "image": "uranus.jpg", "facts": ["Uran obraca się na boku w stosunku do swojej orbity.", "Atmosfera Uranu jest najzimniejsza w Układzie Słonecznym."] },
        "Neptun": { "orbitalPeriod": 164.79132, "description": "Neptun – ósma i najdalsza planeta Układu Słonecznego. Jest gazowym olbrzymem z silnymi wiatrami i ciemnymi, burzliwymi chmurami.", "image": "neptune.jpg", "facts": ["Neptun ma najpotężniejsze wiatry w Układzie Słonecznym.", "Rok na Neptunie trwa około 165 lat ziemskich."] }
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
