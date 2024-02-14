// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
const mousemove1 = document.createElement("div");
const mousemove2 = document.createElement("div");
const cursor = document.createElement("div");
mousemove1.classList.add("mousemove1");
mousemove2.classList.add("mousemove2");
cursor.classList.add("cursor");
document.body.appendChild(mousemove1);
document.body.appendChild(mousemove2);
document.body.appendChild(cursor);
window.addEventListener("mousemove", (e) => {
  mousemove1.style.top = e.pageY + "px";
  mousemove1.style.left = e.pageX + "px";
  mousemove2.style.top = e.pageY + "px";
  mousemove2.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
