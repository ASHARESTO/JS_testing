let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inPutfield = document.getElementById('inputfield');

addToDoButton.addEventListener('click', function() {
    var paragrah = document.createElement('p');
    paragrah.classList.add('paragrah-styling');
    paragrah.innerText = inPutfield.Value;
    toDoContainer.appendChild(paragrah);
    inPutfield.Value = "";
    paragrah.addEventListener('click', function() {
        paragrah.style.textDecoration = "line-throgh";

    })
    paragrah.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragrah);
    })

})