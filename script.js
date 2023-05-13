let totalResult = document.getElementById("span1");

class ToDoList {
  constructor(listValue) {
  this.listValue = listValue;
  }
}

class UiMethods {
  static addList({ list }) {  

  const listValue = document.getElementById("list_value");
  const divNode = document.createElement("div");
  divNode.setAttribute("class", "list_sections");
  const cardInner = `
  
  <li>${list.listValue}</li>
  <span class="trash_button">
    <i class="fas fa-trash-alt"></i>
  </span>
`;
  divNode.innerHTML = cardInner;
  listValue.appendChild(divNode);

  const spanNodes = document.querySelectorAll("buttonTrsh");
  spanNodes.forEach((spanNode) => {
  spanNode.addEventListener("click", function (e) {
  e.currentTarget.parentElement.remove();
  updateCount();
  });
  });
  updateCount();
  }
}

const addButton = document.getElementById("addValue");

addButton.addEventListener("click", () => {
  const inputData = document.getElementById("text1").value;
  let list = new ToDoList(inputData);
  UiMethods.addList({ list });
  document.getElementById("text1").value = ""; 
});


const deleteButton = document.getElementById("deleteBtn");

deleteButton.addEventListener("click", () => {
    const listValue = document.getElementById("list_value");
    while (listValue.hasChildNodes()) {
    listValue.removeChild(listValue.firstChild);
    updateCount();
    }
});


function updateCount() {
    let i = document.querySelectorAll(".list_sections").length;
    totalResult.textContent = i;
  }
  