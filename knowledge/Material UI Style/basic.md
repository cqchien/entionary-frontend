# Material UI style.

**Why use Material-UI's styling solution?**
In previous versions, Material-UI has used LESS, then a custom inline-style solution to write the component styles, but it is limited.-->  *A CSS-in-JS solution* overcomes many of those limitations, and unlocks many great features (theme nesting, dynamic styles, self-support, etc.).  

- 💅 You can expect the same advantages as styled-components.
- 🚀 It's blazing fast.
- 🧩 It's extensible via a plugin API.
- ⚡️ It uses JSS at its core – a high performance JavaScript to CSS compiler which works at runtime and server-side.
- 📦 Less than 15 KB gzipped; and no bundle size increase if used alongside Material-UI.

*There are 3 possible APIs you can use to generate and apply styles*
- Hook API
- Styled components API
- Higher-order component API (HOC API)

## Theming
Add a ThemeProvider to the top level of your app to pass a theme down the React component tree. Then, you can access the theme object in style functions
