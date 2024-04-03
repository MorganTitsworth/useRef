# useRef

## What is useRef doing?

useRef is doing two things.

First it is updating the style attribute of the html button element. We are doing this to show that html element attributes can be updated without needing a rerender.

Second we are injecting a field called count into the ref object and displaying this object within an html h3 element to keep track of how many times the ref object has been updated. But this is only displayed upon a rerender due to it not being an attribute of an html element, instead it is a child of the button element.

### ?

Is injecting a new field into the ref object a best practice? Or should a second ref object be created to store that data instead?

By injecting a new field, that data is then accessible and therefore not secure so I assume it is best to use a second ref object instead, especially when working with
P.I.I.

Myself and Alexander were just curious.

## What is useState doing?

useState is being used to update a count and demonstrate that by updating this state, it causes a rerender.
