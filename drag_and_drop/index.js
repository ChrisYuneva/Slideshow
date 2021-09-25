const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart); 
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover); // элемент находится выше позиции, на которую можем поместить
    placeholder.addEventListener('dragenter', dragenter); // заходим на позицию, куда можно поместить
    placeholder.addEventListener('dragleave', dragleave); // покидаем эту территорию
    placeholder.addEventListener('drop', drop); // отпустили 
}

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0)
    
}

function dragend (event) {
    event.target.className = 'item';
}

function dragover (event) {
    event.preventDefault();
}

function dragenter (event) {
    event.target.classList.add('hovered');
}

function dragleave (event) {
    event.target.classList.remove('hovered');
}

function drop (event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
}
