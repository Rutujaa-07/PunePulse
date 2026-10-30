# \# 🌿 PunePulse – Explore Pune's Heritage \& Green Spaces

# 

# PunePulse is an interactive map-based web application that helps people discover Pune's heritage landmarks and beautiful green spaces.

# 

# Explore places, search by name, and filter locations by category through an interactive map.

# 

# \## 🚀 Live Demo

# 

# \[Visit PunePulse](https://main.d20s5remqhtqjh.amplifyapp.com)

# 

# \## ✨ Features

# 

# \- Interactive map of Pune

# \- Heritage and Garden locations

# \- Category-based map markers

# \- Search places by name

# \- Filter locations by category

# \- Live results counter

# \- Place information popups

# \- Responsive web interface

# 

# \## 🗺️ Locations Included

# 

# | Place | Category |

# |---|---|

# | Shaniwar Wada | Heritage |

# | Aga Khan Palace | Heritage |

# | Saras Baug | Garden |

# | Pune Okayama Friendship Garden | Garden |

# 

# Coordinates are approximate and intended for exploration, not navigation.

# 

# \## ☁️ AWS Services \& Technologies

# 

# \- \*\*Amazon Location Service:\*\* Provides the map tiles and map style.

# \- \*\*AWS Amplify Hosting:\*\* Hosts the live web application.

# \- \*\*AWS Amplify Environment Variables:\*\* Supplies the map API key during the build.

# \- \*\*MapLibre GL JS:\*\* Renders the interactive map.

# \- \*\*HTML, CSS and JavaScript:\*\* Frontend development.

# 

# \## 📁 Project Structure

# 

# ```text

# PunePulse/

# ├── index.html

# ├── amplify.yml

# ├── LICENSE

# ├── README.md

# ├── css/

# │   └── style.css

# ├── data/

# │   └── places.json

# └── js/

# &#x20;   └── app.js

# ```

# 

# \## 💻 Run Locally

# 

# 1\. Clone the repository:

# 

# ```bash

# git clone https://github.com/Rutujaa-07/PunePulse.git

# ```

# 

# 2\. Open the project folder:

# 

# ```bash

# cd PunePulse

# ```

# 

# 3\. Configure your Amazon Location Service API key locally in `js/config.js` using the expected configuration format.

# 

# 4\. Start a local server:

# 

# ```bash

# python -m http.server 8000

# ```

# 

# 5\. Open `http://localhost:8000` in your browser.

# 

# \*\*Security note:\*\* Never commit your API key or `js/config.js` to GitHub. The production build uses the `PUNEPULSE\_API\_KEY` environment variable in AWS Amplify.

# 

# \## 📚 Data Sources \& Attribution

# 

# \- Map provider: Amazon Location Service – Standard Map Style.

# \- Map rendering: MapLibre GL JS.

# \- Place information and approximate coordinates: Curated local dataset in `data/places.json`.

# 

# \[Amazon Location Service Documentation](https://docs.aws.amazon.com/location/latest/developerguide/)

# 

# \[MapLibre Documentation](https://maplibre.org/)

# 

# \## 📜 License

# 

# This project is licensed under the MIT License.

# 

# \## ❤️ Built for Pune

# 

# PunePulse celebrates the heritage and green spaces of Pune through the power of cloud technology.

