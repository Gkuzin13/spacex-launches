import { createGlobalStyle } from 'styled-components';
import ExoLight from './assets/fonts/Exo-Light.ttf';
import ExoRegular from './assets/fonts/Exo-Regular.ttf';
import ExoBold from './assets/fonts/Exo-Bold.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Exo';
  src: url(${ExoLight}) format('ttf'),
       url(${ExoRegular}) format('ttf'), 
       url(${ExoBold}) format('ttf');

}
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
font-family: 'Exo', 'sans-serif';
line-height: 1.5;
overflow-x: hidden;
-webkit-font-smoothing: antialiased;
text-shadow: 0 0 2px #555;
background-color: rgba(0,0,0,1);
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
