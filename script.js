function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = () => {
    li.classList.toggle("done");
  };

  const del = document.createElement("span");
  del.textContent = " ❌";
  del.style.cursor = "pointer";
  del.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(del);
  taskList.appendChild(li);
  taskInput.value = "";
}
