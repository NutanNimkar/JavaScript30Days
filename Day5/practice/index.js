var textC = document.getElementById('textParagraph')
const buttonText = document.getElementById('changeTextButton')
buttonText.addEventListener('click', () => {
    textC.textContent = 'New text';
})
const input = document.getElementById('userInput')
const displayInputButton = document.getElementById('displayInputButton')

displayInputButton.addEventListener('click', () => {
    let display = document.getElementById('displayArea')
    display.innerHTML = `<p>${input.value} added value </p>`;
})

const list = document.getElementById('itemList');
const addItemButton = document.getElementById('addItemButton');
const removeItemButton = document.getElementById('removeItemButton');
addItemButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
})
removeItemButton.addEventListener('click', () => {
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    }
})

const table = document.getElementById('dataTable');
const addRowButton = document.getElementById('addRowButton');
const highlightTableButton = document.getElementById('highlightTableButton');

addRowButton.addEventListener('click', () => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');

    cell1.textContent = 'New Name';
    cell2.textContent = Math.floor(Math.random() * 50);
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
})
function addHighlight(e){
    if(e.target.tagName === 'td'){
        e.target.classList.toggle('highlight')
    }
    const rows = [...table.getElementsByTagName('td')]
    rows.forEach((row)=> row.classList.toggle('highlight')) 
}
highlightTableButton.addEventListener('click', addHighlight);

const toggle = document.getElementById('toggleVisibilityButton');
const toggleParagraph = document.getElementById('toggleParagraph');
toggle.addEventListener('click', () => {
    toggleParagraph.classList.toggle('hidden');
});