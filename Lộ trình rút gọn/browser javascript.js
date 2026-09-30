const students = document.getElementsByClassName("student");

console.log('typeof students: ' + typeof students);
console.log(students);

console.log(students[0] instanceof Node);
console.log(students[0] instanceof Element);
console.log(students[0] instanceof HTMLElement);
console.log(students[0] instanceof HTMLDivElement);
console.log(typeof students[0]);

var usernameElement = document.getElementById("username");
usernameElement.addEventListener("change", function(event) {
    console.log("Giá trị property: ", event.target.value);
    console.log("Giá trị attr: ", usernameElement.getAttribute("value"));
});