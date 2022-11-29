
const btn = document.querySelector('button');
const inputEl = document.querySelector('input');
const list = document.querySelector('ul');

function addGoal()
{
    const inputValue = inputEl.value;
    const listItem = document.createDocumentFragment('li');

    listItem.textContent = inputValue;
    list.appendChild(listItem);
}

btn.addEventListener('click', addGoal);