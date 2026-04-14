async function loadProjects() {
  const res = await fetch("projects.json");
  const projects = await res.json();

  const container = document.getElementById("projects");

  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project";

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    div.onclick = () => openModal(project);

    container.appendChild(div);
  });
}

function openModal(project) {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <video src="${project.video}" controls autoplay></video>
      <button onclick="this.parentElement.parentElement.remove()">Close</button>
    </div>
  `;

  document.body.appendChild(modal);
}

loadProjects();