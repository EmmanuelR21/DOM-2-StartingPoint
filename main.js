// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

const removeColumnButton = document.getElementById("remove-column");

removeColumnButton.addEventListener("click", () => {
  const columnsToDelete = document.getElementsByTagName("tr");

  for (let i = 0; i < columnsToDelete.length; i++) {
    columnsToDelete[i].children[0].remove();
  }
});
