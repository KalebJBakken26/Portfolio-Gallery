fetch("projects.json")
  .then((res) => res.json())
  .then((projects) => {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = ""; // 🔥 Clears GitHub projects or anything currently inside


    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <a href="${project.link}" target="_blank">View Project</a>
      `;

      grid.appendChild(card);
    });
  })
  .catch((error) => console.error("Error loading projects:", error));
