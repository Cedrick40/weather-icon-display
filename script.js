// ===== Data =====
// All the weather data lives in one object. The key is the condition name.
// To add a condition, add one entry here and one theme in style.css.
const WEATHER = {
  "sunny": {
    label: "Sunny",
    icon: "☀️",
    description: "Clear skies and plenty of sunshine. A bright, warm day.",
    tip: "Tip: wear sunscreen and drink plenty of water.",
  },
  "partly-cloudy": {
    label: "Partly cloudy",
    icon: "⛅",
    description: "A mix of sunshine and clouds. The sun comes and goes.",
    tip: "Tip: a light layer is enough for most of the day.",
  },
  "cloudy": {
    label: "Cloudy",
    icon: "☁️",
    description: "The sky is covered with clouds, but no rain is expected.",
    tip: "Tip: good weather for a long walk.",
  },
  "rainy": {
    label: "Rainy",
    icon: "🌧️",
    description: "Steady rain falls from grey clouds. Streets will be wet.",
    tip: "Tip: take an umbrella or a waterproof jacket.",
  },
  "thunderstorm": {
    label: "Thunderstorm",
    icon: "⛈️",
    description: "Heavy rain with thunder and lightning. Conditions can change quickly.",
    tip: "Tip: stay indoors and away from open areas and tall trees.",
  },
  "snowy": {
    label: "Snowy",
    icon: "❄️",
    description: "Snow is falling and the ground may be covered in white.",
    tip: "Tip: wear warm layers and non-slip shoes.",
  },
  "foggy": {
    label: "Foggy",
    icon: "🌫️",
    description: "Thick fog makes it hard to see far ahead.",
    tip: "Tip: drive slowly and use low-beam headlights.",
  },
  "windy": {
    label: "Windy",
    icon: "💨",
    description: "Strong winds are blowing. Loose objects may move around.",
    tip: "Tip: secure loose items and hold on to your hat.",
  },
};

// Shown before anything is selected, and whenever the selection is empty or unknown
const DEFAULT_STATE = {
  label: "No condition selected",
  icon: "🌍",
  description: "Pick a weather condition from the list above to see it here.",
  tip: "",
};

// ===== Elements =====
const selectEl = document.getElementById("condition");
const iconEl = document.getElementById("icon");
const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");
const tipEl = document.getElementById("tip");

// ===== Build the dropdown from the data =====
function buildOptions() {
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a condition...";
  selectEl.appendChild(placeholder);

  for (const [key, data] of Object.entries(WEATHER)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = data.icon + "  " + data.label;
    selectEl.appendChild(option);
  }
}

// ===== Show the chosen condition (conditional rendering) =====
function render(key) {
  const known = Object.prototype.hasOwnProperty.call(WEATHER, key);
  const data = known ? WEATHER[key] : DEFAULT_STATE;       // fall back to the default state

  iconEl.textContent = data.icon;
  titleEl.textContent = data.label;
  descriptionEl.textContent = data.description;
  tipEl.textContent = data.tip;
  document.body.dataset.theme = known ? key : "default";   // CSS picks the background from this

  iconEl.classList.remove("pop");
  void iconEl.offsetWidth;                                  // restart the animation
  iconEl.classList.add("pop");
}

// ===== Events =====
selectEl.addEventListener("change", () => render(selectEl.value));

buildOptions();
render("");   // default state on load