# Roots of Change: Modernizing Agriculture

A website that brings together practical information for farmers in India: fertilizer recommendations by state, government schemes, farm animal care, and simple forms to list crops and land for sale.

**Live demo:** https://nadeem-coder28.github.io/Roots-of-change/

*Team project for the Design Thinking & Innovation course (B.Tech Computer Science and Engineering, 4th semester) at Bennett University, 2024. The website was developed mainly by Mohammad Nadeem.*

## Problem

Many farmers lack easy access to reliable agricultural information. The project focuses on four problems identified during the design thinking process:

- limited knowledge of correct fertilizer use for their soil and crops
- low awareness of government schemes that could support them
- uncertainty about where and how to sell crops and land
- difficulty choosing suitable crops for their region and soil

## Features

- **Fertilizers:** explains the effects of using the wrong type or quantity of fertilizer, and gives state-wise recommendations (soil types, major crops and nitrogen-phosphorus-potassium doses in kg/ha) for most Indian states.
- **Government schemes:** select a state to see a table of state schemes with their purpose and eligibility.
- **Sell crop:** a form to list a crop (name, mobile number, crop, estimated price, quantity) with input validation; listings are saved in the browser and shown on the page.
- **Buy/sell land:** a form to list land (passbook number, name, mobile number, location, land type, acres).
- **Farm animals:** care profiles for eight animals (cow, buffalo, goat, sheep, pig, pigeon, dog, cat) covering habitat, feeding, breeding, lifespan and healthcare.
- **About us:** project and contact information.

## Screenshots

| Home | Fertilizer recommendations |
|---|---|
| ![Home page](screenshots/home.jpg) | ![Fertilizer recommendations for Telangana](screenshots/fertilizer_recommendations.jpg) |
| **Government schemes** | **Farm animals** |
| ![Government schemes for Telangana](screenshots/government_schemes.jpg) | ![Animal profile for cows](screenshots/animals.jpg) |
| **Sell crop** | **Buy/sell land** |
| ![Sell crop form](screenshots/sell_crop.jpg) | ![Buy/sell land form](screenshots/sell_land.jpg) |

## Tech stack

- HTML, CSS and JavaScript (no frameworks)
- Browser `localStorage` for crop and land listings
- `about.php`: a PHP script for sending contact messages by email (needs a PHP server, so it is not active on GitHub Pages)

## Run locally

Download or clone the repository and open `index.html` in a web browser.

## Limitations

- This is a static website: the fertilizer and scheme information is written into the pages and was collected in 2024, so it may be out of date. Official sources should always be checked.
- Crop and land listings are stored only in the visitor's own browser; there is no shared database or backend.
