// Make the DIV element draggable:
var counter = 1;

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    e.target.style.top = (e.target.offsetTop - pos2) + "px";
    e.target.style.left = (e.target.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
}

function showTextArea(e) {
    // remove onmousedown
    e.target.onmousedown = null;
    // show textarea
    console.log(e.target.children[0])
    e.target.children[0].style.visibility="visible"
    // hide div
    e.target.style.visibility = "hidden";
}

function hideTextArea(e) {
    // add onmousedown
    e.target.onmousedown = ndragMouseDownull;
    // hide textarea
    console.log(e.target.children[0])
    e.target.children[0].style.visibility="visible"
    //show div

}

function addNewNote() {
    let id = "note-" + counter++;
    const newnote = document.createElement("div");
    newnote.id = id;
    //newnote.draggable = "true";
    newnote.onmousedown = dragMouseDown;
    newnote.onclick = showTextArea;
    newnote.onfocusout = hideTextArea;
    newnote.classList.add("note");
    newnote.innerHTML = `
        <div class="note-txtarea">
            <div class="note-header" draggable="true"></div>
            <textarea class="txt-area"></textarea>
            <div class="note-toolbar">
                <i class="fas fa-heading"></i>
                <i class="fas fa-list-ul"></i>
                <i class="fas fa-palette"></i>
            </div>
        </div>
    `;      
    document.getElementById("main").appendChild(newnote);    
}

