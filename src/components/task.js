export const createTaskTemplate = (taskText) => {
  return (
    `<li class="task">
      <input class="task-checkbox" id="first reason" type="checkbox" name="" value="">
      <label class="task-text" for="first reason">${taskText}</label>
      <span class="remove">remove</span>
    </li>`
  );
};
