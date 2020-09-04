"use strict";

var dragStart = function dragStart(event) {
  console.log('dragged');
  event.currentTarget.classList.add('dragging');
};

var dragEnd = function dragEnd(event) {
  event.currentTarget.classList.remove('dragging');
};

Array.from(document.querySelectorAll('.card')).forEach(function (card) {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});