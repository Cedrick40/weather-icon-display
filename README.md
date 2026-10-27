# Weather Icon Display (Static Data)

A static, responsive page where choosing a weather condition from a dropdown shows a matching icon, a short description and a tip, and changes the background to suit. It uses no API. Built for Task 27 (Weather Icon Display) of my Web Development internship.

**Live page:** https://cedrick40.github.io/weather-icon-display/

## About the project
The dropdown lists eight weather conditions: sunny, partly cloudy, cloudy, rainy, thunderstorm, snowy, foggy and windy. When one is chosen, the big icon, the title, the description and a helpful tip all update, and the page background changes colour to match the weather. Before anything is chosen, the page shows a neutral default state.

## Objective
To practice conditional rendering and mapping data to the UI without an API.

## Tools used
- HTML5
- CSS3
- JavaScript
- VS Code
- Git and GitHub (free)

## My approach
- **Planning:** I listed the conditions, then decided what each one needs: an icon, a label, a description, a tip and a background theme.
- **Storing the data in an object:** A `WEATHER` object uses the condition name as the key, such as `"rainy"`, and stores an object with `label`, `icon`, `description` and `tip`. All the content lives in one place, away from the logic.
- **Building the dropdown from the data:** `buildOptions()` loops over `Object.entries(WEATHER)` and creates one `<option>` per condition with `createElement`. Adding a new condition to the object adds it to the dropdown automatically.
- **Updating the display from the selected key:** A `change` listener on the dropdown calls `render(key)`. It looks up `WEATHER[key]` and writes the icon, title, description and tip into the page with `textContent`.
- **A default state:** `DEFAULT_STATE` is a second object with a neutral icon, a title and a message that tells the user what to do. `render("")` runs when the page loads, and the same state returns if the user picks the placeholder option again.
- **Conditional rendering and safety:** `render()` first checks whether the key exists with `Object.prototype.hasOwnProperty.call(WEATHER, key)`. If it does, it uses that data. If not, it falls back to the default state. Using `hasOwnProperty` also means odd keys such as `"toString"` cannot accidentally match something inherited by the object.
- **Background per condition:** `render()` sets `document.body.dataset.theme` to the condition name (for example `data-theme="rainy"`). In the CSS, each theme sets a top colour, a bottom colour and an accent colour as custom properties, and the body background is a gradient made from them. Sunny is warm yellow and orange, rainy is slate grey, thunderstorm is dark indigo, snowy is pale ice blue and so on.
- **Readable text on every background:** The content sits in a white card, so text always has strong contrast whatever the background colour is. The accent colour is used for the card's top border, the icon circle and the tip box.
- **Accessibility:** The dropdown has a label, the result area uses `aria-live="polite"` so changes are announced, the emoji icon is hidden from screen readers because the text already names the condition, and keyboard focus is clearly visible. The small pop animation is turned off for users who prefer reduced motion.
- **Layout and responsive design:** The card is centred and limited to 460px wide, and the icon and spacing become smaller on screens of 420px and below.
- **Design:** The colours come from the weather itself, which is where colour is useful here, while the card stays neutral white and grey.
- **Testing:** I selected every condition and checked that the icon, title, description, tip and background all changed, chose the placeholder to return to the default state, and tested unknown keys to make sure the page falls back safely. I also resized the browser to check the mobile layout.

## Project structure
```
weather-icon-display/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Outcome
The result is a clean, responsive page that turns a dropdown choice into an icon, a description and a themed background, with a sensible default and safe handling of unknown values. This project taught me how a data object can drive the whole interface, how to keep content separate from logic, and how to plan for the state before the user has chosen anything.

## Interview questions
- **How would you map a condition name to an icon?** Use an object where each key is a condition name and the value holds its icon, for example `WEATHER.rainy.icon`. Then look up the selected key in that object. It is a direct lookup, so there is no searching or comparing.
- **Why use an object instead of many if/else statements?** An object keeps all the data in one place, so adding or changing a condition means editing one entry instead of adding another `else if` branch. The lookup is short and fast, there is less repeated code, so fewer chances for typos, and the same object can build the dropdown as well as the display.
- **How would you provide a sensible default state?** Create a default object with neutral content and show it when the page loads and whenever there is no valid selection. Use a check such as `hasOwnProperty` or a fallback (`WEATHER[key] || DEFAULT_STATE`), so the page is never empty or broken, and tell the user what to do next.

## Credits
Objects, the `<select>` element and the `dataset` property follow the MDN documentation. The icons are standard emoji, and the font is Manrope from Google Fonts.

## Author
Cedrick Niyibikora