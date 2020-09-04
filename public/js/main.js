const dragStart = function(event) {
    console.log('dragged')
    event.currentTarget.classList.add('dragging');
};

const dragEnd = function(event) {
    event.currentTarget.classList.remove('dragging');
};

Array.from(document.querySelectorAll('.card')).forEach(function(card) {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
});