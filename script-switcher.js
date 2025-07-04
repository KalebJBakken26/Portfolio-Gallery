function switchTo(source) {
  // Remove previously loaded script
  const existingScript = document.getElementById("project-loader");
  if (existingScript) existingScript.remove();

  // Load selected script
  const script = document.createElement("script");
  script.id = "project-loader";
  script.src = source === "local" ? "script-local.js" : "script-github.js";
  document.body.appendChild(script);

  // ✅ Toggle active class on the buttons
  document.querySelectorAll(".toggle-buttons button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const clickedButton = source === "local"
    ? document.querySelector("button[onclick*='local']")
    : document.querySelector("button[onclick*='github']");

  if (clickedButton) clickedButton.classList.add("active");
}
