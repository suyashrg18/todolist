const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value) {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } else {
    alert("Invalid Task");
  }

  inputBox.value = "";
  saveData()
}

listContainer.addEventListener(
  "click",
  (e) => {
    const tagName = e.target.tagName;
    switch (tagName) {
      case "LI":
        e.target.classList.toggle("checked");
        break;
      case "SPAN":
        e.target.parentElement.remove();
        break;
      default:
        break;
    }
    saveData()
  },
  false
);

function saveData() {
  localStorage.setItem("taskList", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("taskList")
}

showTask()