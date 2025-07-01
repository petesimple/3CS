# 3Cs Air Hockey 🥅

A fast-paced, rotation-based air hockey scoring system for 3 players. Built for competitive play and practice sessions where players rotate in and out with every goal. Designed for clarity, speed, and fun — optimized for mobile and tablet use at the table.

## 🚀 Features

- 🧠 **3-player format** with automatic rotation
- ⏱️ **Match timer**
- 🔄 **Swap Players button** (can swap sides before first point)
- 🟢 **Neon green “waiting” player puck**
- 📝 **Match log** with goal history
- 🔁 **Undo last goal**
- ⛔ **Timeout button** (10-second countdown)
- 📤 **Share results** via Web Share API or Twitter
- 🔄 **Reset match** or **start fresh**
- 🔢 **Scores & names shown inside pucks**
- 🔠 **Large, bold player names with two-line wrapping**
- 🧪 Version 1.3 (names & swap)

## 🕹️ How It Works

1. Prompted to enter **3 player names** on load
2. First two players begin; third is in waiting
3. **Swap Players** button can switch left/right sides before the first goal
4. Whenever someone scores, the **defender rotates out**, and the waiting player rotates in
5. First to **7 points** wins!
6. Final scores are displayed with podium ranks (🥇🥈🥉)

## 📲 How to Install (PWA)

This app is installable as a Progressive Web App (PWA) for offline, fullscreen use:

### 📱 On iPhone/iPad (Safari):
1. Open the app in Safari
2. Tap the **Share** icon
3. Select **“Add to Home Screen”**

### 🤖 On Android (Chrome/Edge):
1. Open the app in Chrome or Edge
2. Tap the **3-dot menu**
3. Select **“Install App”** or **“Add to Home Screen”**

The app will now launch fullscreen like a native app — no browser chrome!

## 🧩 Tech Stack

- HTML / CSS / JavaScript
- No frameworks — fully standalone
- PWA-ready with service worker
- Mobile-first responsive layout

## 🛠️ Dev Notes

- Built and tested with Chrome, Safari, and Edge
- Ideal for use at physical air hockey tables
- Optimized for iPad and mobile screens
- **New in 1.3:** Swap Players button, larger names with line wrapping

## 📣 Feedback Welcome

Test it, play it, break it. If you have feedback or feature requests, open an issue or contact [@petesimple](https://github.com/petesimple)!

---

© 2025 Pete Lippincott. Air Hockey is life.
