This example is using 2 useRefs.

There is an useRef use for the value in the input, and another to display the previous value. At the beginning, the value of inputRef will be null as it is empty. 

When changes happens to the input, the onChange will activate the handleChange function with currentValue stores the input value and console log the two useRef and set the currentValue to previousValue.