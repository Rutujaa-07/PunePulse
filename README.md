**🌿 PunePulse – Explore Pune's Heritage & Green Spaces**

PunePulse is an interactive map-based web application that helps people explore Pune's historical landmarks and beautiful gardens.

**🚀 Live Demo**

[Visit PunePulse](https://main.d20s5remqhtqjh.amplifyapp.com)

**✨ Features**
- Interactive map of Pune
- Heritage and Garden locations
- Orange and Green category markers
- Search and category filters
- Live places counter
- Location information popups
- Responsive design

**🗺️ Locations**

| Place | Category |
|---|---|
| Shaniwar Wada | Heritage |
| Aga Khan Palace | Heritage |
| Saras Baug | Garden |
| Pune Okayama Friendship Garden | Garden |

*Coordinates are approximate and intended for exploration, not navigation.*

**☁️ AWS Services & Technologies**
- Amazon Location Service – Map tiles and style
- AWS Amplify – Application hosting
- AWS Amplify Environment Variables – API key configuration
- MapLibre GL JS – Interactive map
- HTML, CSS and JavaScript – Frontend

**📁 Project Structure**

```text
PunePulse/
├── index.html
├── amplify.yml
├── LICENSE
├── README.md
├── css/style.css
├── data/places.json
└── js/app.js
```

**💻 Run Locally**

1. Clone: `git clone https://github.com/Rutujaa-07/PunePulse.git`
2. Open: `cd PunePulse`
3. Configure your local `js/config.js` with your API key.
4. Run: `python -m http.server 8000`
5. Visit: `http://localhost:8000`

**🔐 Security**

Never upload your API key or `js/config.js` to GitHub. Production uses the `PUNEPULSE_API_KEY` environment variable in AWS Amplify.

**📚 Data Sources**
- Amazon Location Service – Standard Map Style
- MapLibre GL JS – Map rendering
- Curated Pune locations – `data/places.json`

[Amazon Location Service Docs](https://docs.aws.amazon.com/location/latest/developerguide/) · [MapLibre](https://maplibre.org/)

**📜 License:** MIT License

**❤️ Built for Pune**

Exploring Pune's heritage and green spaces with cloud technology.