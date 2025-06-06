# lab exercises

Starter code

https://codepen.io/yadlra/pen/zYVqvbM


## Exercise 1: Adding content sections

**Context**: Add sections to your webpage to provide detailed information about the monarch butterfly. Sections help organize your content and make it easier to navigate.

1. **Add biology section or any section really - this is only an example**:
    - In your HTML section, add a section for Biology with an `<h1>` heading, a `<p>` paragraph, and an `<img>` image tag.

**Instructions**:
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
    - In your HTML section, create a navigation bar with links to the Home, Biology, Habitat, Migration, and Site Map sections.

**Instructions**:
- Add a `<header>` element at the top of the body.
- Inside the header, add a `<nav>` element.
- Inside the `<nav>`, create an unordered list (`<ul>`) with list items (`<li>`) and anchor tags (`<a>`) for each section.

**Tips**:
- Make sure each link points to the corresponding section ID.
- Test each link to make sure it navigates to the correct section.

## Exercise 3: Making the navigation sticky 

**Context**: Making the navigation bar stay at the top of the page as users scroll down. This helps users access the navigation bar at all times.

1. **Style the navigation bar**:
    - In your CSS section, write the code to make the navigation bar sticky.

**Instructions**:
- Add CSS rules to the `<header>` to make it sticky.
- Make sure it has good contrast and visibility against the background.

**Tips**:
- Use the `position: sticky;` property in CSS.
- Test the sticky navigation by scrolling down the page.

## Exercise 4: Adding dropdown menu

**Context**: Improve the navigation bar by adding a dropdown menu for the Habitat section.

1. **Create dropdown menu**:
    - In your HTML section, update the navigation bar to include a dropdown menu for the Habitat section.

**Instructions**:
- Add nested `<ul>` elements inside the Habitat list item.
- Your CSS has been added to style the dropdown menu and make it appear on hover. Find it and see what it's doing.

**Tips**:
- Use `:hover` to display the dropdown menu.
- Test the dropdown menu by hovering over the Habitat link.


## Exercise 5: Adding a site map 

**Context**: Create a site map to provide an overview of all sections and links on the website.

1. **Create a site map section**:
    - In the HTML section, add a new section at the end to serve as a site map.
    - List all sections and subsections with links.

**Instructions**:
- Add a `<section>` with `id="sitemap"`.
- Inside this section, create an unordered list (`<ul>`) with list items (`<li>`) and anchor tags (`<a>`).

**Tips**:
- Make sure the site map includes all sections.
- Make sure each link works correctly.

## Exercise 7: Improving accessibility with buttons

**Context**: Add buttons to increase/decrease text size and toggle the theme for better accessibility.

1. **Add accessibility buttons**:
    - In `index.html`, add buttons within the `div.custom-buttons` to increase and decrease text size and toggle the theme.

**Instructions**:
- Add buttons for increasing text size, decreasing text size, and toggling the theme.
- The JavaScript functions to handle these button clicks have been added, you need to write the code in your HTML section.

**Tips**:
- Make sure buttons are easy to use and accessible. Place them in a visible place! Where would you do this so the user sees them easily?
- Test the functionality of each button.


