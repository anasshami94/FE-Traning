"use strict";

var element = null;

var dragStart = function dragStart(ev) {
  ev.currentTarget.classList.add('dragging');
  element = ev.target;
};

function dragEnter(ev) {
  ev.preventDefault();
  return true;
}

function dragOver(ev) {
  ev.preventDefault();
  return false;
}

var dragEnd = function dragEnd(ev) {
  element.classList.remove('dragging');
  element = null;
};

function dragDrop(ev) {
  if (!ev.target.classList.contains('tasks')) return false;
  element.parentNode.removeChild(element);
  ev.target.appendChild(element);
  element.classList.remove('dragging');
}

Array.from(document.querySelectorAll('.card')).forEach(function (card) {
  card.setAttribute('draggable', true);
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
  Array.from(card.children).forEach(function (child) {
    child.setAttribute('draggable', false);
  });
});
Array.from(document.querySelectorAll('.tasks')).forEach(function (col) {
  col.addEventListener('ondrop', dragDrop);
  col.addEventListener('ondragenter', dragEnter);
  col.addEventListener('ondragover', dragOver);
});