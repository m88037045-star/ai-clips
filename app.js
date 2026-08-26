console.log("ClipAI frontend loaded.");

function createProject() {
  const input = document.getElementById("videoUrl");

  if (!input) return;

  const url = input.value.trim();

  if (!url) {
    alert("Please enter a video URL.");
    return;
  }

  localStorage.setItem("clip_source_url", url);

  window.location.href = "project.html";
}
