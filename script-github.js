function loadGitHubProjects() {
  fetch("https://api.github.com/users/KalebJBakken26/repos")
    .then((res) => res.json())
    .then((repos) => {
      const grid = document.getElementById("projectGrid");
      grid.innerHTML = ""; // Clear current content

      repos.forEach((repo) => {
        // Optional filter: skip forks or certain repos
        if (repo.fork) return;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h2>${repo.name}</h2>
          <p>${repo.description || "No description provided."}</p>
          <div class="tags">
            <span class="tag">${repo.language || "Other"}</span>
          </div>
          <a href="${repo.html_url}" target="_blank">View Project</a>
        `;

        grid.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("GitHub API error:", err);
      document.getElementById("projectGrid").innerHTML =
        "<p style='text-align:center;'>⚠️ Failed to load GitHub projects.</p>";
    });
}

loadGitHubProjects(); // Auto-run
