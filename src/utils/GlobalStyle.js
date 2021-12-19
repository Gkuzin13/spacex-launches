import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');

*, *::before, *::after {
box-sizing: border-box;
}

* {
margin: 0;
}

html, body {
 font-size: 12px;
 height: 100%;
}

body {
font-family: 'Oxygen', sans-serif;
line-height: 1.5;
overflow-x: hidden;
-webkit-font-smoothing: antialiased;
text-shadow: 0 0 2px #555;
background-color: rgba(0,0,0,1);
color: ${(props) => props.theme.white}
}

img, picture, video, canvas, svg {
display: block;
max-width: 100%;
}

input, button, textarea, select {
font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
overflow-wrap: break-word;
}

#root, #__next {
isolation: isolate;
}
ul, li {
  list-style: none;
}
a {
  color: white;
  text-decoration: none;
}

button {
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgb(180, 180, 180) rgb(224, 224, 224);
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: rgb(9 9 9);
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(40 40 40);
}
`;

export default GlobalStyle;
