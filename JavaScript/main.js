import typedText from "./index.js";

//import or declare an array

const list = ['Great', 'Awsome', 'Strong', 'Courages'];

const happy = ['Have a nice day.'];

//array goes in the 1st pram & selected HTML item in the next

typedText(list, '.type-text', 200);

typedText(happy, '.happy', 1000);