// Accessing parent, child, and sibling elements using DOM traversal methods
// Access the parent element of a specific element
const container = document.getElementById('container');
console.log(container.parentNode);

const paragraphs = container.children;
console.log(paragraphs);

const firstParagraph = container.firstElementChild;
console.log(firstParagraph);

const secondParagraph = firstParagraph.nextElementSibling;
console.log(secondParagraph);

// Navigating the DOM tree using properties like parentNode, children, and nextSibling
const contentDiv = document.querySelector('.content');
const nestedParagraph = contentDiv.children[0];

console.log(nestedParagraph);

console.log(nestedParagraph.previousSibling);

console.log(nestedParagraph.nextSibling);
