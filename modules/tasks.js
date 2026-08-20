export function initTasks(inputId, buttonId, listId) {
  const input = document.getElementById(inputId);
  const addButton = document.getElementById(buttonId);
  const list = document.getElementById(listId);

  let tasks = JSON.parse(localStorage.getItem("myDashboardTasks")) || [];

  const saveToStorage = () => {
    localStorage.setItem("myDashboardTasks", JSON.stringify(tasks));
  };

  const render = () => {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <span class="${task.completed ? "done" : ""}">${task.text}</span>
                <div>
                    <button class="toggle-btn">${task.completed ? "Undo" : "Done"}</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
      li.querySelector(".toggle-btn").onclick = () => toggleTask(index);
      li.querySelector(".delete-btn").onclick = () => deleteTask(index);
      list.appendChild(li);
    });
  };

  const addTask = () => {
    const text = input.value.trim();
    if (text) {
      tasks.push({ text: text, completed: false });
      input.value = "";
      saveToStorage();
      render();
    }
  };

  const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveToStorage();
    render();
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveToStorage();
    render();
  };

  addButton.onclick = addTask;
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  render();
}
