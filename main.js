import { initClock } from "./modules/clock.js";
import { initTasks } from "./modules/tasks.js";
import { initQuotes } from "./modules/quotes.js";

initClock("clock");
initTasks("task-input", "add-task", "task-list");
initQuotes("quote-text", "quote-author", "refresh-quote");

const userName = "Alex";
document.getElementById("welcome-msg").textContent =
  `Welcome back, ${userName}!`;

// Renders the full habit list to the DOM.
// For each habit, creates a checkbox, a label with the habit name, and a delete button.
// Calls onToggle(id) when checkbox changes, onDelete(id) when delete is clicked.
export function renderHabits(habits, onToggle, onDelete){
  const habitList = document.getElementById("habit-list");
  habitList.innerHTML = ""; // Clear existing habits

  habits.forEach(habit => {
    const habitItem = document.createElement("li");
    habitItem.className = "habit-item";
    habitItem.innerHTML = `
      <input type="checkbox" id="habit-${habit.id}">
      <label for="habit-${habit.id}">${habit.name}</label>
      <button class="delete-habit">Delete</button>
    `;
    habitList.appendChild(habitItem);
  });
}

// add event listeners to the habit item elements for toggling and deleting habits

export function addHabitEventListeners(habitItem, habitId, onToggle, onDelete) {
  const checkbox = habitItem.querySelector("input[type='checkbox']");
  const deleteButton = habitItem.querySelector(".delete-habit");
  
  checkbox.addEventListener("change", () => {
    onToggle(habitId);
  });

  deleteButton.addEventListener("click", () => {
    onDelete(habitId);
  });
}

