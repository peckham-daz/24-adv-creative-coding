#lab exercises

Starter code

https://codepen.io/yadlra/pen/zYVqvbM


## Exercise 1: Adding content sections

**Context**: Add sections to your webpage to provide detailed information about the monarch butterfly. Sections help organize your content and make it easier to navigate.

1. **Add biology section**:
    - In `index.html`, add a section for Biology with an `<h1>` heading, a `<p>` paragraph, and an `<img>` image tag.

**Instructions**:
- Open `index.html`.
- Add a `<section>` element with the `id="biology"`.
- Inside the section, add:
  - `<h1>` for the heading.
  - `<p>` for the paragraph.
  - `<img>` for the image.

2. **Add habitat section**:
    - Add a section for Habitat with an `<h1>` heading, a `<p>` paragraph, and an `<img>` image tag.
    - Inside the Habitat section, add subsections for Milkweed and Other Plants using `<section>` tags with `<h2>` headings and `<p>` paragraphs.

**Instructions**:
- Add a `<section>` element with the `id="habitat"`.
- Inside the section, add:
  - `<h1>` for the heading.
  - `<p>` for the paragraph.
  - `<img>` for the image.
  - Two nested `<section>` elements with `id="milkweed"` and `id="otherplants"`.
  - Inside each nested section, add:
    - `<h2>` for the heading.
    - `<p>` for the paragraph.

3. **Add migration section**:
    - Add a section for Migration with an `<h1>` heading, a `<p>` paragraph, and an `<img>` image tag.

**Instructions**:
- Add a `<section>` element with the `id="migration"`.
- Inside the section, add:
  - `<h1>` for the heading.
  - `<p>` for the paragraph.
  - `<img>` for the image.

**Tips**:
- Use images stored in a drive like google, dropbox to access url
- Write concise and informative text for each section.
- Use descriptive `alt` attributes for images to improve accessibility.

## Exercise 2: Adding navigation 

**Context**: Create a navigation bar to help users easily navigate between different sections of your website. Navigation bars provide links to the different parts of your website.

1. **Add navigation bar**:
    - In `index.html`, create a navigation bar with links to the Home, Biology, Habitat, Migration, and Site Map sections.

**Instructions**:
- Add a `<header>` element at the top of the body.
- Inside the header, add a `<nav>` element.
- Inside the `<nav>`, create an unordered list (`<ul>`) with list items (`<li>`) and anchor tags (`<a>`) for each section.

**Tips**:
- Ensure each link points to the corresponding section ID.
- Test each link to make sure it navigates to the correct section.

## Exercise 3: Making the navigation sticky 

**Context**: Ensure the navigation bar stays at the top of the page as users scroll down. This helps users access the navigation bar at all times.

1. **Style the navigation bar**:
    - In `styles.css`, use CSS to make the navigation bar sticky.

**Instructions**:
- Add CSS rules to the `<header>` to make it sticky.
- Ensure it has good contrast and visibility against the background.

**Tips**:
- Use the `position: sticky;` property in CSS.
- Test the sticky navigation by scrolling down the page.

## Exercise 4: Adding dropdown menu

**Context**: Enhance the navigation bar by adding a dropdown menu for the Habitat section.

1. **Create dropdown menu**:
    - In `index.html`, update the navigation bar to include a dropdown menu for the Habitat section.

**Instructions**:
- Add nested `<ul>` elements inside the Habitat list item.
- Use CSS to style the dropdown menu and make it appear on hover.

**Tips**:
- Use `:hover` to display the dropdown menu.
- Test the dropdown menu by hovering over the Habitat link.

## Exercise 5: Adding breadcrumb navigation

**Context**: Add breadcrumb navigation to help users understand their current location on the website.

1. **Add breadcrumb navigation**:
    - In `index.html`, add a breadcrumb navigation below the header.
    - Ensure it reflects the current page structure.

**Instructions**:
- Add a `<nav>` element with `aria-label="breadcrumb"`.
- Inside the `<nav>`, create an ordered list (`<ol>`) with list items (`<li>`) and anchor tags (`<a>`).

**Tips**:
- Breadcrumbs should show the user's current position.
- Ensure the breadcrumb navigation is easy to read and use.

## Exercise 6: Adding site map 

**Context**: Create a site map to provide an overview of all sections and links on the website.

1. **Create a site map section**:
    - In `index.html`, add a new section at the end to serve as a site map.
    - List all sections and subsections with links.

**Instructions**:
- Add a `<section>` with `id="sitemap"`.
- Inside this section, create an unordered list (`<ul>`) with list items (`<li>`) and anchor tags (`<a>`).

**Tips**:
- Ensure the site map is comprehensive and includes all sections.
- Make sure each link works correctly.

## Exercise 7: Enhancing accessibility with buttons

**Context**: Add buttons to increase/decrease text size and toggle the theme for better accessibility.

1. **Add accessibility buttons**:
    - In `index.html`, add buttons within the `div.custom-buttons` to increase and decrease text size and toggle the theme.
    - Implement the functions in `scripts.js`.

**Instructions**:
- Add buttons for increasing text size, decreasing text size, and toggling the theme.
- Write JavaScript functions to handle these button clicks.

**Tips**:
- Make sure buttons are easy to use and accessible. Place them in a visible place!
- Test the functionality of each button.


