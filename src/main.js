import {createTasksListTemplate} from './components/tasks-list.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskButtonTemplate} from './components/task-button.js';
import {createTasksCountTemplate} from './components/tasks-count.js';
import {TASKS_LIST} from './utils/mock.js';

const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(`.main-content`);
const footerElement = document.querySelector(`.footer`);
renderTemplate(mainElement, createTasksListTemplate());
renderTemplate(footerElement, createTasksCountTemplate(TASKS_LIST.length));

const tasksListElement = mainElement.querySelector(`.tasks-list`);
for (const task of TASKS_LIST) {
  renderTemplate(tasksListElement, createTaskTemplate(task));
}

renderTemplate(mainElement, createTaskButtonTemplate());

// Создание нового таска;
const newTaskButton = mainElement.querySelector(`.new-task-button`);

const newTaskButtonClickHandler = () => {
  console.log(`New task`);
};

newTaskButton.addEventListener(`click`, newTaskButtonClickHandler);
