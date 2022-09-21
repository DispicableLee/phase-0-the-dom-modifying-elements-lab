// Write your code here!
const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }

  element.append(ul);

  const main = document.getElementById("main");
    main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

main.style.height = "300px";
main.style.backgroundColor = "#27647B";
main.remove();




const newHeader = document.createElement("h1")
newHeader.textContent = "Robert is the Champion!"
newHeader.setAttribute("id", "victory")
document.getElementById("victory")
document.body.append(newHeader)

