fetch("data/places.json")
    .then(response => response.json())
    .then(places => {
        const container = document.getElementById("places-container");

        places.forEach(place => {
            const card = document.createElement("div");
            card.className = "place-card";

            card.innerHTML = `
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <span class="category">${place.category}</span>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading places:", error);
    });
