# 📦 Amazon Clone - Modern E-Commerce Front-End

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Design System](https://img.shields.io/badge/Font-Outfit-blueviolet?style=for-the-badge&logo=google-fonts&logoColor=white)](https://fonts.google.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A premium, highly interactive, and responsive Amazon Clone homepage built with pure HTML5, vanilla CSS3, and modern JavaScript. This project replicates core Amazon UI/UX features with high-fidelity, featuring customized sliders, multi-category grids, horizontal carousels, a slidable cart drawer, and a postal-code validating location modal.

---

## 🚀 Live Demo & Key Highlights

- **Modern Typography**: Integrated Google Fonts (`Outfit` font family) for a premium, sleek typography experience.
- **Fluid Layout**: Developed with fluid containers, flexbox grids, and CSS variables for quick customization.
- **No Heavy Frameworks**: 100% vanilla client-side implementation with zero external JS library dependencies.
- **Micro-Animations**: Smooth transitions, scale effects on hover, and slide-in drawer indicators.

---

## ⚡ Core Features Detailed

### 1. Dynamic Hero Banner Slider
- An automated slideshow that changes background banner images every `5000ms`.
- Features smooth horizontal transition animations.
- Left and right arrow controls allow manual navigation (instantly resetting the autoplay timer).
- Autoplay automatically pauses when the cursor hovers over the slider container.

### 2. Multi-Product Category Grids
- Clean, structured card overlays overlapping the bottom of the hero banner.
- Utilizes `CSS Grid` and flexbox structures for:
  - **2x2 Grids**: Showcases four distinct sub-products with individual thumbnails, titles, and hyperlinks (e.g., Home Appliances, Latest Electronics, Fashion Styles).
  - **Single Card Banner**: Spotlights individual premium items (e.g., iPads & Tablets).
- Hover transition triggers subtle scaling and brightness adjustments to elevate user interaction.

### 3. Product Carousels
- Horizontal product list carousels for **Today's Deals** and **Best Sellers**.
- Equipped with custom pagination buttons (`<` and `>`) to scroll lists by `500px` on click.
- Supports native mouse/touch swipe scroll with hidden scrollbars for clean styling.

### 4. Interactive Shopping Cart Drawer
- A sliding side drawer (`.cart-drawer`) that opens from the right edge with a dark backdrop overlay.
- **Dynamic Badge Updates**: The navigation bar displays the current item count in real-time.
- **Cart Interactions**:
  - Add items from Today's Deals or Best Sellers using the "Add to Cart" button.
  - Modify quantity (increase/decrease) directly in the drawer.
  - Instantly delete items using the "Remove" option.
  - Auto-updates the checkout subtotal.
- **Order Placement**: simulated checkout flow that clears the cart upon completion and triggers a success Toast alert.

### 5. Location Preference Modal
- Custom overlay modal for selecting delivery locations.
- **Pincode Validation**: Validates 6-digit postal codes via Regex before updating preferences.
- **Country Dropdown**: Fallback mechanism to select target countries.
- Dynamically updates the navigation subheader (e.g., "Deliver to Anisha - India, 500020").

### 6. Auto-Suggest Search Bar
- Category label indicator ("All") with matching layout aesthetics.
- Real-time search suggest filter matching inputs against mock queries (e.g., `ipad pro`, `instant pot 6 qt`) and active product titles.
- Clicking suggestions auto-completes input and triggers search operations.

### 7. Global Toast System
- Custom built-in toast notification system (`.toast-notification`) popping up from the bottom to provide visual feedback for user actions (e.g. adding items to cart, updating location, placing orders).

---

## 📁 Repository Structure

The project files are structured as follows:

*   [index.html](file:///C:/Users/anish/OneDrive/College/Projects/Amazon-Clone/index.html) - Structural markup containing the nav header, hero banner, main cards, modal structures, cart drawer layout, and footer.
*   [styles.css](file:///C:/Users/anish/OneDrive/College/Projects/Amazon-Clone/styles.css) - Comprehensive styling configurations, featuring CSS root color/font variable systems, flexbox/grid classes, animations, and responsive queries.
*   [script.js](file:///C:/Users/anish/OneDrive/College/Projects/Amazon-Clone/script.js) - App logic handling mock data rendering, slide controls, cart state, location verification, and search inputs.
*   `assets/` - Image directories containing product images, logos, rating graphics, flags, and layout icons.

---

## 🎨 Styling Variables & Design System

The application styling is centered around high-fidelity colors declared globally in [styles.css](file:///C:/Users/anish/OneDrive/College/Projects/Amazon-Clone/styles.css):

```css
:root {
    --amazon-blue: #131921;         /* Deep brand navy */
    --amazon-light-blue: #232f3e;   /* Secondary navy */
    --amazon-yellow: #febd69;       /* Accent highlight */
    --amazon-yellow-hover: #f3a847; /* Hover feedback highlight */
    --bg-color: #eaeded;            /* Main body background color */
    --text-color: #0f1111;          /* High contrast text */
    --card-bg: #ffffff;             /* Primary card background */
    --border-color: #ddd;           /* Muted dividers */
    --primary-font: 'Outfit', sans-serif;
    --transition-speed: 0.3s;
}
```

---

## 🛠️ Getting Started & How to Run

Since the application is built using pure front-end technologies, you do not need to install complicated build steps or packages.

### Method 1: Direct File Opening
1. Double-click [index.html](file:///C:/Users/anish/OneDrive/College/Projects/Amazon-Clone/index.html) inside your explorer or open it directly in any modern web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local Server (Recommended)
Running it through a local server resolves cross-origin resource sharing (CORS) or pathing limits for absolute file assets if you decide to extend functionality later:

- **VS Code Extension**: Install **Live Server**, open the directory, and click **"Go Live"** on the bottom right status bar.
- **Python server**:
  Run this command in the project directory:
  ```bash
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your web browser.

---

## 📝 Authors

*   **Anisha Paturi** - Core UI/UX design & layout assembly.
*   **Antigravity** - Agentic developer assistant.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file details or refer to the header badge.
