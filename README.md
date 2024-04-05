#1 - Imported useRef (to create mutable references) and the useState (to manage state) hooks from React and linked the application to Clicker.css for page stylization.

#2 - Defined the React component "Clicker."  Initialized clickRef with useRef and useState to manage the state of the click count.

#3 - Defined handleClick as a function to be called upon whenever the button si clicked where upon click, the number of clicks counted goes up by one from the current state.

#4 - The return statement entails the structure of the clicker component.  It contains a div with a parent class name of container along with the clicker box sub container that contains the title, button, and paragraph structure for the Clicker component.  

// - The button triggers the handleClick function that increases the count by 1 whenever clicked; however, it does not cause a re-render as useRef makes the state adjustment mutable

#5 - The Clicker component is then exported for use wherever else need be.  