const config = window.PUNEPULSE_CONFIG;

if (!config || !config.apiKey) {
    document.getElementById("map").textContent =
        "Map configuration missing. Please check js/config.js";
} else {
    const map = new maplibregl.Map({
        container: "map",
        style: `https://maps.geo.${config.region}.amazonaws.com/v2/styles/Standard/descriptor?key=${encodeURIComponent(config.apiKey)}`,
        center: [73.8567, 18.5204],
        zoom: 11
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    map.on("load", () => {
        fetch("data/places.json")
            .then(response => response.json())
            .then(places => {
                const container = document.getElementById("places-container");
                const searchInput = document.getElementById("search-input");
                const categoryFilter = document.getElementById("category-filter");
                const resultCount = document.getElementById("result-count");

                const placeItems = [];

                places.forEach(place => {
                    const marker = new maplibregl.Marker({
                        color: place.category === "Heritage" ? "#e67e22" : "#2e8b57"
                    })
                        .setLngLat([place.longitude, place.latitude])
                        .setPopup(
                            new maplibregl.Popup().setText(
                                `${place.name} - ${place.description}`
                            )
                        )
                        .addTo(map);

                    const card = document.createElement("div");
                    card.className = "place-card";

                    const heading = document.createElement("h3");
                    heading.textContent = place.name;

                    const description = document.createElement("p");
                    description.textContent = place.description;

                    const category = document.createElement("span");
                    category.className = "category";
                    category.textContent = place.category;

                    card.append(heading, description, category);
                    container.appendChild(card);

                    card.addEventListener("click", () => {
                        map.flyTo({
                            center: [place.longitude, place.latitude],
                            zoom: 15
                        });
                        marker.togglePopup();
                    });

                    placeItems.push({ place, marker, card });
                });

                function filterPlaces() {
                    const searchText = searchInput.value.toLowerCase().trim();
                    const selectedCategory = categoryFilter.value;

                    let visibleCount = 0;

                    placeItems.forEach(item => {
                        const matchesSearch =
                            item.place.name.toLowerCase().includes(searchText) ||
                            item.place.description.toLowerCase().includes(searchText);

                        const matchesCategory =
                            selectedCategory === "All" ||
                            item.place.category === selectedCategory;

                        const visible = matchesSearch && matchesCategory;

                        if (visible) visibleCount++;

                        item.card.style.display = visible ? "" : "none";

                        if (visible) {
                            item.marker.addTo(map);
                        } else {
                            item.marker.remove();
                        }
                    });

                    resultCount.textContent = `Showing ${visibleCount} of ${places.length} places`;
                }

                filterPlaces();

                searchInput.addEventListener("input", filterPlaces);
                categoryFilter.addEventListener("change", filterPlaces);
            })
            .catch(error => console.error("Places loading error:", error));
    });

    map.on("error", event => {
        console.error("Amazon Location map error:", event.error);
    });
}
