# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Inshot challenge

<img src="/design/desktop-design.jpg">
<img src="/design/mobile-design.jpg">

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Links
<a href="https://heisemmaco-dev.github.io/intro-component-with-signup-form-master/">Live Site</a>

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- javascript

### What I learned

In this project, I've gained knowledge about validating email addresses and performing form validation using JavaScript 

```html
<h1>Some HTML code I'm proud of</h1>
<main>
<section>
<img>

<button>claim</button>
```

```css
.proud-of-this-css {
  :hover
  padding 
  display: grid
}
```
```js
/* To validate an email */
function valid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLocaleLowerCase());
}
```

### Continued development

I'd like to deepen my understanding of using JavaScript to manipulate the DOM, improving my knowledge of JavaScript syntax for modifying the appearance and functionality of a webpage's frontend. Can you assist me in refining these skills?"

Is this more aligned with what you were looking for? If you have any specific areas or operations within DOM manipulation that you'd like to explore further, feel free to let me know!

## Author

- Frontend Mentor - [@Moderateemmaco](https://www.frontendmentor.io/profile/Moderateemmaco)
- Twitter - [@heisemmaco-dev](https://www.github.com/heisemmaco-dev)
